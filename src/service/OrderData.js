import { db } from "src/boot/firebase";
const buyingOrders = db.collection("/buyingOrdersTest");
const sellingOrders = db.collection("/sellingOrdersTest");

const activeBuyingOrders = buyingOrders
  .where("isApproved", "==", true)
  .where("isTradeApproved", "==", false)
  .where("isCancelled", "==", false);
const activeSellingOrders = sellingOrders
  .where("isApproved", "==", true)
  .where("isTradeApproved", "==", false)
  .where("isCancelled", "==", false);

const pendingBuyingOrders = buyingOrders
  .where("isApproved", "==", false)
  .where("isCancelled", "==", false);
const pendingSellingOrders = sellingOrders
  .where("isApproved", "==", false)
  .where("isCancelled", "==", false);

import { ref, onUnmounted } from "vue";

export const createBuyingOrder = (order) => {
  return buyingOrders.add(order);
};

export const getBuyingOrder = async (id) => {
  const order = await buyingOrders.doc(id).get();
  return order.exists ? order.data() : null;
};

export const updateBuyingOrder = (id, order) => {
  return buyingOrders.doc(id).update(order);
};

export const deleteBuyingOrder = (id) => {
  return buyingOrders.doc(id).delete();
};

export const getActiveBuyingOrders = () => {
  const orders = ref([]);
  const close = activeBuyingOrders.onSnapshot((snapshot) => {
    orders.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  });
  onUnmounted(close);
  return orders;
};

export const createSellingOrder = (order) => {
  return sellingOrders.add(order);
};

export const getSellingOrder = async (id) => {
  const order = await sellingOrders.doc(id).get();
  return order.exists ? order.data() : null;
};

export const updateSellingOrder = (id, order) => {
  return sellingOrders.doc(id).update(order);
};

export const deleteSellingOrder = (id) => {
  return sellingOrders.doc(id).delete();
};

export const getActiveSellingOrders = () => {
  const orders = ref([]);
  const close = activeSellingOrders.onSnapshot((snapshot) => {
    orders.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  });
  onUnmounted(close);
  return orders;
};

export const getPendingBuyingOrders = () => {
  const orders = ref([]);
  const close = pendingBuyingOrders.onSnapshot((snapshot) => {
    orders.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  });
  onUnmounted(close);
  return orders;
};

export const getPendingSellingOrders = () => {
  const orders = ref([]);
  const close = pendingSellingOrders.onSnapshot((snapshot) => {
    orders.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  });
  onUnmounted(close);
  return orders;
};
