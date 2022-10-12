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

export const deleteBuyingOrder = (id) => {
  return buyingOrders.doc(id).update({
    isCancelled: true,
  });
};

export const deleteSellingOrder = (id) => {
  return sellingOrders.doc(id).update({
    isCancelled: true,
  });
};

export const approveBuyingOrder = (id) => {
  return buyingOrders.doc(id).update({
    isApproved: true,
  });
};

export const approveSellingOrder = (id) => {
  return sellingOrders.doc(id).update({
    isApproved: true,
  });
};

export const approveBuyingOrderTrade = (id) => {
  return buyingOrders.doc(id).update({
    isTradeApproved: true,
  });
};

export const approveSellingOrderTrade = (id) => {
  return sellingOrders.doc(id).update({
    isTradeApproved: true,
  });
};

export const getActiveSellingOrders = () => {
  const orders = ref([]);
  const close = activeSellingOrders.onSnapshot((snapshot) => {
    orders.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  });
  onUnmounted(close);
  return orders;
};

export const getAllBuyingOrders = () => {
  const orders = ref([]);
  const close = buyingOrders.onSnapshot((snapshot) => {
    orders.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  });
  onUnmounted(close);
  return orders;
};

export const getAllSellingOrders = () => {
  const orders = ref([]);
  const close = sellingOrders.onSnapshot((snapshot) => {
    orders.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  });
  onUnmounted(close);
  return orders;
};

export const getUserBuyingOrders = (userId) => {
  const orders = ref([]);
  const close = buyingOrders
    .where("orderUserId", "==", userId)
    .onSnapshot((snapshot) => {
      orders.value = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    });
  const close1 = sellingOrders
    .where("tradeUserId", "==", userId)
    .onSnapshot((snapshot) => {
      orders.value.concat(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });
  onUnmounted(close);
  onUnmounted(close1);
  return orders;
};

export const getUserSellingOrders = (userId) => {
  const orders = ref([]);
  const close = sellingOrders
    .where("orderUserId", "==", userId)
    .onSnapshot((snapshot) => {
      orders.value = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    });
  const close1 = buyingOrders
    .where("tradeUserId", "==", userId)
    .onSnapshot((snapshot) => {
      orders.value.concat(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });
  onUnmounted(close);
  onUnmounted(close1);
  return orders;
};
