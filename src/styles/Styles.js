import styled from "styled-components"

export const Nav = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&family=Montserrat:wght@100;300;400;600;700&display=swap');

    width: 100%;
    height: 3rem;
    background-color: #F1B133;
    align-items: center;
    display: flex;
    justify-content: space-between;
    font-family: 'Montserrat';
    font-size: 1rem;
    font-weight: 100;

& div {
    height: 100%;
    width: 15rem;
    display: flex;
}

& div > h1 {
    font-family: 'Comfortaa';
    font-weight: 700;
    text-align: end;
    align-items: center;
    margin-left: auto;
    align-self: center;
}


& ul {
    display: flex;
    justify-content: space-around;
    width: 35rem;
}

& li {
    font-family: 'Montserrat';
    list-style: none;
    font-size: 1.1rem;
    color: #282626;

}

/* & a:hover {
    border-bottom: 4px solid;
    border-color: #282626;
} */

& li > a {
    color: #282626;
    text-decoration: none;
    font-weight: 600;
    border-bottom: 0px solid;
    transition: all 100ms ease-in-out;
}

a::after {
    content: '';
    border-bottom: 4px solid #282626;
    position: relative;
    width: 0;
    display: block;
    transition: all 300ms ease-in-out;
}

a:hover::after {
    width: 100%;
}

`


export const Body = styled.div`
    width: 100%;
    height: 700px;
    background-color: ${props => props.color };

    section { 
        display: flex;
        justify-content: space-around;
        width: 100%;
        height: 100%;
    }

    article {
        font-family: 'Arial';
        width: 540px;
        height: 540px;
        margin: 34px;
    }

    article > h1 {
        font-family: 'Comfortaa';
        font-weight: 700;
        font-size: 1.8rem;
        margin-bottom: 1rem;
        letter-spacing: .3rem;
        width: 10rem;
        color: white;
        
    }

    article > h1:after {
        content: '';
        display: block;
        border-bottom: 2px #F1B133 solid;
        padding: 5px;
    }

    p {
        font-weight: 700;
        color: white;
        font-size: 1.15rem
    }
    

`