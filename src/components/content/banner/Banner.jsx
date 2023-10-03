import banner3 from "../../../images/banner-3.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className=" w-full h-[70vh] flex bg-[#F8F9FD] max-lg:flex-col items-center">
      <div className="w-[40%] flex flex-col justify-center items-center ">
        <h1 className="text-4xl pl-4 text-center ">ESCOLHA UM CARRO</h1>
        <p className="text-base mt-4 text-justify">
          Ganhe um bônus na manutenção
        </p>
        <Link to="products">
          <button className="inline-flex items-center text-white bg-emerald-600 py-2 px-3 rounded shadow-md hover:bg-emerald-700 active:bg-emerald-800 transition-colors mt-4">
            VENHA CONFERIR
          </button>
        </Link>
      </div>
      <div className="w-full ">
        <img src={banner3} alt="banner de um carro" className="w-full " />
      </div>
    </section>
  );
};

export default Banner;
