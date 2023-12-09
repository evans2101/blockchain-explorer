import React from "react";
import styled from "styled-components";
import Header from "../../components/header";

const data = [
  { title: "Block Height", value: "453642" },
  { title: "TimeStamp", value: "Less than a minutes ago" },
  { title: "Transactions", value: "0 Transactions" },
  { title: "Validated by", value: "0xw83dsdaad..." },
  { title: "Block Reward", value: "0 Tst" },
  { title: "Difficulty", value: "2" },
  { title: "Total Difficulty", value: "886363" },
  { title: "Gas Used", value: "0 (0.00%)" },
  { title: "Gas Limit", value: "30,000,00" },
  { title: "Size", value: "650 byte" },
];

const dataBlock = [
  { title: "Hash", value: "0xy737dhsgdsdoe8edflhksfd8e4fdknfefihdfknas" },
  {
    title: "Parent hash",
    value: "0xy737dhsgdsdoe8edflhksfd8e4fdknfefihdfknas",
  },
  { title: "Sh3 Uncles", value: "0xy737dhsgdsdoe8edflhksfd8e4fdknfefihdfknas" },
  { title: "Nonce", value: "0xy737dhsgdsdoe8edflhksfd8e4fdknfefihdfknas" },
  {
    title: "Transactions Root",
    value: "0xy737dhsgdsdoe8edflhksfd8e4fdknfefihdfknas",
  },
  { title: "State Root", value: "0xy737dhsgdsdoe8edflhksfd8e4fdknfefihdfknas" },
];

function Index() {
  return (
    <Container>
      <Header />
      <Title>
        Block{" "}
        <span style={{ color: "#20F8FD", fontWeight: "700" }}>#hd73hd</span>
      </Title>
      <Content>
        <CardGroup1>
          {data.map((item, index) => (
            <Card key={index}>
              <TitleCard1>{item.title}</TitleCard1>
              <Description>{item.value}</Description>
            </Card>
          ))}
        </CardGroup1>
        <CardGroup2>Extras</CardGroup2>
        <CardGroup3>
          {dataBlock.map((item, index) => (
            <Card3 key={index}>
              <TitleCard3>{item.title}</TitleCard3>
              <Description3>{item.value}</Description3>
            </Card3>
          ))}
        </CardGroup3>
        <CardGroup2>logs Bloom</CardGroup2>
      </Content>
    </Container>
  );
}

const Container = styled.div``;

const Title = styled.div`
  padding: 30px 25px;
`;

const Content = styled.div`
  padding: 25px;
  margin: 0 25px;
  text-align: center;
  border-radius: 10px;
  border: 1px solid white;
  @media (max-width: 768px) {
  margin: 0 10px;
  border: none;
  padding: 0;
  }
`;

const CardGroup1 = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 15px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CardGroup2 = styled.div`
  padding: 25px;
  border-radius: 10px;
  border: 1px solid white;
  margin: 20px 0;
  text-align: left;
`;
const CardGroup3 = styled.div`
  padding: 25px;
  border-radius: 10px;
  border: 1px solid white;
  margin: 20px 0;
  text-align: left;
  @media (max-width: 768px) {
    border: none;
    padding: 0;
    font-size: 11px;
  }
`;

const Card = styled.div`
  background-color: black;
  color: white;
  padding: 20px;
  transition: background-color 0.3s ease;
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid white;

  &:hover {
    background-color: #333;
  }
`;

const Card3 = styled.div`
  background-color: black;
  color: white;
  padding: 20px 60% 20px 20px;
  transition: background-color 0.3s ease;
  cursor: pointer;
  display: flex;
  border-radius: 20px;
  border-bottom: 1px solid #fff;
  justify-content: space-between;

  &:hover {
    background-color: #333;
  }
`;

const TitleCard1 = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
`;
const TitleCard3 = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
  padding-right: 30px;
`;

const Description = styled.div`
  color: #20f8fd;
`;

const Description3 = styled.div`
  color: #20f8fd;
  text-align: flex-start;
`;

export default Index;
