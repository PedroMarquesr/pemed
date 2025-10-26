"use client";

import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { app } from "@/components/libs/firebaseInit";

export function useAuthCheck() {
  const router = useRouter();

  useEffect(() => {
    const auth = getAuth(app);

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user || !user.uid) {
        router.push("/");
      }
    });

    return () => unsubscribe();
  }, [router]);
}
