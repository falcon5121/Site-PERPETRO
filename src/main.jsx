import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Global from "./Global/global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Error from "./Error";

import Pibic from "./Pages/Pesquisa/PIBIC";
import Pro_Cole from "./Pages/Pesquisa/Projetos_Coletivos";
import Pro_Ind from "./Pages/Pesquisa/Projetos_individuais";

import Cursos from "./Pages/Ensino_e_Extensão/Cursos";
import Oficinas from "./Pages/Ensino_e_Extensão/Oficinas";
import Probex from "./Pages/Ensino_e_Extensão/Probex";
import Prolicen from "./Pages/Ensino_e_Extensão/Prolicen";

import Agenda from "./Pages/Laboratorio/Agenda";
import Apresentação from "./Pages/Laboratorio/Apresentacao/Apresentacao";
import Parcerias from "./Pages/Laboratorio/Parcerias";
import Publicações from "./Pages/Laboratorio/Publicações";
import Quem_somos from "./Pages/Laboratorio/About/About.jsx";
import Digitais from "./Pages/Laboratorio/Digitais/Digitais";
import Painel from "./Pages/Painel de Controle";
import Postagens from "./Pages/Laboratorio/Publicações/Posts";

// import { Provider } from "react-redux";
// import store from "./store";
// import { fetchLogin, login } from "./Redux/variavel";

// store.dispatch(fetchLogin());

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Global />
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="*" element={<Error />} />

          <Route path="/pesquisa/pibic" element={<Pibic />} />
          <Route path="/pesquisa/projetos_coletivos" element={<Pro_Cole />} />
          <Route path="/pesquisa/projetos_individuais" element={<Pro_Ind />} />

          <Route path="/ensino_e_extensao/cursos" element={<Cursos />} />
          <Route path="/ensino_e_extensao/oficinas" element={<Oficinas />} />
          <Route path="/ensino_e_extensao/probex" element={<Probex />} />
          <Route path="/ensino_e_extensao/prolicen" element={<Prolicen />} />

          <Route path="/laboratorio/agenda" element={<Agenda />} />
          <Route path="/laboratorio/apresentacao" element={<Apresentação />} />
          <Route path="/laboratorio/parcerias" element={<Parcerias />} />
          <Route path="/laboratorio/publicacoes" element={<Publicações />} />
          <Route path="/laboratorio/quem_somos" element={<Quem_somos />} />
          <Route path="/laboratorio/recursos_digitais" element={<Digitais />} />

          <Route path="/Painel" element={<Painel />} />
          {/* <Route path="/editor" element={<Editor />} /> */}
          <Route
            path="/laboratorio/publicacoes/postagens/:handle"
            element={<Postagens />}
          />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
