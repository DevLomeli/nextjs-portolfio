import styled from "styled-components";
import Image from "next/image";
export const Main = styled.main`
  width: 100%;
  height: 100vh;
  position: relative;
`;

export const HeroImgContainer = styled(Image)`
  z-index: 0;
  filter: saturate(0.1);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 95%;
  height: 100%;
`;

export const H1 = styled.h1`
  position: relative;
  font-size: 4.5rem;
  font-weight: 700;
  color: #fafafa;
  letter-spacing: 4px;
  z-index: 1;
`;

export const Button = styled.a`
  background: #fafafa;
  font-size: 2rem;
  letter-spacing: 4px;
  text-transform: uppercase;
  border: none;
  padding: 2rem 5rem;
  border-radius: 8px;
  cursor: pointer;
  z-index: 1;

  &:hover {
    background: #1b1b1b;
    color: #fafafa;
  }
`;

export const AboutSection = styled.section`
  background: #fafafa;
  width: 100%;
  height: 100vh;
`;

export const AboutSectionTitle = styled.h2`
  color: #1b1b1b;
  font-size: 3.5rem;
  letter-spacing: 4px;
  align-self: flex-start;
`;

export const TwoColumnsWrapper = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;

  > * {
    padding: 2rem;
  }
`;

export const AboutSectionFirstColumn = styled.div`
  flex: 0.5;
  display: flex;
  justify-content: center;
`;

export const AboutSectionImage = styled(Image)`
  border-radius: 50%;
`;

export const AboutSectionSecondColumn = styled.p`
  flex: 0.5;
  color: #1b1b1b;
  font-size: 2rem;
  letter-spacing: 4px;
`;
