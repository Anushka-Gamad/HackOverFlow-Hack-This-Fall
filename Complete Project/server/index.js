const express = require('express');
const cors = require('cors');
// const { signup , login } = require('./controllers/auth.js');
const authRoutes = require("./routes/auth.js");

const app = express();
const PORT = process.env.PORT || 5000;

require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const messagingServiceSid = process.env.TWILIO_MESSAGING_SERVICE_SID;
const twilioClient = require('twilio')(accountSid, authToken);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req,res) => {
    res.send("Hello , world");
});
// app.get('/auth/signup', (req,res) => {
//     signup(req);
//     console.log("Hi")
//     res.send("Hello");
// });

app.use('/auth',authRoutes);

app.listen(PORT,() => console.log(`Server is running on port ${PORT}`));
