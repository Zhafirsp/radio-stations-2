import React from "react";
import styled, { keyframes, css } from "styled-components";
import Arn from "../Assets/Img/sponsor/arn.png";
import Bukalapak from "../Assets/Img/sponsor/bukalapak.png";
import Citilink from "../Assets/Img/sponsor/citilink.png";
import Djarum from "../Assets/Img/sponsor/djarum.png";
import KFC from "../Assets/Img/sponsor/kfc.png";
import Melsa from "../Assets/Img/sponsor/melsa.png";
import Mind from "../Assets/Img/sponsor/mind.png";
import Mitsubishi from "../Assets/Img/sponsor/mitsubishi.png";
import PHD from "../Assets/Img/sponsor/phd.png";
import Sampoerna from "../Assets/Img/sponsor/sampoerna.png";
import Samsung from "../Assets/Img/sponsor/samsung.png";
import Telkom from "../Assets/Img/sponsor/telkom.png";
import Uber from "../Assets/Img/sponsor/uber.png";
import Antv from "../Assets/Img/media/antv.png";
import Cosmo from "../Assets/Img/media/cosmo.png";
import Fmd from "../Assets/Img/media/fmd.png";
import Gadis from "../Assets/Img/media/gadis.png";
import GTV from "../Assets/Img/media/gtv.png";
import RCTI from "../Assets/Img/media/rcti.png";
import SCTV from "../Assets/Img/media/sctv.png";
import Suave from "../Assets/Img/media/suave.png";
import TRANS from "../Assets/Img/media/trans.png";
import TRANS7 from "../Assets/Img/media/trans7.png";
import TRAX from "../Assets/Img/media/TRAX.png";


function Sponsor() {
  const row1 = [
    { src: Arn, alt: 'Arn' },
    { src: Bukalapak, alt: 'Bukalapak' },
    { src: Citilink, alt: 'Citilink' },
    { src: Djarum, alt: 'Djarum' },
    { src: KFC, alt: 'KFC' },
    { src: Melsa, alt: 'Melsa' },
    { src: Mind, alt: 'Mind' },
    { src: Mitsubishi, alt: 'Mitsubishi' },
    { src: PHD, alt: 'PHD' },
    { src: Samsung, alt: 'Samsung' },
    { src: Sampoerna, alt: 'Sampoerna' },
    { src: Telkom, alt: 'Telkom' },
    { src: Uber, alt: 'Uber' },
  ];

  const row2 = [
    { src: Antv, alt: 'Antv' },
    { src: Cosmo, alt: 'Cosmo' },
    { src: Fmd, alt: 'Fmd' },
    { src: Gadis, alt: 'Gadis' },
    { src: GTV, alt: 'GTV' },
    { src: RCTI, alt: 'RCTI' },
    { src: SCTV, alt: 'SCTV' },
    { src: Suave, alt: 'Suave' },
    { src: TRANS, alt: 'TRANS' },
    { src: TRANS7, alt: 'TRANS7' },
    { src: TRAX, alt: 'TRAX' },
  ];

  return (
    <AppContainer>
      <Wrapper>
        <Text>Partner & Media</Text>
        {/* <Note>Our customers have gotten offers from awesome companies.</Note> */}
        <Marquee>
          <MarqueeGroup>
            {row1.map((imageData, index) => {
              console.log("Rendering Row 1 Image:", imageData.alt, imageData.src); // Debugging
              return (
                <ImageGroup key={index}>
                  <Image src={imageData.src} alt={imageData.alt} className="img-fluid d-block mx-auto" />
                </ImageGroup>
              );
            })}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((imageData, index) => {
              console.log("Rendering Row 1 Image Again:", imageData.alt, imageData.src); // Debugging
              return (
                <ImageGroup key={index}>
                  <Image src={imageData.src} alt={imageData.alt} className="img-fluid d-block mx-auto" />
                </ImageGroup>
              );
            })}
          </MarqueeGroup>
        </Marquee>
        <Marquee>
          <MarqueeGroup2>
            {row2.map((imageData, index) => {
              console.log("Rendering Row 2 Image:", imageData.alt, imageData.src); // Debugging
              return (
                <ImageGroup key={index}>
                  <Image src={imageData.src} alt={imageData.alt} className="img-fluid d-block mx-auto" />
                </ImageGroup>
              );
            })}
          </MarqueeGroup2>
          <MarqueeGroup2>
            {row2.map((imageData, index) => {
              console.log("Rendering Row 2 Image Again:", imageData.alt, imageData.src); // Debugging
              return (
                <ImageGroup key={index}>
                  <Image src={imageData.src} alt={imageData.alt} className="img-fluid d-block mx-auto" />
                </ImageGroup>
              );
            })}
          </MarqueeGroup2>
        </Marquee>
      </Wrapper>
    </AppContainer>
  );
}


export default Sponsor;

const AppContainer = styled.div`
  // width: 100vw;
  // height: 100vh;
  // width: calc(250px * 7);
  margin: 100px 0px;
  color: #000000;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.div`
  font-size: clamp(2rem, 5vw, 4rem);
  // font-weight: 500;
  max-width: 600px;
  // margin-bottom: 10px;
  color: #02203c;
`;

const Note = styled.div`
  font-size: 18px;
  font-weight: 200;
  margin-bottom: 40px;
  color: #7c8e9a;
`;

const Marquee = styled.div`
  display: flex;
  width: 100vw;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
  width: auto;
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
  width: auto;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 30vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;