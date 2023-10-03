import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaLocationArrow,
  FaPhone,
} from "react-icons/fa";

const HeaderTop = () => {
  return (
    <section className="w-full h-[40px] flex justify-center items-center font-normal max-xl:hidden">
      <div className="w-[90%] h-auto flex justify-between border-b border-gray-200 ">
        <div className="flex gap-3 ">
          <p className="flex items-center text-[14px] gap-2 cursor-default">
            <FaLocationArrow />
            São Paulo, Centro, Brasil
          </p>
          <p className="flex items-center text-[14px] gap-2 cursor-default">
            <FaPhone />
            (99) 99999-9999
          </p>
        </div>
        <div>
          <ul className="flex gap-3 ">
            <li className="cursor-pointer">
              <FaLinkedinIn />
            </li>
            <li className="cursor-pointer">
              <FaFacebookF />
            </li>
            <li className="cursor-pointer">
              <FaTwitter />
            </li>
            <li className="cursor-pointer">
              <FaInstagram />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeaderTop;
