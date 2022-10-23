// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const { message } = req.body;
  const sgMail = require("@sendgrid/mail");
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: "contact@marhi.me", // Change to your recipient
    from: "maxime.joyes@gmail.com", // Change to your verified sender
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: `<strong>and ${message} to do anywhere, even with Node.js</strong>`,
  };
  sgMail
    .send(msg)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.error(error);
    });
  res.status(200).json({ message: "Email sent" });
}
