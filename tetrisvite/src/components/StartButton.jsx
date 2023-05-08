import React from 'react';
import styled from 'styled-components';

const StyledStartButton = styled.button`
  box-sizing: border-box;

  margin: 0 0 20px 0;
  padding: 20px;
  min-height: 30px;
  width: 100%;
  border-radius: 20px;
  border: none;
  color: white;
  background: #333;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 1rem;
  outline: none;
  cursor: pointer;
`;

const StartButton = ({ callback }) => (
  <div className="text-white p-[20px] mt-16 min-h-[30px] w-full border-4 border-gray-400 rounded-3xl bg-gray-700 font-[pixel] text-3xl hover:cursor-pointer hover:scale-[1.03]" onClick={callback}>Start Game</div>
);

export default StartButton;
