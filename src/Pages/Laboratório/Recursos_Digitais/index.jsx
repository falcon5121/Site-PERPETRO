import React from "react";
import { Cor, H1, P, Section } from "../../../styles/StylesPages";
import { Body } from "../../../styles/Styles";
import Footer from "../../../Components/Footer/Footer";
import Center from "../../../Components/Center";
import Bar from "../../../Components/Navbar/Bar";
import MobiNav from "../../../Components/MobiNav";

export default function () {
  return (
    <Cor>
      <Bar posi="false" />
      <MobiNav />
      <Body
        color="#272844"
        vezes="1"
        estilos={"display: flex; justify-content: center"}
      >
        <Center>
          <H1>Recursos Digitais</H1>
        </Center>
      </Body>
      <Footer />
    </Cor>
  );
}
