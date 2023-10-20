const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors")
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ extended: true, limit: "25mb" }));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});

function sendEmail(email) {
    return new Promise((resolve, reject) => {
        var transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "ritik4828.be22@chitkara.edu.in",
                pass: "nccl ekau flqs ylhl"
            }
        });

        const mailConfigs = {
            from: "ritik4828.be22@chitkara.edu.in",
            to:email,
            subject: "Dev@Deakin",
            text: "Thanks to you to take subscription of our DEV@Deakin platfrom",
        };

        transporter.sendMail(mailConfigs, (error, info) => {
            if (error) {
                console.error(error);
                return reject({ message: "Error sending email" });
            }
            console.log("Email sent: " + info.response);
            return resolve({ message: "Email sent successfully" });
        });
    });
}

app.get("/", (req, res) => {
    res.send("Welcome to the Dev@Deakin application");
});

app.post("/send", (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).send("Email is missing");
    }

    sendEmail(email)
        .then((response) => res.send(response))
        .catch((error) => res.status(500).send(error));
});

app.listen(port, () => {
    console.log(`nodemailer listening at http://localhost:${port}`);
});