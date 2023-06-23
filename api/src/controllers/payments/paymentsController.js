const axios = require("axios");
const {
  PAYPAL_API,
  PAYPAL_API_CLIENT,
  PAYPAL_API_SECRET,
} = require("../../config");

const createOrderController = async (_req, res) => {
  try {
    const order = {
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: "100.20",
          },
          description: "object", //necessary
        },
      ],
      application_context: {
        brand_name: "WorkAway",
        landing_page: "LOGIN",
        user_action: "PAY_NOW",
        return_url: "http://localhost:3001/payments/capture",
        cancel_url: "http://localhost:3000/booking",
      },
    };

    const response = await axios.post(
      `${PAYPAL_API}/v2/checkout/orders`,
      order,
      {
        auth: {
          username: PAYPAL_API_CLIENT,
          password: PAYPAL_API_SECRET,
        },
      }
    );

    res.json(response.data.links[1].href);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const captureOrderController = async (req, res) => {
  const { token } = req.query;
  const response = await axios.post(
    `${PAYPAL_API}/v2/checkout/orders/${token}/capture`,
    {},
    {
      auth: {
        username: PAYPAL_API_CLIENT,
        password: PAYPAL_API_SECRET,
      },
    }
  );
  res.send(response.data); //aquí redirecciona a la pagina pagado
};

const cancelOrderController = (req, res) => {
  res.send("canceling order"); // redireccionar a la pagina de la vista para pago
};

module.exports = {
  cancelOrderController,
  captureOrderController,
  createOrderController,
};