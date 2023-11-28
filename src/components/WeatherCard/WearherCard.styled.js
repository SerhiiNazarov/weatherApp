import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  box-sizing: content-box;
  flex-direction: column;
  justify-content: space-between;
  width: 350px;
  height: auto;
  padding: 10px 15px;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 5px;
  /* background: ${(props) => props.theme.background}; */
  background: red;
`;

export const City = styled.p`
  font-size: 16px;
  line-height: 23px;
  font-weight: bold;
  letter-spacing: 0px;
  color: #000000;
`;

export const DateTxt = styled.p`
  font-size: 18px;
  line-height: 26px;
  font-weight: normal;
  letter-spacing: 0px;
  color: #000000;
`;

export const UpperSectionContainer = styled.div`
  height: 55px;
  display: flex;
  justify-content: space-between;
`;

export const DescriptionContainer = styled.div`
  display: flex;
`;

export const Description = styled.p`
  max-height: 55px;
  font-size: 13px;
  line-height: 19px;
  font-weight: normal;
  letter-spacing: 0px;
  color: #c5c5c5;
`;

export const Icon = styled.img`
  margin-top: -15px;
  width: 40px;
  height: 40px;
`;

export const LowerSectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const MainText = styled.p`
  font-size: 12px;
  line-height: 18px;
  font-weight: bold;
  color: #000000;
`;
export const MainValue = styled.span`
  font-size: 12px;
  line-height: 28px;
  font-weight: normal;
  color: ${(props) => props.theme.color};
`;

export const TempContainer = styled.div``;

export const Degrees = styled.p`
  margin-right: 5px;
  font-size: 44px;
  line-height: 64px;
  font-weight: normal;
  color: #000000;
`;

export const FeelsLike = styled.p`
  font-size: 13px;
  line-height: 19px;
  font-weight: normal;
  color: #c5c5c5;
`;

export const DegreesContainer = styled.div`
  display: flex;
`;

export const DegBtn = styled.button`
  width: 32;
  padding: 0;
  background-color: transparent;
  border: transparent;
  font-size: 22px;
  line-height: 32px;
  font-weight: normal;
  cursor: pointer;

  &:hover,
  &:focus {
    scale: 1.1;
  }
`;

export const DegBtnContainer = styled.div`
  height: 32px;
  display: flex;
  align-items: flex-start;
`;

export const DegreePart = styled.span`
  display: block;
  margin-top: 3px;
  width: 1px;
  height: 23px;
  margin-left: 10px;
  margin-right: 10px;
  background: #8d8d8d;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 4px;
  right: 10px;
  width: 5px;
  height: 5px;
  padding: 0;
  color: #c5c5c5;
  background-color: transparent;
  border: transparent;

  cursor: pointer;

  &:hover,
  &:focus {
    color: #aba9a9;
    scale: 1.1;
  }
`;

export const GrafContainer = styled.div`
  display: flex;
  height: 100px;
  background: ${(props) => props.theme.bgGraph};
`;
