const Stripe = require('stripe');

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

async function handlerCheckout(req, res) {
  const { amount, paymentMethod } = req.body;

  try {
    const { id, card } = paymentMethod;

    const payment = await stripe.paymentIntents.create({
      amount,
      payment_method: id,
      currency: 'usd',
      description: 'Compra de prueba en el top-v29',
    });

    const confirmPayment = await stripe.paymentIntents.confirm(payment.id);

    if (confirmPayment.status !== 'succeeded') {
      return res.status(400).json({ message: 'No se pudo realizar el pago' });
    }

    return res.status(200).json({ message: 'Pago realizado con éxito' });
  } catch (error) {
    console.log('🚀 error:', error);
    return res.status(500).json({ message: error.message });
  }
}

module.exports = {
  handlerCheckout,
};
