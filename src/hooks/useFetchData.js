import { useState, useEffect } from "react";
import axios from "axios";

const useFetchData = () => {
  const URL = "https://fakestoreapi.com/products";
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(URL)
        .then((response) => {
          setData(response.data);
        })
        .catch((err) => {
          alert(err + "erro econtrado");
        });
    };
    fetchData();
  }, []);
  return { data };
};

export default useFetchData;
