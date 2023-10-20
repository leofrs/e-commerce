import banner from "../../assets/images/banner-compras.jpg";
const Content = () => {
  return (
    <main className="bg-[#F3F3F3]">
      <div className="w-full h-full ">
        <div className="pt-4 text-center">
          <h3 className="text-lg">Seja Bem vindo!</h3>
          <p className="font-bold">Aqui é o melhor para os melhores</p>
        </div>
      </div>
      <img src={banner} alt="" />
    </main>
  );
};

export default Content;
