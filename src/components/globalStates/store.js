import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { create } from "zustand";
import { persist } from "zustand/middleware";
const getUser = async (set) => {
  let isLoadingUserData = false;
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      set((state) => ({ user: user }));
      set((state) => ({ loadingLogin: true }));
    } else {
      set((state) => ({ loadingLogin: false }));
    }
  });
};
const useStore = create(
  persist((set, get) => ({
    user: null,

    getUser: () => getUser(set),
  }))
);

export default useStore;
