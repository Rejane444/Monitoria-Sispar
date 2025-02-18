import {useNavigate} from "react-router-dom";
import styles from "./Login.module.scss";
import Logo from "../../assets/Tela Login/logo.png";

function Login() {

  const navigate = useNavigate()
  const irParaReembolsos = () => {
    navigate("/reembolsos")  //Redirecionando para a página de reembolsos
  }

  return (
    <main className={styles.mainLogin}>
      <section className={styles.containerNavio}></section>

      <section className={styles.containerFormulario}>
        <img src={Logo} alt="Logo da wilson sons" />
        <h1>Boas vindas ao Novo Portal SISPAR</h1>
        <p>Sistema de Emissão de Boletos e Parcelamento</p>

        <form action="">
          <input type="email" name="email" id="email" placeholder="Email" />
          <input type="password" name="senha" id="senha" placeholder="Senha" />
        </form>
          <a href="#resetsenha"> Esqueci minha senha</a>
          <div>
            <button onClick={irParaReembolsos} className={styles.buttonEntrar}> Entrar</button>
            <button className={styles.buttonCriarconta}>Criar contar </button>
          </div>
      </section>
    </main>
  );
}

export default Login;