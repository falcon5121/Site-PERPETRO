import React from "react";
import { Body } from "../../styles/Styles";
import Bar from "../../Components/Navbar/Bar";
import MobiNav from "../../Components/MobiNav";
import axios from "axios";
import Loading from "../../Components/Loading/Loading";
import { useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import {
  H1,
  Img,
  Perfil,
  Label,
  FormChangeInfo,
  LabelInput,
  Input,
  ContainerImg,
  ContainerForm,
  H3,
  ConfirmChange,
  InputImg,
} from "./styles";

const Painel = () => {
  const [path, setPath] = useState();
  const teste = useRef(null);
  const img = useRef(null);
  const [base64, setBase64] = useState();
  const [newImg, setNewImg] = useState();

  const login = useSelector((store) => store);

  axios
    .get("http://localhost:3001/login", { withCredentials: true })
    .then((e) => {
      if (!e.data.isAuth) {
        window.location.href = "/";
      }
    });

  // useEffect(() => {
  //   console.log(base64);
  // }, [base64]);

  const newForm = useRef(null);

  const changeImg = async (event) => {
    event.preventDefault();

    console.log(event.target);

    const encurtador = event.target;

    const img = encurtador[0].files[0];

    // const data = {
    //   username: encurtador[1].value,
    //   password: encurtador[2].value,
    // img: {
    //   data: newImg,
    //   contentType: img,
    // },
    //   img: img.type,
    // };

    const newForm = new FormData(event.target);

    const data = {
      username: newForm.get("username"),
      password: newForm.get("password"),
      img: newForm.get("imgSrc"),
    };

    axios
      .put("http://localhost:3001/login/updateImg", data, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((e) => console.log(e))
      .catch((err) => console.log(err));
  };

  const ChangeData = () => {
    console.log(img);
    const doc = img.current.files[0];

    const getBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          setNewImg(reader.result.toString().replace(/^data:(.*,)?/, ""));
          resolve(newImg);
        };
        reader.onerror = (error) => {
          reject(error);
        };
      });
    };

    if (doc) {
      getBase64(doc);
    }
  };

  useEffect(() => {
    console.log(newImg);
  }, [newImg]);

  return (
    <>
      <Loading />
      <Bar posi="false" />
      <MobiNav amount="40" />
      <Body color="#272844" vezes="1" estilos={"position: absolute"}>
        <Perfil>
          <H1>Meu perfil</H1>
          <FormChangeInfo
            method="PUT"
            ref={newForm}
            encType="multipart/form-data"
            onSubmit={(e) => changeImg(e)}
          >
            <ContainerImg>
              {login.loginAuth.load == "complete" && newImg == undefined ? (
                <Img
                  src={`data:${login.loginAuth.value.img.contentType};base64, ${login.loginAuth.value.img.data}`}
                  alt=""
                />
              ) : (
                <Img
                  src={`data: ${img};base64, ${newImg}`}
                  alt=""
                  ref={teste}
                />
              )}
              <Label htmlFor="inputUp">
                <InputImg
                  type={"file"}
                  id="inputUp"
                  name="imgSrc"
                  accept="image/jpeg, image/jpg, image/png"
                  onChange={ChangeData}
                  ref={img}
                />
              </Label>
            </ContainerImg>
            <ContainerForm>
              <H3>Alterar Credenciais</H3>

              <LabelInput htmlFor="username">
                Username
                <Input
                  type="text"
                  name="username"
                  id="username"
                  defaultValue={login.loginAuth.value.user}
                  placeholder={"Username"}
                />
              </LabelInput>
              <LabelInput htmlFor="password">
                password
                <Input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="password"
                />
              </LabelInput>
              <LabelInput htmlFor="confirm-password">
                confirm password
                <Input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="confirm-password"
                />
              </LabelInput>
              <ConfirmChange type="submit">Salvar alterações</ConfirmChange>
            </ContainerForm>
          </FormChangeInfo>
        </Perfil>
      </Body>
    </>
  );
};

export default Painel;
