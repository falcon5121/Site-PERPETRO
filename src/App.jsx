import React from "react";
import axios from "axios";
import fotoPerpetro from "/public/Fotos/fotoPerpetro.jpeg";

import { useState } from "react";

import { Body, Container, CaixaTexto, Text, Content } from "./styles/Styles";
import Bar from "./Components/Navbar/Bar";
import NewsComp from "./Components/NewsComp";
import MobiNav from "./Components/MobiNav";
import Loading from "./Components/Loading/Loading";

import Footer from "./Components/Footer/Footer";
import { useEffect } from "react";

import {
  Img,
  LastNews,
  News,
  Pg2,
  RodaPe,
  VP,
  Video,
  VideoTxt,
} from "./styleApp/styleApp";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    try {
      axios
        .get(`${serverIp}postagens`, { withCredentials: true })
        .then((e) => setData(e.data));
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      <Loading />
      <div
        style={{
          backgroundColor: "#272844",
        }}
      >
        <Body color="#272844">
          <Bar pos={true} />
          <MobiNav amount="800" />

          <Container>
            {/* <Img style={{}} ISSO SERA UMA FOTO ></Img> */}
            <img
              src={fotoPerpetro}
              style={{
                aspectRatio: "auto",
                objectFit: "cover",
                maxWidth: "33.75rem",
                height: "33.75rem",
                marginInline: "4.375rem",
                top: "0",
                bottom: "0",
                marginBlock: "auto",
              }}
            />
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
                {data != undefined ? (
                  <>
                    <NewsComp
                      date={data[data.length - 1].date}
                      tittle={data[data.length - 1].tittle}
                      desc={data[data.length - 1].content}
                    />
                    {/* {/* <NewsComp
                      date={data[data.length - 2].date}
                      tittle={data[data.length - 2].tittle}
                      desc={data[data.length - 2].content}
                    /> */}
                    {/* <NewsComp
                      date={data[data.length - 3].date}
                      tittle={data[data.length - 3].tittle}
                      desc={data[data.length - 3].content}
                    />
                    <NewsComp
                      date={data[data.length - 4]}
                      tittle={data[data.length - 4]}
                      desc={data[data.length - 4].content}
                    />{" "} */}
                  </>
                ) : (
                  ""
                )}

                {/* {data != undefined
                  ? data.map((e, index) => {
                      return (
                        <NewsComp
                          date={e[data.length - index]?.date}
                          tittle={e[data.length - index]?.tittle}
                          desc={e[data.length - index]?.content}
                        />
                      );
                    })
                  : ""} */}

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

export const serverIp = import.meta.env.VITE_KEY;

export default App;
