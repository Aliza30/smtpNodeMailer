const nodemailer = require("nodemailer");

const sendmail = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount();

    let transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        // host: "smtp.ethereal.email",
        port: 587,
        auth: {

            user: 'aliza302001@gmail.com',
            pass: 'vhaejlkdkozsrmkc'


            // user: 'keon.mclaughlin66@ethereal.email',
            // pass: '7huZs2PG5gEpRVPgGU'
        },
    });

    let info = await transport.sendMail({
        from: 'hello <keon.mclaughlin66@ethereal.email>', // sender address
        bcc: "contactaliza9@gmail.com, aliza302001@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        // text: "Hello world?", // plain text body
        html: ` <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Poster</title>
<style>
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }
  
  .poster {
    background-color: #f9f9f9;
    width: 50%;
    margin: 50px auto;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }
  
  .poster img {
    width: 100%;
    border-radius: 8px;
  }
  
  .poster h1 {
    font-size: 24px;
    margin-top: 20px;
    color: #333;
    text-align: center;
  }
  
  .poster p {
    font-size: 18px;
    color: #555;
    line-height: 1.6;
    margin-top: 10px;
    text-align: center;
  }
</style>
</head>
<body>

<div class="poster">
<img src="https://source.unsplash.com/V1IjTXINee0" alt="Poster Image">
<h1>Exciting Event!</h1>
  <p>Join us for an unforgettable evening of music, food, and fun!</p>
</div>

</body>
</html>
`,//html body
    });

    console.log("Message sent: %s", info.messageId);

    res.json(info);
};

module.exports = sendmail;
