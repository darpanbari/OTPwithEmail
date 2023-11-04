import nodemailer from "nodemailer";

export const getOtpMail = () => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "darpanbari056@gmail.com",
      pass: "qapu ukvx qnwe suan",
    },
  });

  const tableData = `
  <div style="width: 50%; margin: 0 auto; background-color: #ffffff; border-radius: 10px;">
  <div style="border-bottom: 1px solid #ccc; padding: 10px 20px;">
      <h2 style="font-weight: bold; color: #00a65a;">H A A J R I</h2>
      <div style="color: #888">4 October, 2023</div>
  </div>
  <div style="margin: 20px 50px; background-color: #f0f0f0; padding: 20px; border-radius: 10px; text-align: center;">
      <h4 style="margin-bottom: 20px;">Your OTP</h4>
      <span style="color: #00a65a; font-style: italic; font-weight: bold;">Hey ABC,</span>
      <p style="color: #888; margin: 20px 0;">Thank you for choosing Haajri Company. Use the following OTP to complete the procedure to change your email address. OTP is valid for 5 minutes. Do not share this code with others, including Haajri's employees.</p>
      <h2 style="color: #00a65a;">1 2 3 4 5 6</h2>
  </div>
</div>
`;

  const mailOptions = {
    from: "darpanbari056@gmail.com",
    to: "chiragprajapati781@gmail.com",
    subject: "Attendance Report",
    text: "Email In Table Formate",
    html: `${tableData}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
};
