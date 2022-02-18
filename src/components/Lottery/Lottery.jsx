import React from 'react'
import './Lottery.css'

function Lottery({num}){
  return (
		<div className="lottery">
			<div className="numbers">
				<div className="number">{num}</div>
				<div className="number">{num}</div>
				<div className="number">{num}</div>
				<div className="number">{num}</div>
				<div className="number">{num}</div>
			</div>
		</div>
	);
}


export default Lottery
