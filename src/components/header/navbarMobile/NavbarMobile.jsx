const NavbarMobile = () => {
  return (
    <div className="block fixed z-10 top-0 left-0 bottom-0 height h-full w-[220px] transition-all bg-slate-900 lg:hidden">
      <ul>
        <li>
          <a
            href="/src/index.html"
            className="block py-2 px-3 transition-colors hover:bg-slate-800"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/src/cart.html"
            className="flex items-center py-2 px-3 transition-colors hover:bg-slate-800"
          >
            Carrinho
          </a>
        </li>
        <li>
          <a
            href="/src/login.html"
            className="flex items-center py-2 px-3 transition-colors hover:bg-slate-800"
          >
            Login
          </a>
        </li>
        <li className="px-3 py-3">
          <a
            href="/src/signup.html"
            className="block text-center text-white bg-emerald-600 py-2 px-3 rounded shadow-md hover:bg-emerald-700 active:bg-emerald-800 transition-colors w-full"
          >
            Registre-se
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavbarMobile;
