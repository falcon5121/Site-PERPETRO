import React from "react";
import reactQuill from "react-quill";
import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
// import { Cor } from "../../../../styles/StylesPages";
// import Loading from "../../../../Components/Loading";
// import Bar from "../../../../Components/Bar";
// import MobiNav from "../../../../Components/MobiNav";
// import { Body } from "../../../../styles/Styles";
// import Center from "../../../../Components/Center";
import { LabelInputText, InputText, Container, Btn, Form , Quill } from "../../styles";
// import Footer from `../../../../Components/Footer`


// Quill.Quill.register("modules/imageUploader", ImageUploader);

var Size = Quill.Quill.import("attributors/style/size");
Size.whitelist = ["14px", "16px", "18px"];

Quill.Quill.register(Size, true);

const Editor = () => {
  // const [text, setText] = useState("");
  // const login = useSelector((store) => store.loginAuth.value);

  

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
  const quill = useRef(null);

  const [EditTittle, SetEditTittle] = useState("");
  const [subTittle, setSubTittle] = useState("");
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
          <Form method="post" action="">
            <div>
              <LabelInputText htmlfor={"title"}>
                Título
                <InputText
                  type={"text"}
                  name={"title"}
                  placeholder={"Insira um título"}
                />
              </LabelInputText>
              <LabelInputText
                htmlfor={"subtitle"}
                style={{ fontSize: "1.5rem", marginTop: "0.5rem" }}
              >
                Subtítulo
                <InputText
                  type={"text"}
                  name={"subtitle"}
                  placeholder="Insira um subtítulo (opcional)"
                />
              </LabelInputText>
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
  );
};

export default Editor;
