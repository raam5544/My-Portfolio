module.exports = {
    cart
  };
  
  // A cart is the unpaid order for a user
  async function cart(req, res) {
    try {
        res.send('Hi')
    //   const cart = await Order.getCart(req.user._id);
    //   res.status(200).json(cart);
    } catch (e) {
      res.status(400).json({ msg: e.message });
    }
  }