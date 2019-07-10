import React from 'react';
import './IdeaCard.css';

export default function IdeaCard({ title, description, id, deleteIdeas }){
	return (
		<div>
			<h2>{title}</h2>
			<h5>{description}</h5>
			<button onClick={() => deleteIdeas(id)}>🗑</button>
		</div>
	);
}
