import React from 'react';
import Card from './Card';

var CardsList = ({ heros }) => {
	var cardComp = heros.map((loop, i) => {
		return <Card key={i} id={heros[i].id} heroName={heros[i].heroName} name={heros[i].name} power={heros[i].power} />
	})
	return (
		<div>
			{ cardComp }
		</div>
	)
}

export default CardsList;