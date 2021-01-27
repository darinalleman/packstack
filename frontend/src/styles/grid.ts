import { CSSProperties } from "react";
import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 160px minmax(200px, auto) 160px 140px 60px 30px;
  grid-template-rows: auto;
  grid-column-gap: 16px;
  align-items: center;
    
  .align-right {
    justify-self: end;
  }
`;

export const PairGrid = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: auto;
  grid-column-gap: 8px;
  align-items: center;
`;

export const inlineStyles: CSSProperties = {
    marginBottom: 0
};

export const PackItemGrid = styled.div`
  display: grid;
  grid-template-columns: 180px minmax(200px, auto) 70px 80px 40px 70px 30px;
  grid-template-rows: auto;
  grid-column-gap: 16px;
  align-items: center;
  line-height: 1.25em;
  
  .align-right {
    justify-self: end;
  }
  
  .align-center {
    justify-self: center;
  }
`;
