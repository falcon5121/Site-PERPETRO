import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Global from "./Global/global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Pibic from "./Pages/Pesquisa/PIBIC";
import Pro_Cole from "./Pages/Pesquisa/Projetos_Coletivos";
import Pro_Ind from "./Pages/Pesquisa/Projetos_individuais";

import Cursos from "./Pages/Ensino_e_Extensão/Cursos";
import Oficinas from "./Pages/Ensino_e_Extensão/Oficinas";
import Probex from "./Pages/Ensino_e_Extensão/Probex";
import Prolicen from "./Pages/Ensino_e_Extensão/Prolicen";

import Agenda from "./Pages/Laboratório/Agenda";
import Apresentação from "./Pages/Laboratório/Apresentação";
import Parcerias from "./Pages/Laboratório/Parcerias";
import Publicações from "./Pages/Laboratório/Publicações";
import Quem_somos from "./Pages/Laboratório/Quem_somos";
import Recursos_digitais from "./Pages/Laboratório/Recursos_digitais";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Global />
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
      <Routes>
        <Route path="/pesquisa/pibic" element={<Pibic />} />
        <Route path="/pesquisa/projetos_coletivos" element={<Pro_Cole />} />
        <Route path="/pesquisa/projetos_individuais" element={<Pro_Ind />} />
      </Routes>
      <Routes>
        <Route path="/ensino_e_pesquisa/cursos" element={<Cursos />} />
        <Route path="/ensino_e_pesquisa/oficinas" element={<Oficinas />} />
        <Route path="/ensino_e_pesquisa/probex" element={<Probex />} />
        <Route path="/ensino_e_pesquisa/prolicen" element={<Prolicen />} />
      </Routes>
      <Routes>
        <Route path="/laboratorio/agenda" element={<Agenda />} />
        <Route path="/laboratorio/apresentacao" element={<Apresentação />} />
        <Route path="/laboratorio/agenda" element={<Parcerias />} />
        <Route path="/laboratorio/agenda" element={<Publicações />} />
        <Route path="/laboratorio/agenda" element={<Quem_somos />} />
        <Route path="/laboratorio/agenda" element={<Recursos_digitais />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
