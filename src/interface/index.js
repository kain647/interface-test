import React from "react";
import styled from "styled-components";
import { Container, Box, Text, BoxContainer } from "./styled";

const Icon = styled.i.attrs(props => {
  return {
    className: `${props.pack} fa-${props.icon}`
  };
})`
  margin-right: 20px;
`;

const Interface = props => {
  const items = [
    {
      icon: "pen",
      text: "Edit"
    },
    {
      icon: "plus-circle",
      text: "Invite co-worker"
    },
    {
      icon: "trash",
      text: "Delete",
      red: true
    }
  ];
  return (
    <>
      <Container>
        <Box>
          {items.map(item => {
            const { icon, text, red } = item;
            return <Item {...item} />;
          })}
        </Box>
      </Container>
    </>
  );
};

const Item = props => {
  const { text, icon, red } = props;
  return (
    <BoxContainer className={red ? "red" : ""}>
      <Icon icon={icon} pack="fas" />
      <Text>{text}</Text>
    </BoxContainer>
  );
};

export default Interface;
