import React from 'react';
import Navbar from "../pages/components/Navbar";
import ScrollBtn from "./components/Scroll-btn";
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const GREEN_ACCENT_COLOR = '#0a838a'
const LARGE_SCREEN = '1750px'
// const MED_SCREEN = '1200px'
// const SMALL_SCREEN = '500px'


const SectionWrapper = styled.section`
  height: 100vh;
  margin-bottom: 5rem;

  @media(min-width: ${LARGE_SCREEN}) {
    margin: 0 13%;
  }
`
// const Circle = styled.div`
//   height: 700px;
//   width: 700px;
//   border: none;
//   border-radius: 100%;
//   position: absolute;
//   top: -500px;
//   left: 800px;
//   background-color: #0a838a;
//   z-index: 1  
// `

const HomeWrapper = styled.div`
  min-height: 100%;
  position: relative;
`
const HomeHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 5px;
  position: absolute;
  top: 20%;
  margin-left: 15rem;
`
const HomePrimaryHeader = styled.h2`
  font-size: 6rem;
  color: ${GREEN_ACCENT_COLOR};
  margin: 0;
  padding: 0;

  @media(min-width: ${LARGE_SCREEN}) {
    font-size: 7rem;
  }
`

const HomeSubHeader = styled(HomePrimaryHeader)`
  color: #222;
`

const IconContainer = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  column-gap: 20px;
  margin-top: 10px;
`

const HomeIcons = styled.a`
  font-size: 4.5rem;
  padding-right: 1rem;
  color: #222;
  cursor: pointer;
  text-decoration: none;
  transition: all ease-in-out .3s;

  &:hover {
    color: ${GREEN_ACCENT_COLOR};
    font-size: 5rem;
    transition: all ease-in-out .3s;
  }
`


export default function Home() {
    return (
      
    <SectionWrapper id="home">
      <HomeWrapper>
        <Navbar />
          <HomeHeaderContainer>
            <HomePrimaryHeader>Jake Januszanis</HomePrimaryHeader>
            <HomeSubHeader>Software Developer</HomeSubHeader>
            <IconContainer>
              <HomeIcons href="https://github.com/Jake-Januszanis" target="_blank" rel="noreferrer"><FaGithub /> </HomeIcons>
              <HomeIcons href="https://www.linkedin.com/in/jake-januszanis/" target="_blank" rel="noreferrer"><FaLinkedin /> </HomeIcons>
          </IconContainer>
          {/* <Circle /> */} 
          </HomeHeaderContainer>
        <a href="#projects"><ScrollBtn /> </a>
      </HomeWrapper>
    </SectionWrapper> 

    )
}
