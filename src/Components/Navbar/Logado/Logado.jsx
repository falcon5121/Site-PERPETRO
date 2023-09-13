import React from "react";
import * as Drop from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import axios from "axios";
import {
  Btn,
  DropCont,
  DropItem,
  DropRoot,
  DropTrig,
  ImgPerf,
  LinkTo,
} from "./LogadoStyle";

import { useSelector } from "react-redux";

const Logado = () => {
  const decodeJwt = (token) =>
    decodeURIComponent(
      atob(token.split(".")[1].replace("-", "+").replace("_", "/"))
        .split("")
        .map((c) => `%${("00" + c.charCodeAt(0).toString(16)).slice(-2)}`)
        .join("")
    );

  if (localStorage.getItem("user_credentials").length > 0) {
    decodeJwt(localStorage.getItem("user_credentials"));
  }

  const Logout = (e) => {
    axios.get("http://localhost:3001/login/deslogar", {
      withCredentials: true,
    });
    // localStorage.removeItem("user_credentials");
    window.location.reload(false);
  };

  return (
    <DropRoot modal={false}>
      <DropTrig>
        {/* <ImgPerf
          src={`data:${login.loginAuth.value.img.contentType};base64,${login.loginAuth.value.img.data}`}
          alt=""
        /> */}
        <div
          style={{
            width: "30px",
            height: "30px",
            backgroundColor: "white",
            borderRadius: "50%",
          }}
        />
      </DropTrig>
      <Drop.Portal>
        <DropCont>
          <DropItem>
            <Btn>
              <LinkTo to="/Painel">Meu Perfil</LinkTo>
            </Btn>
          </DropItem>
          <DropItem>
            <Btn onClick={Logout}>Sair</Btn>
          </DropItem>
        </DropCont>
      </Drop.Portal>
    </DropRoot>
  );
};

export default Logado;
