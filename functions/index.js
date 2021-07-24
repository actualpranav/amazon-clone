const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");

//new
const Stripe = require("stripe");
//commented
// const stripe = require("stripe")
const stripe = Stripe(
  "sk_test_51JFbIiSCQatdV47XUairU4cTiylfOxerRKiHk6n4HvEvY1HBelBHWL7X5NBamTZ83TO9kuPTvqaZT0vQr0GKqtvc00MxWx5qpy"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
// app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    //amount: 462000,
    currency: "inr",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

//this setup is needed to get up backend express running on cloud function
//api endpoint
//http://localhost:5001/challenge-629de/us-central1/api
