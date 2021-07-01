import { db } from "./firebase";

const createMessage = (userName = "winston", text) => {
  return db
    .collection("messages")
    .add({
      userName,
      text,
    })
    .then((docRef) => {
      return docRef.get();
    });
};

const getMessages = (collection) => {
  return db
    .collection(collection)
    .get()
    .then((snapshot) => {
      const items = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return items;
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
};

export { getMessages, createMessage };
