import firebase from "firebase";

export const fetchNodeData = async (catId) => {
  const list = [];
  try {
    const snapshot = await firebase
      .firestore()
      .collection("node")
      .where("catType.catId", "==", catId)
      .get();
    (await snapshot).forEach((doc) => {
      list.push({ id: doc.id, ...doc.data() });
    });
  } catch (error) {
    console.log(error);
  }
  return list;
};
