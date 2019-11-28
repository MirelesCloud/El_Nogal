import React, { useState } from 'react';
import './App.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  const [meterStart, setmeterStart] = useState("")
  const [meterEnd, setmeterEnd] = useState("")
  const [acres, setAcres] = useState("")
  const [result, setResult] = useState(0)
  const [acreFeet, setacreFeet] = useState(0)
  const calculateTotal = () => {
    if (isNaN(acres)) {
      setResult("")
    }
    else {
      setResult(((meterEnd-meterStart)*(12/100))/acres)
      setacreFeet((meterEnd-meterStart)*(.01))
    }
  }

  return (
    <div style={{minHeight: "100vh", overflow: "hidden", display: "block", position: "relative", paddingBottom: "100px"}}>
      <div className="jumbotron" style={{background: "linear-gradient(to bottom, #00cc00 0%, #006600 100%)"}}>
        <div className="container">
          <div className="text-center">
          <h1 className="text-uppercase text-white">El Nogal Irrigation Meter</h1>
          </div>
        </div>
        </div>
        <div className="container">
        <h2>El Nogal Pump</h2>
          <div className="row justify-content-center">
            <div className="col-md-4 col-sm-12 my-4">
              <Form>
                <FormGroup>
                  <Label for="meterStart">Meter Start</Label>
                  <Input type="number" name="meterStart" placeholder="Meter Starting Value" value={meterStart} onChange={e => setmeterStart(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                  <Label for="meterEnd">Meter End</Label>
                  <Input type="number" name="meterEnd" placeholder="Meter Ending Value" value={meterEnd} onChange={e => setmeterEnd(e.target.value)} />
                </FormGroup>
                <FormGroup>
                  <Label for="acres">Acres</Label>
                  <Input type="number" name="acres" placeholder="Acres Irrigated" value={acres} onChange={e => setAcres(e.target.value)}/>
                </FormGroup>
                <Button onClick={calculateTotal}>Calculate</Button>
              </Form>
            </div>
            <div className="col-md-6 col-sm-12 my-4">
              <h2>{(result).toFixed(1)} {" "} inches per acre</h2>
              <h2>{(acreFeet).toFixed(1)} {" "} acre/feet</h2>
            </div>
          </div>
      </div>
      <hr/>
      <CanalPump/>
      <footer className="bg-secondary text-white" style={{bottom: "0", position: "absolute", width: "100%"}}>
        <div class="footer-copyright text-center py-3">© 2019 Copyright - {" "}
          <a href="https://mirelescloud.com"><span className="text-white">MirelesCloud</span></a>
        </div>
      </footer>
    </div>
   
  );
}

function CanalPump() {
  const [meterStart, setmeterStart] = useState("")
  const [meterEnd, setmeterEnd] = useState("")
  const [acres, setAcres] = useState("")
  const [result, setResult] = useState(0)
  const [acreFeet, setacreFeet] = useState(0)
  const calculateTotal = () => {
    if (isNaN(acres)) {
      setResult("")
      
    }
    else {
      setResult(((meterEnd-meterStart)*(12/1000))/acres)
      setacreFeet((meterEnd-meterStart)*(.001))
    }
    
  }

  return (
    <>
      <div className="container">
        <h2>Canal Pump</h2>
          <div className="row justify-content-center">
            <div className="col-md-4 col-sm-12 my-4">
              <Form>
                <FormGroup>
                  <Label for="meterStart">Meter Start</Label>
                  <Input type="number" name="meterStart" placeholder="Meter Starting Value" value={meterStart} onChange={e => setmeterStart(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                  <Label for="meterEnd">Meter End</Label>
                  <Input type="number" name="meterEnd" placeholder="Meter Ending Value" value={meterEnd} onChange={e => setmeterEnd(e.target.value)} />
                </FormGroup>
                <FormGroup>
                  <Label for="acres">Acres</Label>
                  <Input type="number" name="acres" placeholder="Acres Irrigated" value={acres} onChange={e => setAcres(e.target.value)}/>
                </FormGroup>
                <Button onClick={calculateTotal}>Calculate</Button>
              </Form>
            </div>
            <div className="col-md-6 col-sm-12 my-4">
              <h2>{(result).toFixed(1)} {" "} inches per acre</h2>
              <h2>{(acreFeet).toFixed(1)} {" "} acre/feet</h2>
            </div>
          </div>
      </div>
    </>
  );
}

export default App;
