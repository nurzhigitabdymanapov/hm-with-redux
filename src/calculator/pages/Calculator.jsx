import React, { useState } from "react";
import { styled } from "styled-components";

export const Calculator = () => {
  const [value, setValue] = useState();
  const [valu, setValu] = useState();
  const [calc, setCalc] = useState(0);

  const plus = () => {
    setValue(+value + +valu);
  };
  const minus = () => {
    setValue(+value - +valu);
  };
  const multiplication = () => {
    setValue(+value * +valu);
  };
  const division = () => {
    setValue(+value / +valu);
  };
  return (
      <>
        <DivInput>
          <Input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Input
            type="number"
            value={valu}
            onChange={(e) => setValu(e.target.value)}
          />
        </DivInput>
        <Container>
          <main>
            <ButtonDelete onClick={() => setValue(0)}>Delete</ButtonDelete>
            <ButtonZero onClick={() => setValu(0)}>0</ButtonZero>
            <ButtonDivision onClick={division}>/</ButtonDivision>
          </main>
          <div>
            <button onClick={() => setValu(7)}>7</button>
            <button onClick={() => setValu(8)}>8</button>
            <button onClick={() => setValu(9)}>9</button>
            <button onClick={multiplication}>x</button>
          </div>
          <div>
            <button onClick={() => setValu(4)}>4</button>
            <button onClick={() => setValu(5)}>5</button>
            <button onClick={() => setValu(6)}>6</button>
            <button onClick={minus}>-</button>
          </div>
          <div>
            <button onClick={() => setValu(1)}>1</button>
            <button onClick={() => setValu(2)}>2</button>
            <button onClick={() => setValu(3)}>3</button>
            <button onClick={plus}>+</button>
          </div>
        </Container>
      </>
  );
};
const Container = styled.div`
  div {
    width: 280px;
    button {
      margin: 10px;
      width: 50px;
      height: 50px;
    }
  }
`;
const ButtonDelete = styled.button`
  height: 50px;
  margin: 10px;
  width: 120px;
`;
const ButtonDivision = styled.button`
  height: 50px;
  margin: 10px;
  width: 50px;
`;
const ButtonZero = styled.button`
  height: 50px;
  width: 50px;
  margin: 10px;
`;
const Input = styled.input`
  width: 130px;
  height: 30px;
  border: 0;
`;
const DivInput = styled.div`
  margin: 10px;
`;
