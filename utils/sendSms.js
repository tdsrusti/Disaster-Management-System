// utils/sendSms.js
// This module handles sending SMS using Twilio
const twilio = require("twilio");
require("dotenv").config();

const client = new twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const sendEmergencySMS = async (to, message) => {
    try {
        const response = await client.messages.create({
            body: message,
            from: process.env.TWILIO_PHONE_NUMBER,  // Make sure this is a **verified Twilio number**
            to: to,  // Emergency contact number
        });

        console.log("✅ SMS Sent! Message SID:", response.sid);
        return response.sid;
    } catch (error) {
        console.error("❌ Error sending SMS:", error);
        return null;
    }
};

module.exports = sendEmergencySMS;
