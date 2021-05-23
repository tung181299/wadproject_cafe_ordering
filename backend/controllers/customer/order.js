const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.getCheckout = async (req, res, next) => {
  const products = [];

  const stripeCheckoutSession = stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: products.map(product => {
      return {
        name: product.name,
        description: product.desc,
        amount: product.unitPrice * 100,
        currency: 'vnd',
        quantity: product.quantity
      };
    }),
    success_url: `${req.protocol}://${req.get('host')}/checkout/success`,
    cancel_url: `${req.protocol}://${req.get('host')}/checkout/cancel`
  });

  res.json({
    stripeCheckoutSessionId: stripeCheckoutSession.id
  })
};