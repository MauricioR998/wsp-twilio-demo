require('dotenv').config();

const client = require('twilio')(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

client.messages
  .create({
    from: 'whatsapp:+14155238886',
    body: 'Ahoy world!',
    to: 'whatsapp:+51973863161',
  })
  .then((message) => console.log(message.sid));
