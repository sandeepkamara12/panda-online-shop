import axios from "axios";
import crypto from "crypto";

export default async function handler(req, res) {
  console.log(req.method, 'method');
  if (req.method === "POST") {
    try {
      const { name, phone, amount } = req.body;
      console.log("API received:", { name, phone, amount });
       const MERCHANT_ID = process.env.PHONEPE_MERCHANT_ID;
      const SALT_KEY = process.env.PHONEPE_SALT_KEY;
      const SALT_INDEX = process.env.PHONEPE_SALT_INDEX || 1;

      const payload = {
        merchantId: MERCHANT_ID,
        merchantTransactionId: "TXN_" + Date.now(), // unique txn id
        merchantUserId: 'user_' + Date.now(),
        name:name,
        amount: Number(amount), // convert to paise
        redirectUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/payment-success`,
        redirectMode: "POST",
        callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/callback`,
        mobileNumber: phone,
        paymentInstrument: {
          type: "PAY_PAGE",
        },
      };

      // Step 1: Convert payload to base64
      const base64Payload = Buffer.from(JSON.stringify(payload)).toString("base64");

      // Step 2: Generate X-VERIFY signature
      const sha256 = crypto
        .createHash("sha256")
        .update(base64Payload + "/pg/v1/pay" + SALT_KEY)
        .digest("hex");
      const xVerify = sha256 + "###" + SALT_INDEX;

      // Step 3: Call PhonePe API
      const response = await axios.post(
        "https://api.phonepe.com/apis/pg-sandbox/pg/v1/pay", // sandbox endpoint
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

      // Step 4: Send payment URL back to frontend
      const paymentUrl = response.data?.data?.instrumentResponse?.redirectInfo?.url;
      return res.status(200).json({ paymentUrl });
      
    } catch (error) {
      console.error("PhonePe API error:", error.response?.data || error.message);
      return res.status(500).json({ error: "Payment initiation failed" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}