import React from "react";
import styled from "styled-components";
import Header from "../../components/header";
import LineCharts from "../../assets/Group 3661.png";
import PieCharts from "../../assets/Group 3662.png";
import { Link } from "react-router-dom"; 

const data = [
  {
    title1: "Validators",
    value1: "25",
    title2: "TST Marketcap",
    value2: "$ 1,560,221",
    title3: "TST Price",
    value3: "$ 0,108",
  },
  {
    title1: "Total Transaction",
    value1: "1675",
    title2: "Wallet Address",
    value2: "998",
    title3: "Total Ecosystem",
    value3: "10",
  },
];

const dataBlock = [
  {
    title: "Latest Block",
    value: "0xurndy87uu5fo6kn...",
    profit: "1.675599....",
  },
  {
    title: "Latest Block",
    value: "0xurndy87uu5fo6kn...",
    profit: "1.675599....",
  },
  {
    title: "Latest Block",
    value: "0xurndy87uu5fo6kn...",
    profit: "1.675599....",
  },
  {
    title: "Latest Block",
    value: "0xurndy87uu5fo6kn...",
    profit: "1.675599....",
  },
  {
    title: "Latest Block",
    value: "0xurndy87uu5fo6kn...",
    profit: "1.675599....",
  },
  {
    title: "Latest Block",
    value: "0xurndy87uu5fo6kn...",
    profit: "1.675599....",
  },
];
const dataTrans = [
  {
    title: "0x9incdc8ysdfklsnd....",
    value: "0x9incdc8ysdfklsnd....",
    profit: "1 TST",
  },
  {
    title: "0x9incdc8ysdfklsnd....",
    value: "0x9incdc8ysdfklsnd....",
    profit: "1 TST",
  },
  {
    title: "0x9incdc8ysdfklsnd....",
    value: "0x9incdc8ysdfklsnd....",
    profit: "1 TST",
  },
  {
    title: "0x9incdc8ysdfklsnd....",
    value: "0x9incdc8ysdfklsnd....",
    profit: "1 TST",
  },
  {
    title: "0x9incdc8ysdfklsnd....",
    value: "0x9incdc8ysdfklsnd....",
    profit: "1 TST",
  },
  {
    title: "0x9incdc8ysdfklsnd....",
    value: "0x9incdc8ysdfklsnd....",
    profit: "1 TST",
  },
];
function Index() {
  return (
    <Container>
      <Header />
      <Head>
        <Title>T.Sample Explorer</Title>
        <SearchBox type="text" placeholder="Search" />
      </Head>
      <Content>
        <SubContentt>
          <CardGroup1>
            {data.map((item, index) => (
              <div>
                <Card1 key={index}>
                  <TitleCard1>{item.title1}</TitleCard1>
                  <Description>{item.value1}</Description>
                  <div style={{ padding: "20px 0" }}>
                    <TitleCard1>{item.title2}</TitleCard1>
                    <Description>{item.value2}</Description>
                  </div>
                  <TitleCard1>{item.title3}</TitleCard1>
                  <Description>{item.value3}</Description>
                </Card1>
              </div>
            ))}
          </CardGroup1>
          <CardGroup2>
            <Card2>
              <TitleCard2>Transaction History</TitleCard2>
              <img src={LineCharts} alt="" />
            </Card2>
            <Card2>
              <TitleCard2>Latest Block</TitleCard2>
              <img src={PieCharts} alt="" />
            </Card2>
          </CardGroup2>
        </SubContentt>
        <SubContent>
          <CardGroup3>
            <span style={{ fontWeight: "bold" }}>Latest Block</span>
            {dataBlock.map((item, index) => (
              <Card3 key={index}>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/blockdetails"
                  target="blank"
                >
                  <TitleCard3>{item.title}</TitleCard3>
                </Link>
                Validated By{""}
                <Description3>{item.value}</Description3>
                <Profit>{item.profit}</Profit>
              </Card3>
            ))}
            <Button>View All Block</Button>
          </CardGroup3>
          <CardGroup3>
            <span style={{ fontWeight: "bold" }}>Lastest Transactions</span>
            {dataTrans.map((item, index) => (
              <Card3 key={index}>
                <TitleCard3>{item.title}</TitleCard3>Validated By{""}
                <Description3>{item.value}</Description3>
                <Profit>{item.profit}</Profit>
              </Card3>
            ))}
            <Button>View All Transactions</Button>
          </CardGroup3>
        </SubContent>
      </Content>
    </Container>
  );
}

const Container = styled.div``;

const Title = styled.div`
  padding: 20px 25px;
  font-weight: bold;
`;

const Button = styled.div`
  background-color: #0182aa;
  margin: 10px 0;
  padding: 15px 0 20px 0;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: #333;
  }
`;

const Profit = styled.div`
  font-weight: bold;
  border: 1px solid #fff;
  border-radius: 5px;
  padding: 3px;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;
const Card2 = styled.div`
  font-weight: bold;
  padding: 10px 25px;
  border-radius: 10px;
  border: 1px solid white;
  text-align: center;
`;
const TitleCard2 = styled.div`
  padding: 25px 0;
  font-weight: bold;
`;

const SubContentt = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 0px;
  }
`;

const SearchBox = styled.input`
  padding: 0.5rem;
  margin: 0 1rem 40px 0;
  border: 1px solid #fff;
  background-color: transparent;
  color: #fff;
  width: 40%;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;

const Head = styled.div`
  text-align: center;
  padding: 30px;
`;

const Content = styled.div`
  padding: 25px;
  margin: 0 25px;
  border-radius: 10px;
  border: 1px solid white;
  @media (max-width: 768px) {
    margin: 0;
    border: none;
    padding: 0;
  }
`;

const CardGroup1 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  @media (max-width: 768px) {
    gap: 10px;
    width: auto;
  }
`;
const CardGroup2 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
`;
const SubContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-top: 50px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const CardGroup3 = styled.div`
  padding: 20px;
  border-radius: 10px;
  border: 1px solid white;
  margin: 20px 0;
  text-align: center;
  @media (max-width: 768px) {
      padding: 10px
  }
`;

const Card1 = styled.div`
  background-color: black;
  color: white;
  padding: 32px 20px;
  transition: background-color 0.3s ease;
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid white;

  &:hover {
    background-color: #333;
  }
  @media (max-width: 768px) {
    font-size: 8px;
    padding: 10px;
    width: auto;
    margin: 10px 0;
  }
`;

const Card3 = styled.div`
  background-color: black;
  color: white;
  padding: 30px 20px 20px 20px;
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
  color: #20f8fd;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  color: #20f8fd;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description3 = styled.div`
  color: #20f8fd;
  text-align: flex-start;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

export default Index;
