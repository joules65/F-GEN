import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
;

// Initialize Firebase Admin SDK
admin.initializeApp();
const db = admin.firestore();

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: "Hostinger",
  auth: {
    user: "f-gen@kiongozi.tech", // Replace with your email
    pass: "aSHKABAN2005@", // Use an app password if needed
  },
});

// API Endpoint: Store form data & send an email
app.post("/contact", async (req, res) => {
  try {
    const { firstName, lastName, email, message } = req.body;

    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({ success: false, error: "All fields are required" });
    }

    // Store data in Firestore
    const docRef = await db.collection("contacts").add({
      firstName,
      lastName,
      email,
      message,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    });

    // Send email notification
    // Notify yourself
await transporter.sendMail({
    from: "f-gen@kiongozi.tech",
    to: "f-gen@kiongozi.tech", // Your email (owner)
    subject: "New Contact Form Submission",
    text: `New message from ${firstName} ${lastName} (${email}):\n\n${message}`,
  });
  
  // Send confirmation email to the user
  await transporter.sendMail({
    from: "f-gen@kiongozi.tech",
    to: email,  // Send to the user's email
    subject: "Thank you for reaching out!",
    text: `Hi ${firstName},\n\nThank you for contacting us. We received your message:\n\n"${message}"\n\nWe'll get back to you soon!`,
  });
  

    return res.status(200).json({ success: true, id: docRef.id });
  } catch (error) {
    console.error("Error handling contact form submission:", error);
    return res.status(500).json({ success: false, error: (error as Error).message });
  }
});

// Deploy Firebase Function
exports.api = functions.https.onRequest(app);
