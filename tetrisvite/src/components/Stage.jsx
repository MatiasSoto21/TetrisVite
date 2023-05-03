import React from 'react';
import { StyledStage } from './styles/StyledStage';
import styles from "../modulecss/Stage.module.css"
import Cell from './Cell';

const Stage = ({ stage }) => (
  <div id={styles.main} className="border-2 border-x-cyan-500 w-full h-full bg-black">
    {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
  </div>
);

export default Stage;
