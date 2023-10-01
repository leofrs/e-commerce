import Banner from "./banner/Banner";

const Content = () => {
  return (
    <main className="p-5">
      <div className="w-full h-full border border-1 border-gray-200 rounded-md hover:border-purple-600 transition-colors bg-white">
        <div className="p-4 text-center">
          <h3 className="text-lg">Seja Bem vindo!</h3>
          <p className="font-bold">Aqui é o melhor para os melhores</p>
        </div>
      </div>
      <Banner />
    </main>
  );
};

export default Content;
