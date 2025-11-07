import { useState, useEffect } from "react";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "@/components/libs/firebaseInit";

export function useInventoryItems() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "inventoryItems"));
        const data = querySnapshot.docs.map((doc) => {
          const inventoryItemData = doc.data();
          return {
            id: doc.id,
            label: inventoryItemData.displayName,
            value: inventoryItemData.displayName,
            ...inventoryItemData,
          };
        });
        setItems(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  return { items, loading, error };
}
