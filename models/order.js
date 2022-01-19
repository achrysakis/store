class Order {
  constructor (id, cartProducts, totalPrice, date) {
    this.id = id;
    this.cartProducts = cartProducts;
    this.totalPrice = totalPrice;
    this.date = date
  }
}

export default Order;