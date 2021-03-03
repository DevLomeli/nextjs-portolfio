import styled from "styled-components";
import Image from "next/image";
export const ProjectSectionContainer = styled.section`
  background: ${({ primary }) => (primary ? "#fafafa" : "#1b1b1b")};
  height: 100vh;
  color: ${({ primary }) => (primary ? "#1b1b1b" : "#fafafa")};
  letter-spacing: 4px;
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

export const ProjectSectionHeading = styled.h2`
  font-size: 3rem;
`;

export const TwoColumnsWrapper = styled.article`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  justify-content: center;
`;

export const FirstColumn = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 2rem;
`;

export const SecondColumn = styled.div`
  flex: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProjectTitle = styled.h3`
  font-size: 2rem;
`;

export const ProjectDescription = styled.p`
  width: 90%;
  font-size: 1.5rem;
`;

export const ProjectLogosWrapper = styled.div`
  height: 8rem;
`;

export const ProjectImage = styled(Image)`
  border-radius: 50%;
`;
