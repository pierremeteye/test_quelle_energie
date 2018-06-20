import React, { Component } from 'react';



class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			items: []
		};
	}


	componentDidMount() {
		fetch(`http://localhost:3000/posts`, {
			method: 'post',
			body: JSON.stringify({ "content": "some interesting content" })
		})
		.then(function (response) {
			return response.json()
		})
		.then(function (data) {
			console.log('post request response data', data)
		})
	}
	render() {
		const { error, isLoaded, items } = this.state;
		if (error) {
			return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
			return <div>Loading...</div>;
		} else {
			console.log(this.state.items);
			return (
				<ul>
				
				</ul>
				);
		}
	}
}

export default App;