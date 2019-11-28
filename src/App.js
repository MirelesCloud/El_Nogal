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
    <>
      <div className="jumbotron">
        <div className="container">
          <div className="text-center">
          <h1 className="text-uppercase">El Nogal Irrigation Meter</h1>
          </div>
        </div>
        </div>
        <div className="container">
        <h1 >El Nogal Pump</h1>
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
              <h1>{(result).toFixed(1)} {" "} inches per acre</h1>
              <h1>{(acreFeet).toFixed(1)} {" "} acre/feet</h1>
            </div>
          </div>
      </div>
      <hr/>
      <CanalPump/>
      
    </>
   
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
        <h1>Canal Pump</h1>
          <div className="row m-5">
            <div className="col-md-4">
              <label ><strong>MeterStart</strong></label>{" "}
              <input type="number" value={meterStart} onChange={e => setmeterStart(e.target.value)}/>
            </div>
            <div className="col-md-4">
              <label><strong>Meter End</strong></label>{" "}
              <input type="number" value={meterEnd} onChange={e => setmeterEnd(e.target.value)}/>
            </div>
            <div className="col-md-4">
              <label><strong>Acres</strong></label>{" "}
              <input type="number" value={acres} onChange={e => setAcres(e.target.value)}/>
            </div>
          </div>
          <div className="row">
            <div className="col text-center">
              <button className="btn btn-primary" onClick={calculateTotal}>Calculate</button>
            </div>
          </div>
          <div className="row">
            <div className="col m-3 text-center">
              <h1>{(result).toFixed(1)} {" "} inches per acre</h1>
              <h1>{(acreFeet).toFixed(1)} {" "} acre/feet</h1>
            </div>
          </div>
      </div>
      
    </>
   
  );


}
export default App;
