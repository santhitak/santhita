import type { NextPage } from "next";
import Head from "next/head";
import styled from "@emotion/styled";

const Container = styled.div`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NewGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
`;

const Title = styled.h1`
  margin: 1rem;
  line-height: 1.15;
  font-size: 4rem;
`;

const Card = styled.div`
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  max-width: 300px;
  background-color: #222;
  &:hover {
    color: #0070f3;
    border-color: #0070f3;
  }
  &h2 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }
  &p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
  }
`;

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Santhita</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Title>Hello, I&apos;m Santhita</Title>
        <NewGrid>
          <div>
            <Card>
              <a
                href="https://github.com/santhitak"
                target="_blank"
                rel="noreferrer"
              >
                <h2>Frontend Dev &rarr;</h2>
                <p>Basically anything that pops in my head</p>
              </a>
            </Card>
          </div>
          <div>
            <Card>
              <a
                href="https://www.instagram.com/kiradigm/"
                target="_blank"
                rel="noreferrer"
              >
                <h2>Graphic designer &rarr;</h2>
                <p>I also do the Graphic design sometimes, check it out!</p>
              </a>
            </Card>
          </div>
        </NewGrid>
      </Container>
    </div>
  );
};

export default Home;
