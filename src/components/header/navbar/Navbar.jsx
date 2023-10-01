import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" w-full flex justify-between items-center">
      <div>
        <img src="#" alt="Logo" className="block  pl-5" />
      </div>
      <div>
        <ul className="flex">
          <li className="pr-5">
            <Link to="/" className="block  hover:bg-slate-900">
              Home
            </Link>
          </li>
          <li className="pr-5">
            <Link to="products" className="block  hover:bg-slate-900">
              Produtos
            </Link>
          </li>
          <li>
            <Link to="car" className="block  hover:bg-slate-900">
              Carrinho
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex items-center">
          <li>
            <Link to="login" className="flex items-center  hover:bg-slate-900">
              Login
            </Link>
          </li>
          <li>
            <Link
              to="register"
              className="inline-flex items-center text-white bg-emerald-600 py-2 px-3 rounded shadow-md hover:bg-emerald-700 active:bg-emerald-800 transition-colors mx-5"
            >
              Registre-se
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
