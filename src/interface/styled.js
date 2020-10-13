import styled from "styled-components";
import React from "react";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  margin-bottom: 10px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.25);
  background-color: #fff;
`;

export const Box = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: #fff;
`;
export const BoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  cursor: pointer;
  padding: 20px;
  :last-child {
    margin-bottom: 0;
  }
  :hover {
    background-color: #eee;
    &.red {
      color: #fd3e5b;
      background-color: #ffecef;
    }
  }
`;
export const Text = styled.div`
  display: flex;
  font-weight: 500;
`;
