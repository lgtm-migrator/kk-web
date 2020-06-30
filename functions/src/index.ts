import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import * as nodemailer from "nodemailer";

const cors = require("cors")({ origin: true });

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

admin.initializeApp();

const {
  gmail: { email: user, password: pass },
} = functions.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user,
    pass,
  },
});

export const sendMail = functions
  .region("asia-northeast1")
  .https.onRequest((request: any, response: any) => {
    const {
      body: { email, name, subject, text },
    } = request;

    cors(request, response, () =>
      transporter.sendMail(
        {
          from: `piro <${user}>`,
          text: `${text} \n ${name} ${email}`,
          to: user,
          subject: `kk-web: ${subject || "no subject"}`,
        },
        (error: any, info: any) => {
          if (error) {
            return response.status(550).send(error.toString());
          }

          return response.status(200).send("Sended");
        }
      )
    );
  });
