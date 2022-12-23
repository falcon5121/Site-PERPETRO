import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
        
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat';
       
        @media (max-width: 1288px) {
        font-size: 14px;
        }

        @media (max-width: 1141px) {
        font-size: 12px;
        }

        @media (max-width: 958px) {
            font-size: 10px;
        }

        @media (max-width: 798px) {
            font-size: 9px;
        }

        @media (max-width: 768px) {
        font-size: 14px;
        }


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