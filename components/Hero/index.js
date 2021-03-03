import React from "react";
import { HeroContainer } from "./heroStyles";
const Hero = ({ children }) => {
  return <HeroContainer>{children}</HeroContainer>;
};

export default Hero;
