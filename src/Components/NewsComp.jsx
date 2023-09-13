import axios from "axios";
import React from "react";
import styled from "styled-components";

const Item = styled.li`
  color: #f1b133;
  font-weight: bold;
  padding-top: 0.4rem;
  padding-right: 1.5rem;
  list-style: none;
  padding-bottom: 0.6rem;
  border-bottom: solid 2px #f2c46b;
  text-overflow: ellipsis;
  overflow: hidden;
  padding-left: 1rem;

  &:last-child {
    display: flex;
  }
`;

const PTitle = styled.a`
  color: #f1b133;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  white-space: nowrap;
`;

const Date = styled.span`
  font-weight: 300;
  font-size: 0.8rem;
  display: block;
  line-height: 1.5em;
  color: #f2d486;
  font-style: italic;
`;

const Desc = styled.h5`
  margin-top: 0.3rem;
  color: #f2d486;
  font-weight: 300;
  font-size: 0.8rem;
`;

const NewsComp = (props) => {
  return (
    <Item>
      <Date>{props.date}</Date>
      <PTitle href="#">{props.tittle}</PTitle>
      <Desc>{props.desc}</Desc>
    </Item>
  );
};

export default NewsComp;
