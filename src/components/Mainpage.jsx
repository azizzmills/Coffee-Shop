import React  from 'react'
import {Row, Container, Button, Col, Image}  from 'react-bootstrap'
import {Link} from 'react-scroll'
import 'react-toastify/dist/ReactToastify.css'


import NavBar from './NavBar';
import './Mainpage.css'
import ScrollAnimation from './Transition_Appear_Animation'
import Flatwhite from '../images/Americano.jpeg'
import Cappuccino from '../images/Capuccino.jpg.jpeg'
import Long_Black from '../images/long black.jpg'
import Double_Espresso from '../images/double-espresso-shots.jpg'
import Caramel_Macchiato from '../images/Caramel-Macchiato.jpg'
import Americano from '../images/Americano.jpeg'
import Mocha_Hazelnut_Latte from '../images/Mocha_Hazelnut_Latte.jpg'
import Turmeric_Latte from '../images/tumeric.jpg'
import Chai_Latte from '../images/Chai-Latte.jpg'
import Italian_Hot_Chocolate from '../images/italian hot chocolate.jpg'
import Arrow from '../images/arrow.png'


import ScrollImage from './Appearing_animation';
import BouncingImage from './Bounce_animation';
import Logo_Position from './Logo'
import Phrase from './phrase.json'
import Waiter from './Waiter_button';

 


const Mainpage = () =>{
    return(
        <Container fluid className="full-screen-container">
            <Link                         
                        to="menu_select" 
                        duration={500}
                        smooth={true}
                        > 
            <Image src={Arrow} className='arrow_button'></Image>
            </Link>
            <Row>
                <NavBar/>
            </Row>
            <Row id='landing_img'>
                <Logo_Position/>
                <Link                         
                        to="menu_select" 
                        duration={500}
                        smooth={true}
                        > 
                <Button id='landing_button'>
                    View Menu
                </Button>
                </Link>                               
            </Row>
            <Row>
                <Container className='p-5 d-flex flex-column justify-content-center 
                align-items-center menu' id='menu_select'>
                    <Row>
                    <p>Select a Beverage Below</p>
                    </Row>
                    <Row>
                        <Col>                         
                        <Link                         
                        to="section1" 
                        duration={500}
                        smooth={true}
                        > 
                        <p>Flat White.............................3.40</p>
                        </Link>
                        <Link                         
                        to="section2" 
                        duration={500}
                        smooth={true}
                        >            
                        <p>Cappuccino..........................3.40</p>
                        </Link>
                        <Link                         
                        to="section3" 
                        duration={500}
                        smooth={true}
                        > 
                        <p>Long Black..........................3.00</p>
                        </Link>
                        <Link                         
                        to="section4" 
                        duration={500}
                        smooth={true}
                        > 
                        <p>Double Espresso...............2.00</p>
                        </Link>
                        <Link                         
                        to="section5" 
                        duration={500}
                        smooth={true}
                        > 
                        <p>Caramel Macchiato........2.00</p>
                        </Link>
                        </Col>
                        <Col>
                        <Link                         
                        to="section6" 
                        duration={500}
                        smooth={true}
                        >
                        <p>Americano...........................2.00</p>
                        </Link>
                        <Link                         
                        to="section7" 
                        duration={500}
                        smooth={true}
                        > 
                        <p>Mocha Hazelnut Latte.........................................2.00</p>
                        </Link>
                        <Link                         
                        to="section8" 
                        duration={500}
                        smooth={true}
                        > 
                        <p>Turmeric Latte......................3.80</p>
                        </Link>
                        <Link                         
                        to="section8" 
                        duration={500}
                        smooth={true}
                        > 
                        <p>Chai Latte.................................3.80</p>
                        </Link>
                        <Link                         
                        to="section10" 
                        duration={500}
                        smooth={true}
                        > 
                        <p>Italian Hot Chocolate.........5.40</p>
                        </Link>                                                
                        </Col>
                    </Row>
                </Container>

            </Row>
            <Row  className='p-3 background' id="section1">
            <Col className='d-flex justify-content-center align-items-center'> 
              <ScrollAnimation children={<Image src={Flatwhite}/>}/>
            </Col>
            <Col className='d-flex flex-column justify-content-center align-items-center'>
            <ScrollAnimation children={Phrase["Flat White"]}/> 
            <Waiter/>           
            </Col>
            </Row>
            <Row  className='p-3 background' id='section2'>
                <Col className='d-flex justify-content-center align-items-center'>
                <ScrollImage pic={<Image src={Cappuccino}/>} className='d-flex justify-content-center align-items-center'/>                
                </Col>
                <Col className='d-flex flex-column justify-content-center align-items-center'>
                <ScrollImage pic={Phrase["Cappuccino"]} className='d-flex justify-content-center align-items-center phrase'/>
                <Waiter/>                
                </Col>                
            </Row>
            <Row  className='p-3 background' id='section3'>
                <Col className='d-flex justify-content-center align-items-center'>
                <BouncingImage pic={<Image src={Long_Black}/>}/>
                </Col>
                <Col className='d-flex flex-column justify-content-center align-items-center'>
                <BouncingImage pic={Phrase["Long black"]}/>
                <Waiter/>
                </Col>
            </Row>
            <Row  className='p-3 background' id='section4'>
            <Col className='d-flex justify-content-center align-items-center'> 
              <ScrollAnimation children={<Image src={Double_Espresso}/>}/>
            </Col>
            <Col className='d-flex flex-column justify-content-center align-items-center'>
            <ScrollAnimation children={Phrase["Double Espresso"]}/>
            <Waiter/>
            </Col>
            </Row>
            <Row  className='p-3 background' id='section5'>
                <Col className='d-flex justify-content-center align-items-center'>
                <ScrollImage pic={<Image src={Caramel_Macchiato}/>} className='d-flex justify-content-center align-items-center'/>                
                </Col>
                <Col className='d-flex flex-column justify-content-center align-items-center'>
                <ScrollImage pic={Phrase["Caramel Macchiato"]} className='d-flex justify-content-center align-items-center phrase'/>
                <Waiter/>
                </Col>                
            </Row>
            <Row  className='p-3 background' id='section6'>
                <Col className='d-flex justify-content-center align-items-center'>
                <BouncingImage pic={<Image src={Americano}/>}/>
                </Col>
                <Col className='d-flex flex-column justify-content-center align-items-center'>
                <BouncingImage pic={Phrase["Americano"]}/>
                <Waiter/>
                </Col>
            </Row>
            <Row  className='p-3 background' id='section7'>
            <Col className='d-flex justify-content-center align-items-center'> 
              <ScrollAnimation children={<Image src={Mocha_Hazelnut_Latte}/>}/>
            </Col>
            <Col className='d-flex flex-column justify-content-center align-items-center'>
            <ScrollAnimation children={Phrase["Mocha Hazelnut Latte"]}/>
            <Waiter/>
            </Col>
            </Row>
            <Row  className='p-3 background' id='section8'>
                <Col className='d-flex justify-content-center align-items-center'>
                <ScrollImage pic={<Image src={Turmeric_Latte}/>} className='d-flex justify-content-center align-items-center'/>                
                </Col>
                <Col className='d-flex flex-column justify-content-center align-items-center'>
                <ScrollImage pic={Phrase["Turmeric Latte"]} className='d-flex justify-content-center align-items-center phrase'/>
                <Waiter/>
                </Col>                
            </Row>
            <Row  className='p-3 background' id='section9'>
                <Col className='d-flex justify-content-center align-items-center'>
                <BouncingImage pic={<Image src={Chai_Latte}/>}/>
                </Col>
                <Col className='d-flex flex-column justify-content-center align-items-center'>
                <BouncingImage pic={Phrase["Chai Latte"]}/>
                <Waiter/>
                </Col>
            </Row>
            <Row  className='p-3 background' id='section10'>
            <Col className='d-flex justify-content-center align-items-center'> 
              <ScrollAnimation children={<Image src={Italian_Hot_Chocolate}/>}/>
            </Col>
            <Col className='d-flex flex-column justify-content-center align-items-center'>
            <ScrollAnimation children={Phrase["Italian Hot Chocolate"]}/>
            <Waiter/>
            </Col>
            </Row>
        </Container>
    )
}
export default Mainpage;