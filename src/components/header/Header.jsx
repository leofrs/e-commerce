import Navbar from "./navbar/Navbar";
import HeaderTop from "./headerTop/HeaderTop";
const Header = () => {
  return (
    <header className="w-full flex flex-col bg-slate-[#FFFFFF] shadow-md text-black font-serif font-extralight mb-1">
      <HeaderTop />
      <Navbar />
    </header>
  );
};

export default Header;
