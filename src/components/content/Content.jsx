import Banner from "./banner/Banner";

const Content = () => {
  return (
    <main className="p-5 bg-[#F8F9FD]">
      <div className="w-full h-full ">
        <div className="p-4 mt-7 text-center">
          <h3 className="text-lg">Seja Bem vindo!</h3>
          <p className="font-bold">Aqui é o melhor para os melhores</p>
        </div>
      </div>
      <Banner />
    </main>
  );
};

export default Content;
