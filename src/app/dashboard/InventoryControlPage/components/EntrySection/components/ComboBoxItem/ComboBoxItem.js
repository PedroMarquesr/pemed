"use client";

import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "@/components/libs/firebaseInit";
import { useState, useEffect } from "react";

export default function ComboBoxItem({ onSelect }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "inventoryItems"));
        const items = querySnapshot.docs.map((doc) => ({
          brandName: doc.brandName,
          ...doc.data(),
        }));
        setItems(items);
      } catch (error) {
        console.log("Erro ao buscar itens");
      }
    };
    fetchItems();
  }, []);

  return (
    <>
      <Select
        placeholder="Selecione o medicamento"
        onChange={(e) => onSelect(e.target.value)}
      >
        {medicamentos.map((item) => (
          <option key={item.id} value={item.id}>
            {item.nome || item.name || "Sem nome"}
          </option>
        ))}
      </Select>
    </>
  );
}
