import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
        
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat';
       
    }

&::-webkit-scrollbar{
    width: 10px;
    background: #282626;
    padding: 4px;
}

&::-webkit-scrollbar-thumb{
    
    
    background: #f1b133;
    border-radius: 10rem;
}

`