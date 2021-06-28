import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
            
                <CTA>
                    <CTALogoOne src="/images/cta-logo-one.svg"/>
                    <Signup>Get all there</Signup>
                    <Description>
                      Disfrútalo en tu pantalla favorita, ya sea tu TV, tableta, computadora, teléfono y otros. Vive una experiencia única con una amplia selección de títulos en 4K. Además, puedes ver en cuatro pantallas en simultáneo para que nadie se quede afuera.
                    </Description>
                    <CTALogoTwo src="/images/cta-logo-two.png"/>
                </CTA>
            
        </Container>
    )
}

export default Login

const Container = styled.div`
 position: relative;
 height: calc(100vh - 70px);
 display: flex;
 alin-items: top;
 justify-content: center;

 &:before {
     background-position: top;
     background-size: cover;
     background-repeat: no-repeat;
    background-image: url("https://cdn.dlmag.com/wp-content/uploads/2019/11/Disney-Plus-App.jpg");
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.7;
    z-index: -1;
 }
`


const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  
`
const CTALogoOne = styled.img`

`
const Signup = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 15px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;

  &:hover {
      background: #0483ee
  }
`

const Description = styled.p`
  color: whitesmoke;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`
const CTALogoTwo= styled.div`
  
`