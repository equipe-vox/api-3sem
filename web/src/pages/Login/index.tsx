import { Button } from "../../components";
import styles from "./styles.module.css";

export function Login() {

  const styles = {
    linear: {
      background: `linear-gradient(18.66deg, rgba(0, 180, 241, 0.4) 6.55%, rgba(255, 239, 117, 0.4) 98.12%)`,
      filter: `blur(100px)`
    }
  }

  return (
    <div className="flex flex-col h-screen w-screen">
      <h1 className="absolute mx-44 mt-12 flex text-white font-bold">LOGO</h1>
      <div className="flex md:px-32 bg-background h-screen w-screen bg-slate-900 items-center justify-center">
        <div style={styles.linear} className="absolute mr-96 opacity-30 w-2/4 h-2/4 flex self-center">
        </div>

        <div className="md:mx-14 mx-3 w-screen h-2/4 flex flex-col justify-start">
          <h1 className="mt-10 mb-4 text-3xl text-blue font-body font-semibold">Entre para</h1>
          <h1 className="text-xl text-text-color font-body">Visualizar clientes, cadastrar</h1>
          <h1 className="mt-1 text-xl text-text-color font-body">vendas e mais!</h1>
          <h1 className="mt-14 text-xs text-text-color font-body">Não possui uma conta ainda? Contate o</h1>
          <h1 className="text-xs text-blue font-body">Administrador responsável.</h1>
        </div>

        <div className="md:mx-14 mx-3 w-screen h-2/4 flex flex-col justify-start">
          <h1 className="text-2xl text-white text-bold">Login</h1>
          <div className="mt-8">
            <input className="w-full p-3 bg-input-color rounded-xl text-text-color" type="text" placeholder="example@gmail.com"/>
          </div>
          <div className="mt-10">
            <input className="w-full p-3 bg-input-color rounded-xl text-text-color" type="password" placeholder="Digite sua senha"/>
          </div>
          <div className="mt-10">
            <button className="w-full p-3 bg-blue text-white rounded-xl font-semibold" placeholder="example@gmail.com">ENTRAR</button>
          </div>
        </div>
      </div>

    </div>
  );
}

