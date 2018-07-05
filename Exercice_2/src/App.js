import React, { Component } from 'react';
import axios from 'axios';


// Custom import
import PostList from './Components/PostList';



class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			data: []
		};
	}

	render() {
		const { error } = this.state;
		if (error) {
			return <div>Error: {error.message}</div>;
		} else {
			return (
				<PostList />
			);
		}
	}
}

export default App;