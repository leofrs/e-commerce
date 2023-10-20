import { Link } from "react-router-dom";

const Register = () => {
  return (
    <main className="p-5">
      <form className="w-[400px] mx-auto p-6 my-16">
        <h2 className="text-2xl font-semibold text-center mb-4">Registre-se</h2>
        <p className="text-center text-gray-500 mb-3">
          Já tem uma conta?
          <Link
            to="/login"
            className="text-sm pl-2 text-black hover:text-emerald-600 underline underline-offset-2"
          >
            Login
          </Link>
        </p>
        <div className="mb-4">
          <input
            placeholder="Nome Completo"
            type="text"
            name="name"
            className="border p-2 border-gray-900 focus:border-emerald-600 focus:outline-none focus:ring-purple-500 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <input
            placeholder="Email"
            type="email"
            name="email"
            className="border p-2 border-gray-900 focus:border-emerald-600 focus:outline-none focus:ring-purple-500 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <input
            placeholder="Senha"
            type="password"
            name="password"
            className="border p-2 border-gray-900 focus:border-emerald-600 focus:outline-none focus:ring-emerald-600 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <input
            placeholder="Repita a Senha"
            type="password"
            name="password"
            className="border p-2 border-gray-900 focus:border-emerald-600 focus:outline-none focus:ring-emerald-600 rounded-md w-full"
          />
        </div>
        <button className="btn-primary p-2 bg-blue-700 hover:bg-blue-900 active:bg-blue-700 w-full">
          Registrar
        </button>
      </form>
    </main>
  );
};

export default Register;
