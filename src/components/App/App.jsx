import React, { Component } from 'react';
import IdeaContainer from '../IdeaContainer/IdeaContainer';
import Form from '../Form/Form';

export class App extends Component {
	constructor() {
		super();
		this.state = {
			ideas: []
		};
	}

	addIdea = newIdea => {
		this.setState({
			ideas: [ ...this.state.ideas, newIdea ]
		});
	};

	deleteIdea = id => {
		const filteredIdeas = this.state.ideas.filter(idea => idea.id !== id);
		this.setState({
			ideas: filteredIdeas
		});
	};

	render() {
		return (
			<div>
				<h1>IdeaBox</h1>
				<Form addIdea={this.addIdea} />
				<IdeaContainer ideas={this.state.ideas} deleteIdeas={this.deleteIdea} />
			</div>
		);
	}
}

export default App;
