// server/server.js

const express = require('express');
const path = require('path');
const cors = require('cors');
const axios = require('axios'); // To make requests to Telegram API

// Load environment variables from .env file
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// --- MIDDLEWARE ---
app.use(cors());
app.use(express.json());

// --- API ROUTES ---
app.post('/api/contact', async (req, res) => {
  // Get the form data from the request
  const { fullName, email, phone, serviceType, preferredDate, details } = req.body;
  
  // Get your Telegram credentials from the .env file
  const token = process.env.TELEGRAM_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  
  // Format the message for Telegram (using markdown for bolding)
  const message = `
*New Photography Booking Request* 📸

*Name:* ${fullName}
*Email:* ${email}
*Phone:* ${phone}
*Service Type:* ${serviceType}
*Preferred Date:* ${preferredDate}

*Details:*
${details}
  `;

  // The URL for the Telegram Bot API
  const telegramApiUrl = `https://api.telegram.org/bot${token}/sendMessage`;

  try {
    // Use axios to send the message to your Telegram account
    await axios.post(telegramApiUrl, {
      chat_id: chatId,
      text: message,
      parse_mode: 'Markdown', // This allows for the bolding with '*'
    });
    
    console.log('Telegram message sent successfully');
    res.status(200).json({ message: 'Booking request sent successfully!' });

  } catch (error) {
    console.error('Error sending Telegram message:', error);
    res.status(500).json({ message: 'Error sending booking request.' });
  }
});


// --- SERVING THE REACT APP ---
// This catch-all route serves your React app for any request that isn't an API call
app.get(/^(?!\/api).*/, (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

// --- START THE SERVER ---
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});