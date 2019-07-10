import React, { Component } from 'react';
import './Form.css';

export class Form extends Component {
	constructor() {
		super();
		this.state = {
			title: '',
			description: '',
			id: Date.now()
		};
	}

	submitIdea = e => {
		e.preventDefault();
		this.props.addIdea(this.state);
		this.clearInputs();
	};

	handleClick = e => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	};

	clearInputs = () => {
		this.setState({
			title: '',
			description: ''
		});
	};

	render() {
		return (
			<div>
				<input type="text" name="title" value={this.state.title} placeholder="title" onChange={this.handleClick} />
				<input
					type="text"
					name="description"
					value={this.state.description}
					placeholder="description"
					onChange={this.handleClick}
				/>
				<button onClick={this.submitIdea}>Submit Idea</button>
			</div>
		);
	}
}

export default Form;
