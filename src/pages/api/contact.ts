import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default function (req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });

  const mailData = {
    from: process.env.USER,
    to: "vulpothedev@gmail.com",
    subject: `Message From ${req.body.name}`,
    text: req.body.message,
    html: `<p>${req.body.message} Email Orginiated from ${req.body.email}</p>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    // @ts-ignore
    if (err) return console.log(err) && res.status(500).json({ error: err });
    else console.log(info);
  });
  res.status(200);
}
