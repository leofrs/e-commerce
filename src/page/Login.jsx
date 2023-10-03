import { Link } from "react-router-dom";

const Login = () => {
  return (
    <main className="p-5">
      <form className="w-[400px] mx-auto p-6 my-16">
        <h2 className="text-2xl font-semibold text-center mb-5">
          Faça o Login
        </h2>
        <p className="text-center text-gray-500 mb-6 ">
          Não tem uma conta?
          <Link
            to="/register"
            className="pl-2 text-sm text-black underline underline-offset-2 hover:text-emerald-600"
          >
            Registre-se
          </Link>
        </p>
        <div className="mb-4">
          <input
            id="loginEmail"
            type="email"
            name="email"
            placeholder="Insira seu Email"
            className="border p-2 border-gray-900 focus:border-emerald-600 focus:outline-none focus:ring-emerald-600 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <input
            id="loginPassword"
            type="password"
            name="password"
            placeholder="Insira sua Senha"
            className="border p-2 border-gray-900 focus:border-emerald-600 focus:outline-none focus:ring-emerald-600 rounded-md w-full"
          />
        </div>

        <div className="flex justify-between items-center mb-5">
          <div className="flex items-center">
            <input
              id="loginRememberMe"
              type="checkbox"
              className="mr-3 rounded border-gray-300 text-emerald-600 focus:ring-emerald-600"
            />
            <label>Lembrar?</label>
          </div>
          <a
            href="/src/password-reset.html"
            className="text-sm text-black underline underline-offset-2 hover:text-emerald-600"
          >
            Esqueceu seu Email ou senha?
          </a>
        </div>
        <button className="btn-primary p-2 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 w-full">
          Login
        </button>
      </form>
    </main>
  );
};

export default Login;
