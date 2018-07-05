import React, { Component } from 'react';
import axios from 'axios';

export default class PostList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			currentId: 0,
			showAddPostButton: true,
			showTextarea: true,
			content: null,
			isDone: false
		};
	}
	showAddPost(){
		this.setState(prevState => ({
			showAddPostButton: !prevState.showAddPostButton
		}));
	}
	showTextarea(){
		this.setState(prevState => ({
			showTextarea: !prevState.showTextarea
		}));
	}
	onChange(e){
		this.setState({
			content: e.target.value
		})
	}
	onDelete(i){
		axios.delete('https://effy-simple-api.herokuapp.com/posts/'+i+'')
		.then((response) => {
			axios.get('https://effy-simple-api.herokuapp.com/posts')
			.then((response) => {
				this.setState({data: response.data})
			})
			.catch((error) => {
				console.log(error);
			})
		})
		.catch((error) => {
			console.log(error);
		});
	}
	onSubmit(e) {
		e.preventDefault();
		console.log(this.state.content);
		axios.post('https://effy-simple-api.herokuapp.com/posts', {
		    "content": "some interesting post"
		})
		.then((response) => {
			axios.get('https://effy-simple-api.herokuapp.com/posts')
			.then((response) => {
				this.setState({data: response.data})
			})
			.catch((error) => {
				console.log(error);
			})
		})
		.catch((error) => {
			console.log(error);
		});
	}
	componentDidMount() {
		axios.get('https://effy-simple-api.herokuapp.com/posts')
		.then((response) => {
			this.setState({data: response.data})
		})
		.catch((error) => {
			console.log(error);
		})
	}
	render() {
		let post = this.state.data.map((data, i)=> {
			return <div key={data.id} className="col-12 f-l">
				<div className="col-6 f-l">
					<p>Title : {data.title}</p>
					<p>Body : {data.content}</p>
					<button onClick={this.onDelete.bind(this, data.id)}>Supp</button>
				</div>
			</div>
		});
		var render = null;

		if (this.state.data.length === 0) {
			render = <div className={this.state.showAddPostButton ? 'center fullCentered' : 'hide'}>
				<h1>No Post</h1>
				<button onClick={this.showAddPost.bind(this)}>Add post</button>
			</div>
		} else {
			render = post;
		}		
		return (
			<div>
				<div className={!this.state.showAddPostButton || this.state.data.length > 0 ? 'col-12 center' : 'hide'}>
					<button onClick={this.showTextarea.bind(this)}>Add post</button>
					<form className={this.state.showTextarea ? 'col-12 hide' : 'col-12 center'} onSubmit={this.onSubmit.bind(this)}>
						<textarea onChange={this.onChange.bind(this)} cols="30" rows="10"></textarea>
						<input type="submit"/>
					</form>
				</div>
				{render}
			</div>
			);
	}
}
