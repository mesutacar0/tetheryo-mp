import { db } from "src/boot/firebase";
const allUsers = db.collection("/usersTest");

const activeUsers = allUsers.where("isDeleted", "!=", true);
const approvedUsers = allUsers
  .where("isApproved", "==", true)
  .where("isDeleted", "!=", true);
const pendingUsers = allUsers
  .where("isApproved", "==", false)
  .where("isDeleted", "!=", true);
const deletedUsers = allUsers.where("isDeleted", "==", true);

import { ref, onUnmounted } from "vue";

export const getUser = async (id) => {
  const order = await allUsers.doc(id).get();
  return order.exists ? order.data() : null;
};

export const updateUser = (id, user) => {
  return allUsers.doc(id).update(user);
};

export const approveUser = (id) => {
  return allUsers.doc(id).update({
    isApproved: true,
  });
};

export const unApproveUser = (id) => {
  return allUsers.doc(id).update({
    isApproved: false,
  });
};

export const createUser = (user) => {
  return allUsers.add(user);
};

export const pendingUserCount = async () => {
  let size = 0;
  await pendingUsers.get().then((snapshot) => {
    size = snapshot.size;
  });
  return size;
};

export const getPendingUsers = () => {
  const users = ref([]);
  const close = pendingUsers.onSnapshot((snapshot) => {
    users.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  });
  onUnmounted(close);
  return users;
};

export const getActiveUsers = () => {
  const users = ref([]);
  const close = activeUsers.onSnapshot((snapshot) => {
    users.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  });
  onUnmounted(close);
  return users;
};

export const getApprovedUsers = () => {
  const users = ref([]);
  const close = approvedUsers.onSnapshot((snapshot) => {
    users.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  });
  onUnmounted(close);
  return users;
};

export const getDeletedUsers = () => {
  const users = ref([]);
  const close = deletedUsers.onSnapshot((snapshot) => {
    users.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  });
  onUnmounted(close);
  return users;
};
