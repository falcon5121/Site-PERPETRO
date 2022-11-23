import React from "react";
import axios from "axios";
import styled from "styled-components";

import { Body, Container, CaixaTexto, Text, Content } from "./styles/Styles";
import Bar from "./Components/Bar";
import NewsComp from "./Components/NewsComp";
import MobiNav from "./Components/MobiNav";

import Footer from "./Components/Footer";

const News = styled.section`
  width: 30rem;
  height: 35rem;
  background-color: #282626;
  border-radius: 1rem;

  @media (max-width: 420px) {
    width: 25rem;
  }
`;

const Pg2 = styled.main`
  margin: auto;
  width: 80rem;
  height: 43.75rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 1288px) {
    width: 90%;
  }
`;

const Video = styled.section`
  width: 30rem;
  height: 30rem;
  background-color: #282626;
  border-radius: 1rem;
  padding-top: 2rem;
  padding-inline: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const VideoTxt = styled.p`
  font-size: 1.2rem;
  color: #f1b133;
  margin-top: 2rem;
  text-align: center;
`;

const LastNews = styled.h1`
  color: #f1b133;
  padding: 2em;
  padding-bottom: 1.5em;
  border-bottom: solid 1px #f2c46b;
`;

const RodaPe = styled.a`
  font-size: 0.75rem;
  color: #f1b133;
  text-decoration: none;
  padding-left: 1.25rem;
  font-weight: 600;
`;

const Img = styled.div`
  width: 33.75rem;
  height: 33.75rem;
  background-color: #cfcfcf;
  margin-inline: 4.375rem;
  top: 0;
  bottom: 0;
  margin-block: auto;

  @media (max-width: 768px) {
    width: 20rem;
    height: 20rem;
    margin-top: 2rem;
  }
`;

const VP = styled.div`
  width: 12.5rem;
  height: 12.5rem;
  background-color: #cfcfcf;
  margin: auto;
`;
function App() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#272844",
        }}
      >
        <Body color="#272844">
          <Bar pos={true} />
          <MobiNav amount="800" />

          <Container>
            <Img style={{}} /* ISSO SERA UMA FOTO */></Img>

            <CaixaTexto>
              <Text>PerPetro</Text>

              <Content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                pellentesque quam sed dolor tristique tincidunt. Cras euismod,
                sapien sit amet vulputate pharetra, mi justo cursus tortor, in
                tincidunt augue erat ut orci. Orci varius natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Praesent
                euismod sed lorem eu efficitur. Morbi cursus tincidunt mi sit
                amet blandit. Donec suscipit eros leo, vitae tincidunt justo
                scelerisque et. Donec quis tortor lacus. <br /> <br /> Nunc vel
                eleifend metus, eu mollis dolor. Phasellus sit amet justo non
                est tristique rutrum. Donec ac tristique velit. Morbi aliquam
                tincidunt ligula. Maecenas porttitor diam vel tortor interdum
                rhoncus. Vestibulum sodales ipsum sapien, ac luctus sapien
                imperdiet sed. Nulla quis dignissim erat. Integer maximus
                consequat enim at eleifend. Sed consectetur, turpis in maximus
                elementum, nulla quam molestie dolor, quis efficitur ante lectus
                egestas odio. Suspendisse rutrum enim id sapien hendrerit, sit
                amet semper mi mattis. Praesent accumsan ligula ex, vel sagittis
                ligula dapibus at.
              </Content>
            </CaixaTexto>
          </Container>
        </Body>
        <Body color="#161627">
          <Pg2>
            <News>
              {/* Noticias */}
              <LastNews>Últimas Notícias</LastNews>
              <ul>
                <NewsComp />
                <NewsComp />
                <NewsComp />
                <NewsComp />

                <RodaPe href="#">Ver Mais</RodaPe>
              </ul>
            </News>
            <Video>
              <VP />
              <VideoTxt>
                Este é um video demonstração do nosso trabalho, espero que
                gostem
              </VideoTxt>
            </Video>
          </Pg2>
        </Body>
        <Footer />
      </div>
    </>
  );
}

export default App;
