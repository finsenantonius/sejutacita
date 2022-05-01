import { useState, useEffect } from "react";

export default function useFetchCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      const response = await fetch('https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-categories');
      const categoriesData = await response.json()
      setCategories(categoriesData);
    };
    fetchCategory()
  }, [])

  return {
    categories
  }
}