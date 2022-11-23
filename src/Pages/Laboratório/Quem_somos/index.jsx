import React from "react";
import { Body } from "../../../styles/Styles";
import Footer from "../../../Components/Footer";
import Center from "../../../Components/Center";
import Bar from "../../../Components/Bar";
import { Cor, H1, P, Section } from "../../../styles/StylesPages";
import MobiNav from "../../../Components/MobiNav";

export default function () {
  return (
    <Cor>
      <Bar posi="false" />
      <MobiNav amount="10" />
      <Body
        color="#272844"
        vezes="1"
        estilos={"display: flex; justify-content: center"}
      >
        <Center>
          <H1>Quem Somos?</H1>
          <Section>
            <P>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur quo corrupti cum rerum nam similique voluptas fugiat
              recusandae repellat minima, laudantium doloribus esse. Doloremque
              vitae, aut commodi voluptas accusamus sint. <br /> <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur quo corrupti cum rerum nam similique voluptas fugiat
              recusandae repellat minima, laudantium doloribus esse. Doloremque
              vitae, aut commodi voluptas accusamus sint. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. <br /> <br /> Consequatur quo
              corrupti cum rerum nam similique voluptas fugiat recusandae
              repellat minima, laudantium doloribus esse. Doloremque vitae, aut
              commodi voluptas accusamus sint. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Consequatur quo corrupti cum rerum
              nam similique voluptas fugiat recusandae repellat minima,
              laudantium doloribus esse. Doloremque vitae, aut commodi voluptas
              accusamus sint. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Consequatur quo corrupti cum rerum nam similique voluptas
              fugiat recusandae repellat minima, laudantium doloribus esse.
              Doloremque vitae, aut commodi voluptas accusamus sint.
            </P>
          </Section>
        </Center>
      </Body>
      <Footer></Footer>
    </Cor>
  );
}
