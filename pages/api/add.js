import axios from "axios";
import crypto from "crypto";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const { name, phone, amount } = req.body;

    const MERCHANT_ID = process.env.PHONEPE_MERCHANT_ID; // e.g. TEST-M23C6TP7BYY27_25090
    const SALT_KEY = process.env.PHONEPE_SALT_KEY;
    const SALT_INDEX = process.env.PHONEPE_SALT_INDEX || 1;

    // ✅ Build payload as per v2 docs
    const payload = {
      merchantId: MERCHANT_ID,
      merchantTransactionId: "TXN_" + Date.now(),
      merchantOrderId: "ORD_" + Date.now(),
      amount: Number(amount), // amount in paise
      merchantUserId: "user_" + Date.now(),
      mobileNumber: phone,
      paymentFlow: {
        type: "PG_CHECKOUT",
        message: "Order payment",
        merchantUrls: {
          redirectUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/payment-success`,
        },
      },
      metaInfo: {
        udf1: name,
      },
    };

    // ✅ Encode payload
    const base64Payload = Buffer.from(JSON.stringify(payload)).toString("base64");

    // ✅ Generate signature
    const sha256 = crypto
      .createHash("sha256")
      .update(base64Payload + "/checkout/v2/pay" + SALT_KEY)
      .digest("hex");
    const xVerify = sha256 + "###" + SALT_INDEX;

    // ✅ Call PhonePe API
    const response = await axios.post(
      "https://api-preprod.phonepe.com/apis/pg-sandbox/checkout/v2/pay",
      { request: base64Payload },
      {
        headers: {
          "Content-Type": "application/json",
          "X-VERIFY": xVerify,
          "X-MERCHANT-ID": MERCHANT_ID,
        },
      }
    );

    console.log("PhonePe Init Response:", response.data);

    // ✅ Extract redirect URL
    const paymentUrl = response.data?.data?.instrumentResponse?.redirectInfo?.url;

    if (!paymentUrl) {
      throw new Error("No paymentUrl returned from PhonePe");
    }

    return res.status(200).json({ paymentUrl });
  } catch (error) {
    console.error("PhonePe API error:", error.response?.data || error.message);
    return res.status(500).json({ error: "Payment initiation failed" });
  }
}
