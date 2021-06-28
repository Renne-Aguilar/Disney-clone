import React from 'react'
import styled from 'styled-components'

function Details() {
    return (
        <Container>
            <Background>
                <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bao-pixar-animated-short-incredibles-2-interview-8-1529413816.jpg"/>
            </Background>
            <ImageTitle>
                <img src="https://1.bp.blogspot.com/-SFIcHjsKs6w/WsGKiBqr8sI/AAAAAAAAVx0/mrXzRPfHjOktGXKq9UIPF-ieUs3jiKejgCLcBGAs/s1600/Pixar-Bao-Logo.jpg"/>
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png"/>
                    <span>Play</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png"/>
                    <span>Trailer</span> 
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png"/>
                </GroupWatchButton>
            </Controls>
            <Subtitle>
                2018 ; 7min ; Family ; Fantasy ; Animation
            </Subtitle>
            <Description>
            In Toronto, Canada, a Canadian Chinese woman cooks a meal of baozi for her and her husband. One of her buns comes alive, much to her shock
            </Description>
        </Container>
    )
}

export default Details

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
      width: 100%;
      heigth: 100%;
      object-fit: cover;
  }
`

const ImageTitle = styled.div`
  height: 30vh;
  width: 30vw;
  min-height: 170px;
  min-width: 200px;
  img {
      width: 100%;
      height: 100%;
      object-fit: contain;
  }
`

const Controls = styled.div`
  display: flex;
  align-items: center;

`

const PlayButton= styled.button`
  border-radius: 10px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249)
  border: none;
  padding: 0 24px;
  margin-right: 22px;
  letter-spacing: 1.8px;
  cursor: pointer;

  &: hover{
      background: rgb(198, 198, 198);
  }
`

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: whitesmoke;
`

const AddButton= styled.button`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;

  span {
      font-size: 30px;
      color: white;
  }
`

const GroupWatchButton = styled(AddButton)`
  background: rgb(0, 0, 0);
`

const Subtitle = styled.div`
  color: whitesmoke;
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: whitesmoke;
`