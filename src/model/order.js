export class Order {
  constructor(
    quantity,
    price,
    rate,
    commission,
    isApproved,
    isCancelled,
    isTradeApproved,
    isTraded,
    orderDate,
    orderPayment,
    orderUser,
    orderUserId,
    tradeDate,
    tradePayment,
    tradeUser,
    tradeUserId
  ) {
    this.quantity = quantity;
    this.price = price;
    this.rate = rate;
    this.commission = commission;
    this.isApproved = isApproved;
    this.isCancelled = isCancelled;
    this.isTradeApproved = isTradeApproved;
    this.isTraded = isTraded;
    this.orderDate = orderDate;
    this.orderPayment = orderPayment;
    this.orderUser = orderUser;
    this.orderUserId = orderUserId;
    this.tradePayment = tradePayment;
    this.tradeDate = tradeDate;
    this.tradeUser = tradeUser;
    this.tradeUserId = tradeUserId;
  }
}
