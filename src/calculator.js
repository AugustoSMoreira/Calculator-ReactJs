import { useState } from "react";
import { Jumbotron, Container, Row, Col, Button, Form } from "react-bootstrap";
import CalculatorService from "./calculator.service";
import "./calculator.css";

function Calculator() {
  const [calculate, concatNumbers, sum, sub, split, mult] = CalculatorService();

  const [txtNumbers, setTxtnumbers] = useState("0");
  const [number1, setNumber1] = useState("0");
  const [number2, setNumber2] = useState(null);
  const [operation, setOperation] = useState(null);

  function addNumber(number) {
    let result;
    if (operation === null) {
      result = concatNumbers(number1, number);
      setNumber1(result);
    } else {
      result = concatNumbers(number2, number);
      setNumber2(result);
    }
    setTxtnumbers(result);
  }

  function defineOperation(op) {
    // apenas definir a operação caso não exista
    if (operation === null) {
      setOperation(op);
      return;
    }

    // caso operação estiver definida e number2 selecionado, realiza o cálculo da operação
    if (number2 !== null) {
      const result = calculate(
        parseFloat(number1),
        parseFloat(number2),
        operation
      );
      setOperation(op);
      setNumber1(result.toString());
      setNumber2(null);
      setTxtnumbers(result.toString());
    }
  }

  function calculateAction() {
    if (number2 === null) {
      return;
    }
    const result = calculate(
      parseFloat(number1),
      parseFloat(number2),
      operation
    );
    setTxtnumbers(result);
  }

  function cleanCalculator() {
    setTxtnumbers("0");
    setNumber1("0");
    setNumber2(null);
    setOperation(null);
  }

  return (
    <div className="calculator_body">
      <h1>Calculator ReactJS</h1>
      <Jumbotron
        className="calculator-jumbotron"
        style={{
          padding: "15px",
          margin: "5px",
          width: "400px",
        }}>
        <Container>
          <Row>
            <Col xs="3">
              <Button variant="danger" onClick={cleanCalculator}>
                C
              </Button>
            </Col>
            <Col xs="9">
              <Form.Control
                type="text"
                name="txtNumbers"
                style={{ textAlign: "right" }}
                readOnly="readonly"
                value={txtNumbers}
                data-testid="txtNumbers"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="secondary" onClick={() => addNumber("7")}>
                7
              </Button>
            </Col>
            <Col>
              <Button variant="secondary" onClick={() => addNumber("8")}>
                8
              </Button>
            </Col>
            <Col>
              <Button variant="secondary" onClick={() => addNumber("9")}>
                9
              </Button>
            </Col>
            <Col>
              <Button
                variant="warning"
                onClick={() => defineOperation(split)}>
                /
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="secondary" onClick={() => addNumber("4")}>
                4
              </Button>
            </Col>
            <Col>
              <Button variant="secondary" onClick={() => addNumber("5")}>
                5
              </Button>
            </Col>
            <Col>
              <Button variant="secondary" onClick={() => addNumber("6")}>
                6
              </Button>
            </Col>
            <Col>
              <Button
                variant="warning"
                onClick={() => defineOperation(mult)}>
                *
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="secondary" onClick={() => addNumber("1")}>
                1
              </Button>
            </Col>
            <Col>
              <Button variant="secondary" onClick={() => addNumber("2")}>
                2
              </Button>
            </Col>
            <Col>
              <Button variant="secondary" onClick={() => addNumber("3")}>
                3
              </Button>
            </Col>
            <Col>
              <Button
                variant="warning"
                onClick={() => defineOperation(sub)}>
                -
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="secondary" onClick={() => addNumber("0")}>
                0
              </Button>
            </Col>
            <Col>
              <Button variant="secondary" onClick={() => addNumber(".")}>
                .
              </Button>
            </Col>
            <Col>
              <Button variant="success" onClick={calculateAction}>
                =
              </Button>
            </Col>
            <Col>
              <Button
                variant="warning"
                onClick={() => defineOperation(sum)}>
                +
              </Button>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <footer>By Augusto Moreira</footer>
    </div>
  );
}

export default Calculator;
