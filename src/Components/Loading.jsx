import React from "react";
import { useState } from "react";
import { useRef } from "react";
import styled from "styled-components";


const Back = styled.main`
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: 100;
    background-color: #f1b133;
    display: ${props => props.desaparecer};
    opacity: ${props => props.opacity};

    transition: all 300ms;

`

const IconLoading = styled.div`
    width: 200px;
    height: 200px;
    background-color: #272626;
    position: fixed;
    z-index: 1000;
    left: 45%;
    top: 45%;
    transform: translate(-100%,-50%);

    


    -webkit-animation: rotate-center 1.2s ease-in-out forwards;
	        animation: rotate-center 1.2s ease-in-out forwards;


@-webkit-keyframes rotate-center {
  0% {
    -webkit-transform: rotate(0) ;
            transform: rotate(0) ;
  }
  100% {
    -webkit-transform: rotate(360deg) ;
            transform: rotate(360deg) ;
  }
}
@keyframes rotate-center {
  0% {
    -webkit-transform: rotate(0) ;
            transform: rotate(0) ;
  }
  100% {
    -webkit-transform: rotate(360deg) ;
            transform: rotate(360deg) ;
  }
}


`


const Loading = () => {

    

    const container = useRef(null)


    const demorar = () => {
        setTimeout(() => {
            container.current.style.opacity = '0'
        }, 800)
        
    }

    const finalizar = () => {
        container.current.style.display = 'none'
    }


    return(
        <>
            <Back ref={container}>
                <IconLoading onAnimationStart={demorar}  onAnimationEnd={finalizar}/>
            </Back>
        
        </>
    )
}

export default Loading