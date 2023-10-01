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
              className="border border-1 border-gray-200 rounded-md hover:border-purple-600 transition-colors bg-white"
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
              <div className="flex justify-between py-3 px-4">
                <button className="w-10 h-10 rounded-full border border-1 border-purple-600 flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white active:bg-purple-800 transition-colors">
                  Ola
                </button>
                <button className="btn-primary border border-1 border-purple-600 p-2 hover:bg-purple-600 hover:text-white active:bg-purple-800 transition-colors">
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
