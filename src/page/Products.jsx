import { useState, useEffect } from "react";
import { loja } from "../data/store";

const Products = () => {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    setData(loja);
    console.log(loja);
  }, []);
  return (
    <main className="p-5">
      <div className="grid gap-8 grig-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-5">
        {data.map((item) => {
          const { id, title, price, description, image } = item;
          return (
            <div
              key={id}
              className="border border-1 border-gray-200 rounded-md hover:border-emerald-600 transition-colors bg-white"
            >
              <img
                src={image}
                alt={title}
                className="rounded-lg hover:scale-105 hover:rotate-1 transition-transform block overflow-hidden"
              />
              <div className="p-4">
                <h3 className="text-lg">{title}</h3>
                <p>Descrição: {description}</p>
                <h5 className="font-bold">R$: {price}</h5>
              </div>
              <div className="flex justify-end py-3 px-4">
                <button className="btn-primary border border-1 border-emerald-700 rounded shadow-md hover:bg-emerald-700 p-2  hover:text-white  transition-colors">
                  Comprar
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Products;
