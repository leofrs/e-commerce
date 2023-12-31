import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../features/carSlice";
import { useEffect, useState } from "react";

const Car = () => {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  const [vazio, setVazio] = useState(true);
  useEffect(() => {
    if (cart.length > 0) {
      setVazio(false);
    } else {
      setVazio(true);
    }
  }, [cart]);

  return (
    <main className="p-5">
      <div className="container lg:w-2/3 xl:w-2/3 mx-auto">
        <h1 className="text-3xl font-bold mb-6">Lista de compras</h1>

        <div className="p-4 rounded-lg shadow">
          {vazio ? (
            <p>O carrinho está vazio.</p>
          ) : (
            <div>
              {" "}
              {cart.map((item) => {
                return (
                  <div key={item.id}>
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                      <img src={item.image} className="w-36" alt={item.title} />
                      <div className="flex flex-col justify-between">
                        <div className="my-1">
                          <h3>{item.title}</h3>
                          <span className="text-lg font-semibold">
                            {" "}
                            R$: {item.totalPrice}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            Quantidade: {item.quantidade}
                          </div>
                          <button
                            name="remover"
                            title="Remover"
                            onClick={() => dispatch(removeFromCart(item))}
                            className="text-blue-700 hover:bg-blue-900 hover:text-white border border-blue-700 rounded-md ml-4 px-4"
                          >
                            Remover
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        {vazio ? (
          <div className="border border-red mt-3 px-3">
            <p>Preço total: R$ 0,00 </p>
          </div>
        ) : (
          <div className="border border-red mt-3 px-3">
            <p>Preço total: R$ {totalPrice}</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Car;
