import React from 'react';
import { Link } from 'react-router-dom';
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
} from './InfoSection.elements';
import { Button, Container } from '../../globalStyle';

function InfoSection({
  lightBg,
  imgStart,
  lightTopLine,
  lightText,
  lightTextDesc,
}) {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}></TopLine>
                <Heading lightText={lightText}></Heading>
                <Subtitle lightTextDesc={lightTextDesc}></Subtitle>
                <Link to="/sign-up">
                  <Button big fontBig></Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default InfoSection;
