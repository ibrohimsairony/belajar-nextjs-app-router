import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import bcrypt from "bcrypt";
import app from "./init";
import { use } from "react";

const firestore = getFirestore(app);

export const retrieveData = async (collectionData: string) => {
  const snapshot = await getDocs(collection(firestore, collectionData));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data;
};

export const retrieveDataById = async (collectionData: string, id: string) => {
  const snapshot = await getDoc(doc(firestore, collectionData, id));
  const data = snapshot.data();
  return data;
};

export const register = async (data: {
  name: string;
  password: string;
  email: string;
  role?: string;
}) => {
  const q = query(
    collection(firestore, "users"),
    where("email", "==", data.email)
  );
  try {
    const snapshot = await getDocs(q);
    const user = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    if (user.length > 0) {
      return {
        status: false,
        statusCode: 400,
        message: "Email Already axists",
      };
    }

    data.role = "admin";
    data.password = await bcrypt.hash(data.password, 16);
    await addDoc(collection(firestore, "users"), data);
    return { status: true, statusCode: 200, message: "Register Success" };
  } catch (error) {
    return { status: false, statusCode: 400, message: "Server Error" };
  }
};

export const login = async (data: { email: string }) => {
  const q = query(
    collection(firestore, "users"),
    where("email", "==", data.email)
  );
  try {
    const snapshot = await getDocs(q);
    const user = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    if (user) {
      console.log(user[0]);
      return user[0];
    } else {
      return null;
    }
  } catch (err) {
    return null;
  }
};
