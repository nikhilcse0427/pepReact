import {Container,Row,Col,Image} from 'react-bootstrap'

const Hero = () => {
  return (
    <div>
      <Container className="text-center my-5 flex items-center">
        <Row className='justify-center my-5'>
          <Col md={8}>
          <h1 className="display-4">Designer,Frontened Developer</h1>
          <p className="lead">I am Fullstack webdeveloper and intrest in Data Structure and Algorithm</p>
          <Image src="https://img.freepik.com/premium-photo/portrait-successful-programmer-game-developer-coder-guy-uses-computer-laptop-work-game-design-hacker-boy-generative-ai-cyber-gamer_117038-7605.jpg?w=2000"
          roundedCircle
          width="150"
          className='my-3' />
          </Col>
        </Row>

      </Container>
    </div>
  )
}

export default Hero
