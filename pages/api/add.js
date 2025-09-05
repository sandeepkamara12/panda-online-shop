import axios from "axios";
import crypto from "crypto";

export default async function handler(req, res) {
  console.log(req.method, 'method');
   if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
    try {
      const { name, phone, amount } = req.body;
      console.log("API received:", { name, phone, amount });
      const MERCHANT_ID = process.env.PHONEPE_MERCHANT_ID;
      const SALT_KEY = process.env.PHONEPE_SALT_KEY;
      const SALT_INDEX = process.env.PHONEPE_SALT_INDEX || 1;

      const txnId = "TXN_" + Date.now();
      const orderId = "ORDER_" + Date.now();

      const payload = {
        merchantId: MERCHANT_ID,
        merchantTransactionId: txnId, // unique txn id
        merchantOrderId: orderId, // ✅ new
        merchantUserId: "user_" + Date.now(),
        name,
        amount: Number(amount) * 100, // convert to paise
        expireAfter: 1200,
        redirectUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/payment-success`,
        redirectMode: "POST",
        callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/callback`,
        mobileNumber: phone,
        metaInfo: { // ✅ custom metadata
          udf1: "extra-info-1",
          udf2: "extra-info-2",
        },
        paymentFlow: { // ✅ v2 paymentFlow block
          type: "PG_CHECKOUT",
          message: "Processing payment",
          merchantUrls: {
            redirectUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/payment-success`
          }
        },
        paymentInstrument: {
          type: "PAY_PAGE",
        },
      };

      // Step 1: Convert payload to base64
      const stringToHash = base64Payload + "/checkout/v2/pay" + SALT_KEY;
      const sha256 = crypto.createHash("sha256").update(stringToHash).digest("hex");
      const xVerify = `${sha256}###${SALT_INDEX}`;

      // Step 3: Call PhonePe API
      const response = await axios.post(
        "https://api-preprod.phonepe.com/apis/pg-sandbox/checkout/v2/pay", // sandbox endpoint
        {
          request: base64Payload,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-VERIFY": xVerify,
            "X-MERCHANT-ID": MERCHANT_ID,
          },
        } 
      );
console.log("PhonePe v2 Response:", response.data);
      // Step 4: Send payment URL back to frontend
      const paymentUrl = response.data?.data?.instrumentResponse?.redirectInfo?.url;

    if (!paymentUrl) {
      return res.status(500).json({ error: "Payment URL missing in response" });
    }

    return res.status(200).json({ paymentUrl });
      
    } catch (error) {
      // console.error("PhonePe API error:", error.response?.data || error.message);
      return res.status(500).json({ error: "Payment initiation failed" });
    }
}