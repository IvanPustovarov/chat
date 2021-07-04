import { db } from "./firebase";

/**
 *
 * @param {string} userName -- default name of user. "winston"
 * @param {string} text -- text of message that will add to db collection
 * @returns -- provide to up-to-date data
 */
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
/**
 *
 * @param {array} collection  -- get all messages from db
 * @returns -- array of message
 */

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
