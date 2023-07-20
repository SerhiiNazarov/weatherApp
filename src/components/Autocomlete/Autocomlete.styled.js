import styled from "styled-components";

export const Wraper = styled.div`
  position: relative;
`;

export const Input = styled.input`
  width: 569px;
  height: 40px;
  padding: 0;
  margin-right: 10px;
  padding-left: 10px;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 5px;
  background: #ffffff;
  border: none;
  border-color: transparent;
  margin-bottom: 122px;
  outline: none;
  color: rgba(86, 86, 86, 0.8);
  font-size: 16px;
  line-height: 23px;
  font-style: normal;

  &:hover {
    scale: 1.01;
  }
`;

export const Suggestions = styled.div`
  position: absolute;
  width: 584px;
  top: 10px;
  transform: translateY(39px);
  background: #fff;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 5px;
  z-index: 10;
  margin: 0;
  padding: 0;
  list-style: none;
  outline: none;
  font-size: 14px;
  line-height: 20px;
`;

export const Item = styled.li`
  padding: 10px 15px;
  cursor: pointer;

  &:hover {
    background: #f2f2f2;
  }
`;

export const Btn = styled.button`
  width: 112px;
  height: 40px;
  font-size: 14px;
  line-height: 20px;
  font-style: normal;
  color: #ffffff;
  background-color: #459de9;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 5px;
  border-color: transparent;
  cursor: pointer;

  &:hover,
  &:focus {
    background: #218deb;
  }
`;
