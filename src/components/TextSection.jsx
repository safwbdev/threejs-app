import React from 'react'
import styled from "styled-components";

const TextSection = ({title, subtitle}) => {
  return (
    <Wrapper>
      {title ? (<Title>{title}</Title>) : null}
      {subtitle ? (<Subtitle>{subtitle}</Subtitle>) : null}
    </Wrapper>
  )
}

export default TextSection

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const Title = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
`;

const Subtitle = styled.p`
text-align
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 130%;
  margin: 1em auto;
  color: purple
`;

