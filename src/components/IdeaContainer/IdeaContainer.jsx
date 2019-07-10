import React from 'react';
import './IdeaContainer.css';
import IdeaCard from '../IdeaCard/IdeaCard';

export default function IdeaContainer({ ideas, deleteIdeas }){
	const ideaCard = ideas.map(idea => <IdeaCard deleteIdeas={deleteIdeas} {...idea} key={idea.id} />);
	return <div>{ideaCard}</div>;
}
