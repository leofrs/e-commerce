import useFetchData from "../hooks/useFetchData";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/carSlice";

const Products = () => {
  const { data } = useFetchData();
  const dispatch = useDispatch();

  return (
    <main className="p-5 ">
      <div className=" grid gap-8 grig-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-5">
        {data.map((item) => {
          const { id, title, price, image } = item;
          return (
            <div
              key={id}
              className="border border-1 border-gray-200 rounded-md hover:border-blue-600 transition-colors flex flex-col gap-8 items-center"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-[200px] object-contain bg-[#F3F3F3] rounded-lg hover:scale-95 hover:rotate-1 transition-transform block overflow-hidden"
              />
              <h1 className="cursor-default text-center">{title}</h1>
              <button
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: id,
                      image: image,
                      title: title,
                      quantidade: 1,
                      price: price,
                    })
                  )
                }
                className="btn-primary border border-1 border-blue-700 rounded shadow-md hover:bg-blue-900 p-2  hover:text-white mb-2 transition-colors"
              >
                Comprar
              </button>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Products;
