import styled from "styled-components";

export const News = styled.section`
  width: 30rem;
  height: 35rem;
  background-color: #282626;
  border-radius: 1rem;

  @media (max-width: 420px) {
    width: 25rem;
  }
`;

export const Pg2 = styled.main`
  margin: auto;
  width: 80rem;
  height: 43.75rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 1288px) {
    width: 90%;
  }
`;

export const Video = styled.section`
  width: 30rem;
  height: 30rem;
  background-color: #282626;
  border-radius: 1rem;
  padding-top: 2rem;
  padding-inline: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const VideoTxt = styled.p`
  font-size: 1.2rem;
  color: #f1b133;
  margin-top: 2rem;
  text-align: center;
`;

export const LastNews = styled.h1`
  color: #f1b133;
  padding: 2em;
  padding-bottom: 1.5em;
  border-bottom: solid 1px #f2c46b;
`;

export const RodaPe = styled.a`
  font-size: 0.75rem;
  color: #f1b133;
  text-decoration: none;
  padding-left: 1.25rem;
  font-weight: 600;
`;

export const Img = styled.div`
  width: 33.75rem;
  height: 33.75rem;
  background-color: #cfcfcf;
  margin-inline: 4.375rem;
  top: 0;
  bottom: 0;
  margin-block: auto;

  @media (max-width: 768px) {
    width: 20rem;
    height: 20rem;
    margin-top: 2rem;
  }
`;

export const VP = styled.div`
  width: 12.5rem;
  height: 12.5rem;
  background-color: #cfcfcf;
  margin: auto;
`;
