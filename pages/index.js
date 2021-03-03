import { motion } from "framer-motion";
import Head from "next/head";

import {
  pageData,
  heroData,
  aboutSectionData,
  projectOneData,
  projectTwoData,
} from "./Data";

import {
  Container,
  H1,
  Button,
  Main,
  HeroImgContainer,
  AboutSection,
  AboutSectionTitle,
  TwoColumnsWrapper,
  AboutSectionFirstColumn,
  AboutSectionImage,
  AboutSectionSecondColumn,
} from "./homeStyles";

import ProjectSection from "../components/ProjectSection";

export default function Home() {
  return (
    <div>
      <Head>
        <title>{pageData.titlePage}</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&family=Montserrat:wght@700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>

      <Main>
        <HeroImgContainer
          src="/hero.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <Container>
          <H1>{heroData.title}</H1>
          <Button
            href="#about"
            as={motion.button}
            animate={{ translateY: [0, 10, 0] }}
            transition={{
              ease: "easeInOut",
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            {heroData.buttonLabel}
          </Button>
        </Container>
      </Main>
      <AboutSection id="about">
        <Container>
          <AboutSectionTitle>{aboutSectionData.title}</AboutSectionTitle>
          <TwoColumnsWrapper>
            <AboutSectionFirstColumn>
              <AboutSectionImage
                className="avatar"
                src={aboutSectionData.imageURL}
                width={400}
                height={400}
                objectFit="cover"
                objectPosition="center center"
              />
            </AboutSectionFirstColumn>
            <AboutSectionSecondColumn>
              {aboutSectionData.description}
            </AboutSectionSecondColumn>
          </TwoColumnsWrapper>
        </Container>
      </AboutSection>
      <ProjectSection data={projectOneData}></ProjectSection>
      <ProjectSection data={projectTwoData} primary reverse></ProjectSection>
    </div>
  );
}
