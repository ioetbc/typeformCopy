import React from 'react';
import './App.css';

class App extends React.Component {
	constructor() {
		super();
		this.nextField = this.nextField.bind(this);
	  }
	
	  componentDidMount() {
			console.log('this.refs', this.refs)
			for (let x in this.refs) {
				console.log('x', x)
				this.refs[x].onblur = () => this.nextField(this.refs[x]);
			}
	  }
	
	  nextField(field) {
		console.log('dwdwd')
		console.log(this.refs[field.name])
		const next = this.refs[field.name].nextSibling;

		if (next) {
			this.refs[field.name].nextSibling.focus();
		}
	  }
	
	  render() {
			return (
				<div>
					<input type="text" name="1" ref='1' className="error-wiggle" />
					<input type="text" name="2" ref='2' />
					<input type="text" name="3" ref='3' />
				</div>
			);
	  }
}

export default App;
