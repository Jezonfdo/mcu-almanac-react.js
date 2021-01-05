import React from 'react';
import './Card.css';

var Card = (props) => {
	var { name, id, heroName, power } = props
	return (
		<div className='bg-light-blue br3 pa3 ma2 grow bw3 shadow-5 dib tc'> 
			<img src={id} alt="profile" id="img"/>
			<div>
				<h3>{heroName}</h3>
				<p>{name}</p>
				<p>{power}</p>
			</div>
		</div>
	);
}

export default Card;	