import Navbar from "./navbar/Navbar";

const Header = () => {
  return (
    <header className="w-full flex justify-between bg-slate-800 shadow-md text-white">
      <Navbar />
      {/*<button className="p-4 block lg::hidden">Ola</button>*/}
    </header>
  );
};

export default Header;
