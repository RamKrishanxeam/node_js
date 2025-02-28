const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const router = express.Router();

router.post("/create-payment-session", async function (req, res) {
  const { line_items } = req.body;
  console.log(line_items);
  console.log("sdsdd");

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: line_items,
      mode: "payment",
      success_url: "https://node-js-9c2b.onrender.com/success",
      cancel_url: "https://node-js-9c2b.onrender.com/cancel",
      invoice_creation: {
        enabled: true,
      },
    });
    res.send({ message: "Session created successfully", id: session.id });
  } catch (error) {
    throw new Error(error);
    console.log(error);
  }
});

module.exports = router;
