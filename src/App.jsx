import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { Nav, Body } from "./styles/Styles";

function App() {
  // useEffect(() => {
  //   return () => {
  //     axios.get("/api/postagens").then((resultado) => {
  //       console.log(resultado);
  //     });
  //   };
  // }, []);

  return (
    <>
      <Body color="#272844">
        <Nav>
          <div>
            <img src="" alt="" />
            <h1>Perpetro</h1>
          </div>
          <ul>
            <li>
              <a href="#">PESQUISA</a>
            </li>
            <li>
              <a href="#">ENSINO E EXTENSÃO</a>
            </li>
            <li>
              <a href="#">LABORATÓRIO</a>
            </li>
          </ul>
        </Nav>

        <section>
          <div
            style={{
              width: "540px",
              height: "540px",
              backgroundColor: "#cfcfcf",
              margin: "34px",
            }} /* ISSO SERA UMA FOTO */
          ></div>

          <article>
            <h1>PerPetro</h1>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              pellentesque quam sed dolor tristique tincidunt. Cras euismod,
              sapien sit amet vulputate pharetra, mi justo cursus tortor, in
              tincidunt augue erat ut orci. Orci varius natoque penatibus et
              magnis dis parturient montes, nascetur ridiculus mus. Praesent
              euismod sed lorem eu efficitur. Morbi cursus tincidunt mi sit amet
              blandit. Donec suscipit eros leo, vitae tincidunt justo
              scelerisque et. Donec quis tortor lacus. <br /> <br /> Nunc vel
              eleifend metus, eu mollis dolor. Phasellus sit amet justo non est
              tristique rutrum. Donec ac tristique velit. Morbi aliquam
              tincidunt ligula. Maecenas porttitor diam vel tortor interdum
              rhoncus. Vestibulum sodales ipsum sapien, ac luctus sapien
              imperdiet sed. Nulla quis dignissim erat. Integer maximus
              consequat enim at eleifend. Sed consectetur, turpis in maximus
              elementum, nulla quam molestie dolor, quis efficitur ante lectus
              egestas odio. Suspendisse rutrum enim id sapien hendrerit, sit
              amet semper mi mattis. Praesent accumsan ligula ex, vel sagittis
              ligula dapibus at.
            </p>
          </article>
        </section>
      </Body>
      <Body color="#161627"></Body>
    </>
  );
}

export default App;
