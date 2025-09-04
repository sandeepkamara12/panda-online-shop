import axios from "axios";
import crypto from "crypto";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { merchantTransactionId } = req.body; // from PhonePe redirect

      // PhonePe credentials
      const MERCHANT_ID = process.env.PHONEPE_MERCHANT_ID;
      const SALT_KEY = process.env.PHONEPE_SALT_KEY;
      const SALT_INDEX = process.env.PHONEPE_SALT_INDEX || 1;

      // Status check endpoint
      const statusUrl = `https://api.phonepe.com/apis/pg-sandbox/pg/v1/status/${MERCHANT_ID}/${merchantTransactionId}`;

      // Generate X-VERIFY header
      const sha256 = crypto
        .createHash("sha256")
        .update(`/pg/v1/status/${MERCHANT_ID}/${merchantTransactionId}` + SALT_KEY)
        .digest("hex");
      const xVerify = sha256 + "###" + SALT_INDEX;

      // Call PhonePe status API
      const response = await axios.get(statusUrl, {
        headers: {
          "Content-Type": "application/json",
          "X-VERIFY": xVerify,
          "X-MERCHANT-ID": MERCHANT_ID,
        },
      });

      console.log("Payment status:", response.data);

      if (response.data.success && response.data.code === "PAYMENT_SUCCESS") {
        // ✅ Mark order paid in DB
        return res.status(200).json({ status: "success", data: response.data });
      } else {
        // ❌ Failed or pending
        return res.status(200).json({ status: "failure", data: response.data });
      }
    } catch (error) {
      console.error("PhonePe status error:", error.response?.data || error.message);
      return res.status(500).json({ error: "Payment verification failed" });
    }
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
