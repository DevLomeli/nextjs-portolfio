import React from "react";
import {
  Container,
  ProjectSectionContainer,
  ProjectSectionHeading,
  TwoColumnsWrapper,
  FirstColumn,
  SecondColumn,
  ProjectTitle,
  ProjectDescription,
  ProjectLogosWrapper,
  ProjectImage,
} from "./projectSectionStyles";

const ProjectSection = ({ data, primary, reverse }) => {
  return (
    <ProjectSectionContainer primary={primary && primary}>
      <Container>
        <ProjectSectionHeading>{data.heading}</ProjectSectionHeading>
        <TwoColumnsWrapper reverse={reverse && reverse}>
          <FirstColumn>
            <ProjectTitle>{data.projectTitle}</ProjectTitle>
            <ProjectDescription>{data.projectDescription}</ProjectDescription>
            <ProjectLogosWrapper></ProjectLogosWrapper>
          </FirstColumn>
          <SecondColumn>
            <ProjectImage
              src={data.projectImageURL}
              width={400}
              height={400}
              objectFit="cover"
              objectPosition="center"
            ></ProjectImage>
          </SecondColumn>
        </TwoColumnsWrapper>
      </Container>
    </ProjectSectionContainer>
  );
};

export default ProjectSection;
