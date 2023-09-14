import store from "../../../store";
import { useSelector } from "react-redux";
import { useRef, useState } from "react";
import * as Login from "@radix-ui/react-dialog";
import axios from "axios";
import {
  Button,
  Msg,
  Form,
  LoginBtn,
  LoginC,
  LoginCancel,
  LoginClose,
  LoginDesc,
  LoginO,
  LoginR,
  LoginT,
  Separator,
  Username,
} from "./modalCss";
import { serverIp } from "../../../App";
import Logado from "../Logado/Logado";

function ButtonSwitch() {
  if (localStorage.key("user_credentials")) {
  }

  const user = useRef(null);
  const pass = useRef(null);
  const [data, setData] = useState();
  const [displayStatus, setDisplayStatus] = useState("none");
  const login = useSelector((store) => store);

  const submit = async (e) => {
    console.log("passei por aqui");
    e.preventDefault();
    const data = { user: user.current.value, pass: pass.current.value };
    try {
      await axios
        .post(`${serverIp}/login`, data, { withCredentials: true })
        .then((e) => {
          localStorage.setItem("user_credentials", e.data);
        });

      window.location.reload(false);
    } catch (err) {
      setDisplayStatus("block");
      setInterval(() => {
        setDisplayStatus("none");
      }, [5000]);
    }
  };

  // return store.getState().loginAuth.value == false ? (
  return !localStorage.key("user_credentials") == true ? (
    <LoginR modal={false}>
      <LoginBtn>Entrar</LoginBtn>
      <Login.Portal>
        <LoginO />
        <LoginC>
          <Form className="myForm">
            {/*action="http://localhost:3001/login" method="post"*/}
            <LoginT>Entrar</LoginT>
            <LoginDesc>Acesso de administrador da pagina</LoginDesc>
            <Msg display={displayStatus}>
              Verifique as informações e tente novamente!
            </Msg>

            <Username
              placeholder={"Usuário"}
              ref={user}
              name="username"
              id="username"
            />

            <Username
              type={"password"}
              placeholder={"Senha"}
              ref={pass}
              name="password"
              id="password"
            />
            <LoginClose>X</LoginClose>
            <Separator>
              <LoginCancel>Cancelar</LoginCancel>
              <Button type="submit" onClick={(e) => submit(e)}>
                Entrar
              </Button>
            </Separator>
          </Form>
        </LoginC>
      </Login.Portal>
    </LoginR>
  ) : (
    <Logado />
  );
}

export default ButtonSwitch;
