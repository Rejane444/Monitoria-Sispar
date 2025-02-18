import Historico from "../../assets/Dashboard/Botão - Histórico.png";
import Home from "../../assets/Dashboard/botão - Home.png";
import Pesquisa from "../../assets/Dashboard/Botão - Pesquisa.png";
import Reembolso from "../../assets/Dashboard/Botão - Reembolso.png";
import Sair from "../../assets/Dashboard/Botão - Sair.png";
import Perfil from "../../assets/Dashboard/image.png";
import Fechar from "../../assets/Dashboard/imagem-fechar-header.png";
import styles from "./NavBar.module.scss";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  return (
    <>  
    <nav className={styles.navBarEstilo}>
      <button>
        <img src={Fechar} alt="Botão abrir e fechar" />
      </button>

      <section>
        <img src={Perfil} alt="Foto do perfil" />

        <div>
          <button
            onClick={() => {
              navigate("/reembolsos");
            }}
          >
            <img src={Home} alt="Botão Home" />
          </button>

          <button onClick={()=>{navigate("/solicitacao")}}>
            <img src={Reembolso} alt="Botão Reembolso" />
          </button>

          <button onClick={()=>{navigate("/reembolsos")}}>
            <img src={Pesquisa} alt="Botão Pesquisa" />
          </button>

          <button onClick={()=>{navigate("/solicitacao")}}>
            <img src={Historico} alt="Botão histórico" />
          </button>
        </div>
      </section>

      <button className={styles.buttonSair}  onClick={()=>{navigate("/")}}>
        <img src={Sair} alt="Botão sair" />
      </button>
    </nav>
    </>  
  );
}

export default NavBar;