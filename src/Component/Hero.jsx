import React from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import yumexztracker from '../assets/yumexztracker.pdf';
import yumexzcarports from '../assets/yumexzcarports.pdf';
import rooftilespdf from '../assets/rooftilespdf.pdf';
import yumexzirrigation from '../assets/yumexzirrigation.pdf';
import evconversionpdf from '../assets/evconversionpdf.pdf';
import smartmetering from '../assets/smartmetering.pdf';
import yumexzbackup from '../assets/yumexzbackup.pdf';
import yumexzenergy from '../assets/yumexzenergy.pdf';
import coolingsystem from '../assets/coolingsystem.pdf';
import microgridpower from '../assets/microgridpower.pdf';
import vectorarrow from '../assets/vectorarrow.png';
import learnarrow from '../assets/learnarrow.png';
import smartmeter from '../assets/smartmeter.png';
import microgrid from '../assets/microgrid.png';
import cooling from '../assets/cooling.png';
import energy from '../assets/energy.png';
import backup from '../assets/backup.png';
import rooftiles from '../assets/rooftiles.png';
import evconversion from '../assets/evconversion.png';
import irrigation from '../assets/irrigation.png';
import carport from '../assets/carport.png';
import tracker from '../assets/tracker.png';
import cocacola from '../assets/cocacola.jpg';
import crossriver from '../assets/crossriver.jpg';
import daewoo from '../assets/daewoo.jpg';
import dora from '../assets/dora.jpg';
import ebsu from '../assets/ebsu.jpg';
import heineken from '../assets/heineken.jpg';
import hybrid from '../assets/hybrid.jpg';
import lng from '../assets/lng.jpg';
import mrbiggs from '../assets/mrbiggs.jpg';
import nenogfarms from '../assets/nenogfarms.jpg';


function HeroSection() {

  return (

    <div style={{marginTop:'40px'}} className='rows'>

    


<Row className='pdf-images'>

<Col md={6} xs={6}>
      <div>
        <a href={microgridpower} style={{ color: 'black', textDecoration: 'none' }} className='fw-bold'>
          <div className="d-flex align-items-center">
            <img src={microgrid} alt="yumexzirrigation" className='w-100' />
          </div>
        </a>
      </div>
    </Col>

    <Col md={6} xs={6}>
      <div className='mt-2'>
        <a href={coolingsystem} style={{ color: 'black', textDecoration: 'none' }} className='fw-bold'>
          <div className="d-flex align-items-center">
            <img src={cooling} alt="rooftiles" className='w-100' />
          </div>
        </a>
      </div>
    </Col>

   


  </Row>


  <Row className='pdf-images'>
    <Col md={6} xs={6}>
      <div className='mt-2'>
        <a href={rooftilespdf} style={{ color: 'black', textDecoration: 'none' }} className='fw-bold'>
          <div className="d-flex align-items-center">
            <img src={rooftiles} alt="rooftiles" className='w-100' />
          </div>
        </a>
      </div>
    </Col>

    <Col md={6} xs={6}>
      <div>
        <a href={yumexzirrigation} style={{ color: 'black', textDecoration: 'none' }} className='fw-bold'>
          <div className="d-flex align-items-center">
            <img src={irrigation} alt="yumexzirrigation" className='w-100' />
          </div>
        </a>
      </div>
    </Col>


  </Row>


  <Row className='pdf-images mt-4'>

  <Col md={6} xs={6}>
      <div>
        <a href={yumexzenergy} style={{ color: 'black', textDecoration: 'none' }} className='fw-bold'>
          <div className="d-flex align-items-center">
            <img src={energy} alt="yumexzenergy" className='w-100' />
          </div>
        </a>
      </div>
    </Col>
 
    <Col md={6} xs={6}>
      <div>
        <a href={yumexztracker} style={{ color: 'black', textDecoration: 'none' }} className='fw-bold'>
          <div className="d-flex align-items-center">
            <img src={tracker} alt="yumexztracker" className='w-100' />
          </div>
        </a>
      </div>
    </Col>
  </Row>

  <Row className='pdf-images mt-4'>
    <Col md={6} xs={6}>
      <div>
        <a href={evconversionpdf} style={{ color: 'black', textDecoration: 'none' }} className='fw-bold' alt="evconversionpdf">
          <div className="d-flex align-items-center">
            <img src={evconversion} alt="yumexzevconversion" className='w-100' />
          </div>
        </a>
      </div>
    </Col>

    <Col md={6} xs={6}>
      <div>
        <a href={smartmetering} style={{ color: 'black', textDecoration: 'none' }} className='fw-bold'>
          <div className="d-flex align-items-center">
            <img src={smartmeter} alt="rooftiles" className='w-100' />
          </div>
        </a>
      </div>
    </Col>
  </Row>

  <Row className='pdf-images mt-4'>
    <Col md={6} xs={6}>
      <div>
        <a href={yumexzbackup} style={{ color: 'black', textDecoration: 'none' }} className='fw-bold'>
          <div className="d-flex align-items-center">
            <img src={backup} alt="yumexzbackup" className='w-100' />
          </div>
        </a>
      </div>
    </Col>

    <Col md={6} xs={6}>
      <div>
        <a href={yumexzcarports} style={{ color: 'black', textDecoration: 'none' }} className='fw-bold'>
          <div className="d-flex align-items-center">
            <img src={carport} alt="rooftiles" className='w-100' />
          </div>
        </a>
      </div>
    </Col>

  
  </Row>

  {/* Clientele Section */}






<Container className='p-4'>
      <div>
        <div className='fw-bolder text-center supported-by ' style={{  fontFamily: 'Lucida Handwriting', marginTop:'40px'}}>
          Our Clientele :
        </div>

        <Row className='mt-5'>
          <Col>
            <img src={crossriver} alt="cocacola" className='mt-1 img-fluid w-100' />
          </Col>

          <Col className='d-flex align-items-center'>
            <img src={cocacola} alt="cocacola" className='mt-1 img-fluid w-100' />
          </Col>

          <Col>
            <img src={ebsu} alt="cocacola" className='mt-1 img-fluid w-100' />
          </Col>

          <Col className='d-flex align-items-center'>
            <img src={dora} alt="cocacola" className='mt-1 img-fluid w-100' />
          </Col>
        </Row>

        <Row className='mt-5'>
          <Col>
            <img src={hybrid} alt="cocacola" className='mt-1 img-fluid w-100' />
          </Col>

          <Col>
            <img src={daewoo} alt="cocacola" className='mt-1 img-fluid w-90' />
          </Col>

          <Col>
            <img src={lng} alt="cocacola" className='mt-1 img-fluid w-90' />
          </Col>

          <Col>
            <img src={heineken} alt="cocacola" className='mt-1 img-fluid w-90' />
          </Col>
        </Row>


<div className='mt-3 d-flex justify-content-center'>
  <div className='mr-5'>
    <img src={mrbiggs} alt="cocacola" className='mt-1 me-5 p-0 image-mobile'/>
  </div>
  <div>
    <img src={nenogfarms} alt="cocacola" className='mt-1 me-5 p-0 image-mobile'/>
  </div>
</div>
      </div>

      </Container>
    </div>
    
    
  );
}

export default HeroSection;




















{/* <Row>
<Col md={4} xs={6}>
      <div>
        <h2 className='d-flex fw-bolder'>YUMEXZ SOLAR ROOF TILES</h2>
        <a href={rooftilespdf} download={true} style={{ color: 'black', textDecoration: 'none' }} className='fw-bold'>
          <div className="d-flex align-items-center">
            <img src={vectorarrow} alt="vectorarrow" style={{ marginRight: '10px' }} />
            <h6 style={{ margin: '0' }}>Data Sheet Claims</h6>
          </div>

          <div className="d-flex align-items-center">
            <img src={vectorarrow} alt="vectorarrow" style={{ marginRight: '10px' }} />
            <h6 style={{ margin: '0' }}>Durability, Efficiency, and Aesthetics</h6>
          </div>

          <div className="d-flex align-items-center">
            <img src={vectorarrow} alt="vectorarrow" style={{ marginRight: '10px' }} />
            <h6 style={{ margin: '0' }}>Solar Roof and Tiles Product Overview</h6>
          </div>

          <div className="d-flex align-items-center">
            <img src={vectorarrow} alt="vectorarrow" style={{ marginRight: '10px' }} />
            <h6 style={{ margin: '0' }}>Aesthetics and Property Value</h6>
          </div>

          
          <div className="d-flex align-items-center">
            <img src={vectorarrow} alt="vectorarrow" style={{ marginRight: '10px' }} />
            <h6 style={{ margin: '0' }}>Conclusion and Key Points</h6>
          </div>
        </a>
      </div>
    </Col>

    <Col md={4} xs={6}>
      <div>
        <h2 className='d-flex fw-bolder'>YUMEXZ MICROGRID PHOTOVOLTAIC SYSTEM</h2>
        <a href={rooftilespdf} download={true} style={{ color: 'black', textDecoration: 'none' }} className='fw-bold'>
          <div className="d-flex align-items-center">
            <img src={vectorarrow} alt="vectorarrow" style={{ marginRight: '10px' }} />
            <h6 style={{ margin: '0',
          fontSize:'23px' }}>The Solar Panel Array</h6>
          </div>

          <div className="d-flex align-items-center">
            <img src={vectorarrow} alt="vectorarrow" style={{ marginRight: '10px' }} />
            <h6 style={{ margin: '0',
          fontSize:'23px' }}>Intelligent Power Management</h6>
          </div>

          <div className="d-flex align-items-center">
            <img src={vectorarrow} alt="vectorarrow" style={{ marginRight: '10px' }} />
            <h6 style={{ margin: '0',
          fontSize:'23px'}}>Powering the Microgrid</h6>
          </div>

          <div className="d-flex align-items-center">
            <img src={vectorarrow} alt="vectorarrow" style={{ marginRight: '10px' }} />
            <h6 style={{ margin: '0',
          fontSize:'23px' }}>Intelligent Energy Management
          </h6>
          </div>

          
          <div className="d-flex align-items-center">
            <img src={vectorarrow} alt="vectorarrow" style={{ marginRight: '10px' }} />
            <h6 style={{ margin: '0',
          fontSize:'23px' }}>The Future of Sustainable Energy</h6>
          </div>

        
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          className='m-1'>
  <div style={{ fontSize: '20px', color:'rgb(87, 163, 240)' }}className='me-1 fw-bolder'>Learn more</div>
  <img src={learnarrow} alt="next" style={{ width: '20px'}} className='mt-2' />
</div>


</a>
         
          </div>
    </Col>
</Row>  */}


{/* <Row>
<Col md={4} xs={6}>
      <div>
        <h2 className='d-flex fw-bolder'>YUMEXZ SOLAR ROOF TILES</h2>
        <a href={rooftilespdf} download={true} style={{ color: 'black', textDecoration: 'none' }} className='fw-bold'>
          <div className="d-flex align-items-center">
            <img src={vectorarrow} alt="vectorarrow" style={{ marginRight: '10px' }} />
            <h6 style={{ margin: '0' }}>Data Sheet Claims</h6>
          </div>

          <div className="d-flex align-items-center">
            <img src={vectorarrow} alt="vectorarrow" style={{ marginRight: '10px' }} />
            <h6 style={{ margin: '0' }}>Durability, Efficiency, and Aesthetics</h6>
          </div>

          <div className="d-flex align-items-center">
            <img src={vectorarrow} alt="vectorarrow" style={{ marginRight: '10px' }} />
            <h6 style={{ margin: '0' }}>Solar Roof and Tiles Product Overview</h6>
          </div>

          <div className="d-flex align-items-center">
            <img src={vectorarrow} alt="vectorarrow" style={{ marginRight: '10px' }} />
            <h6 style={{ margin: '0' }}>Aesthetics and Property Value</h6>
          </div>

          
          <div className="d-flex align-items-center">
            <img src={vectorarrow} alt="vectorarrow" style={{ marginRight: '10px' }} />
            <h6 style={{ margin: '0' }}>Conclusion and Key Points</h6>
          </div>
        </a>
      </div>
    </Col>

    <Col md={4} xs={6}>

      
      <div>
        <h2 className='d-flex fw-bolder'>YUMEXZ SOLAR DIRECT COOLING SYSTEM</h2>
        <a href={rooftilespdf} download={true} style={{ color: 'black', textDecoration: 'none' }} className='fw-bold'>
        
        <div className="d-flex align-items-center">
            <img src={vectorarrow} alt="vectorarrow" style={{ marginRight: '10px' }} />
            <h6 style={{ margin: '0',
          fontSize:'25px' }}>Introducing Yumexz Cooling</h6>
          </div>
        
          <div className="d-flex align-items-center">
            <img src={vectorarrow} alt="vectorarrow" style={{ marginRight: '10px' }} />
            <h6 style={{ margin: '0',
          fontSize:'25px' }}>How the Cooling System Works</h6>
          </div>

          <div className="d-flex align-items-center">
            <img src={vectorarrow} alt="vectorarrow" style={{ marginRight: '10px' }} />
            <h6 style={{ margin: '0',
          fontSize:'25px' }}>Benefits of the Cooling System</h6>
          </div>

          <div className="d-flex align-items-center">
            <img src={vectorarrow} alt="vectorarrow" style={{ marginRight: '10px' }} />
            <h6 style={{ margin: '0',
          fontSize:'25px'}}>Reliable 24/7 Cooling System</h6>
          </div>

          <div className="d-flex align-items-center">
            <img src={vectorarrow} alt="vectorarrow" style={{ marginRight: '10px' }} />
            <h6 style={{ margin: '0',
          fontSize:'25px' }}>Transform your Cooling System
          </h6>
          </div>

          
        

        
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          className='m-1'>
  <div style={{ fontSize: '20px', color:'rgb(87, 163, 240)' }}className='me-1 fw-bolder'>Learn more</div>
  <img src={learnarrow} alt="next" style={{ width: '20px'}} className='mt-2' />
</div>


</a>
         
          </div>
    </Col>
</Row>  */}