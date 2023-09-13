import ReactQuill from "react-quill";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const Btn = styled.button`
  padding-inline: 0.5rem;
  padding-block: 0.4rem;
  background-color: #f1b133;
  border-radius: 0.5rem;
  font-weight: 600;
  display: flex;
  margin-left: auto;
  margin-right: 0.5rem;
  margin-top: 0.5rem;

  cursor: pointer;
`;

export const InputTitle = styled.input`
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

export const FontStyled = styled(FontAwesomeIcon)`
  /* position: absolute;
  left: 9rem;
  top: 2rem;*/
  cursor: pointer;
  color: #a27722;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 70rem;
`;

export const Container = styled.section`
  width: 100%;
  height: 60rem;
  margin-top: 2rem;
  display: block;
`;

export const Quill = styled(ReactQuill)`
  width: 100%;
  height: 90%;
`;

export const EditAndInput = styled.div`
  display: flex;
  ${(props) => props.estilo}
`;

export const LabelInputText = styled.label`
  font-size: 2rem;
  font-weight: 600;
  color: #f1b133;
  display: flex;
  flex-direction: column;
`;

export const InputText = styled.input`
  height: 2rem;
  width: 15rem;
  border-radius: 0.3rem;
  background: transparent;
  outline: none;
  border: solid 3px #f1b133;
  color: #f1b133;
  margin-top: 0.5rem;
  padding-left: 0.4rem;

  &:focus {
    box-shadow: 0 0 3px #f1b133;
  }

  &::placeholder {
    color: #f1b520;
    opacity: 0.4;
  }
`;

export const Select = styled.select`
  width: 8rem;
  background: #f1b133;
  color: #282626;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0.2rem;
  outline: none;
  border: none;
`;

export const Option = styled.option`
  color: #282626;
  font-weight: 600;
`;
