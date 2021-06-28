import React from 'react'
import styled from 'styled-components'

function Movies() {
    return (
        <Container>
            <h4>Recommended for you</h4>
            <Content>
                <Wrap>
                    <img src="/images/viewers-national.png"/>
                </Wrap>
                <Wrap>
                    <img src="/images/viewers-national.png"/>
                </Wrap>
                <Wrap>
                    <img src="/images/viewers-national.png"/>
                </Wrap>
                <Wrap>
                    <img src="/images/viewers-national.png"/>
                </Wrap>
            </Content>
        </Container>
    )
}

export default Movies

const Container = styled.div`


`

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`

const Wrap = styled.div`
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  border: 3px solid whitesmoke;
  box-shadow: rgb(0 0 0 / 68%) 0px 26x 30px -10px,
  rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
      width: 100%;
      height: 100%;
      object-fit: cover;
  }

  &: hover {
      transform: scale(1.05);
      border-color: whitesmoke;
  }
`