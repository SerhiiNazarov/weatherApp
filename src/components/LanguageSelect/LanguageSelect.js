import styled from "styled-components";
import { GlobalOutlined } from "@ant-design/icons";

export const Container = styled.div`
  display: flex;
  align-self: flex-end;
  margin-bottom: 50px;
`;

export const Select = styled.select`
  border: transparent;
  outline: transparent;
  color: #afafaf;

  font-size: 16px;
  line-height: 23px;
  font-weight: normal;

  &:focus {
    width: 60px;
  }
`;

export const Option = styled.option`
  color: #000000;
  width: 71px;

  font-size: 14px;
  line-height: 20px;
  font-weight: normal;

  &:hover,
  &:focus {
  }
`;

export const Icon = styled(GlobalOutlined)`
  font-size: 12px;
  margin-top: 3px;

  color: "#AFAFAF";
`;
