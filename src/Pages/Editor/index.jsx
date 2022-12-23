import React from "react";
import { Body } from "../../styles/Styles";
import { Cor, H1 } from "../../styles/StylesPages";
import Bar from "../../Components/Bar";
import MobiNav from "../../Components/MobiNav";
import Center from "../../Components/Center";
import Footer from "../../Components/Footer";
import styled from "styled-components";
import { useRef } from "react";
import ReactQuill from "react-quill";
import "./QuillStyle.css";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import imageUploader from "quill-image-uploader";

import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import axios from "axios";
import store from "../../store";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Loading from "../../Components/Loading";

const Btn = styled.button`
  padding-inline: 0.5rem;
  padding-block: 0.4rem;
  background-color: yellow;
  border-radius: 0.5rem;
  font-weight: 600;
  border: solid 2px #3e4040;
  display: flex;
  margin-left: auto;
  margin-right: 0.5rem;
  margin-top: 0.5rem;

  cursor: pointer;
`;

const InputTitle = styled.input`
  background: transparent;
  border: 0;
  color: #f1b133;
  height: 2rem;
  font-size: 2rem;
  font-weight: 700;
  /* width: 100%; */
  width: ${(props) => props.largura};
  ${(props) => props.estilo}

  display: block;
  &:focus {
    outline: none;
  }
`;

const FontStyled = styled(FontAwesomeIcon)`
  /* position: absolute;
  left: 9rem;
  top: 2rem;*/
  cursor: pointer;
  color: #a27722;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 70rem;
`;

const Container = styled.section`
  width: 100%;
  height: 60rem;
  margin-top: 2rem;
  display: block;
`;

const Quill = styled(ReactQuill)`
  width: 100%;
  height: 90%;
`;

const EditAndInput = styled.div`
  display: flex;
  ${(props) => props.estilo}
`;

const ComponentEdit = (props) => {
  function LooseFocus(event, event2, event3) {
    event.current.disabled = true;
    event2.current.style.display = "block";

    event3();
  }

  function Editar(event, event2) {
    event.current.disabled = false;
    event2.current.style.display = "none";
  }

  function tamanho(event) {
    if (!event.current.value.length < 1) {
      event.current.style.width = event.current.value.length * 1.3 + "rem";
    } else {
      event.current.style.width = "22ch";
    }
  }

  return (
    <EditAndInput estilo={props.estiloPai}>
      <InputTitle
        type="text"
        className="Titulo"
        disabled={true}
        ref={props.titulo}
        largura={props.largura}
        placeholder={`Insira um ${props.info} aqui`}
        onBlur={() => LooseFocus(props.titulo, props.Pencil, props.useStt)}
        onKeyDown={(e) => {
          if (e.code == "Enter") {
            LooseFocus(props.titulo, props.Pencil);
          }
        }}
        onChange={() => tamanho(props.titulo)}
        estilo={props.estilos}
        nomeForm={props.name}
      />
      <FontStyled
        icon={faPencil}
        onClick={(e) => Editar(props.titulo, props.Pencil)}
        size={"xl"}
        ref={props.Pencil}
      />
    </EditAndInput>
  );
};

Quill.Quill.register("modules/imageUploader", ImageUploader);

var Size = Quill.Quill.import("attributors/style/size");
Size.whitelist = ["14px", "16px", "18px"];

Quill.Quill.register(Size, true);

const Editor = () => {
  const [text, setText] = useState("");
  const login = useSelector((store) => store.loginAuth.value);

  axios.get('http://localhost:3001/login', {withCredentials: true}).then(
    e => {
      if(e.data) {
        e.data == true
        console.log('passou o teste')
      } else {
        e.data != true
        window.location.href = '/'
      }
    }
  )


  const modules = {
    toolbar: [
      "bold",
      "italic",
      "underline",
      "strike",
      "image",
      { script: "super" },
      { script: "sub" },
      "clean",
      { align: [] },
      { background: [] },
      { color: [] },
      { list: "ordered" },
      { font: [] },
      { size: { Small: "14px", Normal: false, Large: "16px", Huge: "18px" } },
    ],
  };

  const titulo = useRef(null);
  const subTitulo = useRef(null);
  const Pencil = useRef(null);
  const Pencil2 = useRef(null);
  const quill = useRef(null);

  const [EditTittle, SetEditTittle] = useState("");
  const [subTittle, setSubTittle] = useState("");
  const [larguraSub, setLarguraSub] = useState("");
  const [largura, setLargura] = useState(6);
  const [quillEditor, setQuillEditor] = useState("");

  const postar = async (e) => {
    e.preventDefault();
    const DTittle = titulo.current.value;
    const DSubTittle = subTitulo.current.value;
    const DQuill = quill.current.value;

    if (!DTittle || !DSubTittle || !DQuill) {
      return alert("Você precisa preencher todos os campos");
    }

    await axios
      .post("http://localhost:3001/postagens", {
        Title: EditTittle,
        SubTitle: subTittle,
        Content: quillEditor,
      })
      .then((e) => console.log(e))
      .catch((err) => console.log(err));

    window.location.href = "http://localhost:5173/";
  };

  return (
    <Cor>
      <Loading/>
      <Bar posi="false" />
      <MobiNav amount="10" />
      <Body
        color="#272844"
        vezes="2"
        estilos={"display: flex; justify-content: center"}
      >
        <Center>
          <Form method="post" action="">
            <div style={{}}>
              <ComponentEdit
                titulo={titulo}
                Pencil={Pencil}
                largura={larguraSub}
                info={"Título"}
                nomeForm={"Titulo"}
                useStt={() => SetEditTittle(titulo.current.value)}
              />
              <ComponentEdit
                titulo={subTitulo}
                Pencil={Pencil2}
                largura={largura}
                info={"Subtítulo"}
                estiloPai={"margin-top: 1.5rem"}
                estilos={
                  "font-size: 1.3rem !important; height: 1.3rem !important;"
                }
                nomeForm={"Subtitulo"}
                useStt={() => setSubTittle(subTitulo.current.value)}
              />
            </div>
            <Container className="container">
              <Quill
                ref={quill}
                onChange={() => setQuillEditor(quill.current.value)}
                modules={modules}
              ></Quill>
            </Container>
            <Btn type="submit" onClick={(e) => postar(e)}>
              Concluído
            </Btn>
          </Form>
        </Center>
      </Body>
      <Footer />
    </Cor>
  );
};

export default Editor;
