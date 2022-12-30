import React from "react";
import { Body, Content } from "../../styles/Styles";
import Bar from "../../Components/Bar";
import MobiNav from "../../Components/MobiNav";
import axios from "axios";
import styled from "styled-components";
import Loading from '../../Components/Loading'
import { useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";



const H1 = styled.h1`
  font-size: 2rem;
  font-weight: 900;
  color: #272626;
`;

const Container = styled.div`
  display: flex;
  position: relative;
  margin-block: 2rem;
  transition: 200ms;

  width: 10rem;
  height: 10rem;
  z-index: 100;
  cursor: pointer;
  border-radius: 50%;

  &:hover::before {
    position: absolute;
    width: 10rem;
    height: 10rem;
    background-color: #0000004c;
    border-radius: 50%;
    transform: translate(0,-50%);
    content: "mudar foto";
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #ffffff;
    font-weight: bold;
  }

  &::before {
    top: 50%;
    transform: translate(0%, -8%);
  }
`;

const Img = styled.img`
  border-radius: 50%;
  height: 10rem;
  width: 10rem;
  object-fit: cover;
`;

const Perfil = styled.div`
  padding-block: 1rem;
  padding-inline: 2rem;

  width: 50rem;
  height: 40rem;
  border-radius: 1rem;
  background: #f1b133;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const ChangeButton = styled.button`
  padding-inline: 0.2rem;
  padding-block: 0.2rem;
  background-color: #272626;
  color: #f1b133;
  position: absolute;
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;
  left: 3.5rem;
  top: 16rem;
`

const Label = styled.label`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  background-color: transparent;
  
  cursor:pointer; 
  position: absolute;
  left: 0;
  top:0;
  z-index:100;

  transition: all 200ms;


  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }

  &:hover::before {
    content: 'Mudar foto';
    display: flex;
    align-items: center;
    justify-content: center;
    height:10rem;
    width:10rem;
    color: #f1b133;
    font-weight: 600;
  }
`
const FormChangeInfo = styled.form`

  width: 40rem;
  height: 30rem;
  padding-block: 1rem;
  display: flex;
  justify-content: space-evenly;
`

const LabelInput = styled.label`
  margin-top: 0.5rem;
  color: #272626;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`
const Input = styled.input`
  
  width: 100%;
  height: 1.5rem;
  border-radius: 0.2rem;
  border: solid 2px #272626;
  outline: none;
  padding-block: 0.8rem;
  padding-inline: 0.5rem;
  background-color: #272626;
  color: #f1b133;
  font-size: 1rem;
`

const ContainerImg = styled.div`
  width: 10rem;
  height: 10rem;
  position: relative;
`

const ContainerForm = styled.div`

width:15rem;
height: 20rem;

& > button {
  
  padding-block: 0.5rem;
  padding-inline: 0.2rem
}

`

const H3 = styled.h3`
font-size:1.3rem;
font-weight: 600;
color: #272626;
`

const ConfirmChange = styled.button`
  border: solid 2px #272626;
  color: #272626;
  background-color: transparent;
  margin-top: 3rem;
  border-radius: 0.4rem;
  cursor: pointer;
  font-weight: 600;
`

const InputImg = styled.input`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  opacity: 0;
  z-index: 9;

  
  background-color: transparent;
  /* position: absolute;
  left: 0;Arquivos de Programas
  top: 0; */

`


const Painel = () => {
  const [path, setPath] = useState()
  const teste = useRef(null)
  const img = useRef(null);
  const [base64, setBase64] = useState()
  const [newImg, setNewImg] = useState()

  const login = useSelector(store => store)

  console.log(login)
   

  axios.get('http://localhost:3001/login', {withCredentials: true})
  .then(e => {
    if(!e.data.isAuth){
      window.location.href = '/'
    }
  })

  

  // useEffect(() => {
  //   console.log(base64)
  // }, [base64])

  const newForm = useRef(null)
  const changeImg = async (event) => {
    // axios.put('http://localhost:3001/login/updateImg', data, {withCredentials: true})


  {/*
    const doc = img.current.files[0]

    const getBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
          setBase64(reader.result.toString().replace(/^data:(.*,)?/,''))
          resolve(base64)
          
        }
        reader.onerror = error => reject(error)
      })
    }

    if(img.current.files.length >= 1) {
       await getBase64(doc)
      // console.log(img.current.files[0].type)

    } */}
    
    // if(img.current.files.length < 1) {
    //   console.log('length < 1')
    // } else {
    //   // axios.put('http://localhost:3001/login/updateImg',)
    //   console.log('length > ou = 1')
    // }

  event.preventDefault()
  
  
  console.log(newForm)


  const formInside = newForm.current

  setPath(formInside[0].value)

    const dados = {
      username: formInside[1].value,
      password: formInside[2].value,
      img: {
        data: newImg,
        contentType: img.current.files[0].type
      }
    }
    const confirmPass = formInside[3].value

    if(dados.password != confirmPass) {
      return;
    }

  axios.put('http://localhost:3001/login/updateImg', dados, {withCredentials: true})
    .then(e => console.log(e))
    .catch(err => console.log(err))

    console.log('alterações feitas')

  };

  const ChangeData = () => {
   console.log(img)
    const doc = img.current.files[0]

    const getBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
        setNewImg(reader.result.toString().replace(/^data:(.*,)?/,''))
        resolve(newImg)
        }
        reader.onerror = error => {
          reject(error)
        }
      }) 
    }

    if(doc) {
      getBase64(doc)
    }
    


  }

    useEffect(() => {
    console.log(newImg)
  }, [newImg])

  return (
    <>
      {/* <Loading/> */}
      <Bar posi="false" />
      <MobiNav amount="40" />
      <Body color="#272844" vezes="1" estilos={"position: absolute"}>
        <Perfil>
          <H1>Meu perfil</H1>
          <FormChangeInfo method="" ref={newForm}>

            <ContainerImg>
              { login.loginAuth.load == 'complete' && newImg == undefined ?
                <Img src={`data:${login.loginAuth.value.img.contentType};base64, ${login.loginAuth.value.img.data}`} alt=""/>
              : <Img src={`data: ${img};base64, ${newImg}`} alt="" ref={teste}/> 
            }
              <Label htmlFor="inputUp">
              <InputImg type={'file'} id='inputUp' name="imgSrc" accept="image/jpeg, image/jpg, image/png" onChange={ChangeData} ref={img}/>
              </Label>
            </ContainerImg>
            <ContainerForm>
            <H3>Alterar infomações</H3>


              <LabelInput htmlFor="username">
              Username
              <Input type="text" name='username' placeholder="username" />
            </LabelInput>
            <LabelInput htmlFor="password" >
              password
              <Input type="password" name='password' placeholder="password" />
            </LabelInput>
            <LabelInput htmlFor="confirm-password" >
              confirm password
              <Input type="password" name='confirm-password' placeholder="confirm-password" />
            </LabelInput>
                <ConfirmChange type="submit" onClick={(e) => changeImg(e)}>Salvar alterações</ConfirmChange>
            </ContainerForm>
          </FormChangeInfo>
        </Perfil>
      </Body>
    </>
  );
};

export default Painel;


{/* 
      Código Reserva para caso dê algo de errado
<H1>Meu Perfil</H1>
          <Container>
            { login && login.loginAuth.value.img ? <Img
              src={`data:${login.loginAuth.value.img.contentType};base64,${login.loginAuth.value.img.data}`}
            /> 
            : <Img
            src="https://cdn-icons-png.flaticon.com/512/1361/1361728.png"
            /> }
            <Label htmlFor='file' onClick={() => changeImg('algo')}></Label>
            <input type={'file'} name='file' id='file'placeholder='' accept="image/png, image/jpg, image/jpeg"  style={{display:'none'}} ref={img} onChange={() => changeImg()}/>
          </Container>
              { base64 != undefined ? <ChangeButton>Alterar imagem</ChangeButton> : ''}

              <FormChangeInfo>
                <label htmlFor="username">Username
                <input type={'text'} name='username' defaultValue={login.loginAuth.value.user}></input></label>
                <input type={'password'} placeholder='password' alt="password"></input>
                <input type={'password'} placeholder='confirm pass' alt="confirm-password"></input>
              </FormChangeInfo> */}
