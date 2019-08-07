import React, { Component } from 'react'

class Form extends Component {
	constructor(props) {
		super(props)

		this.initialState = {
			name: '',
			job: '',
			gender: '',
			nationality: '',
		}
		this.state = this.initialState
	}

	handleChange = event => {
		const { name, value } = event.target
	  
		this.setState({
		  	[name]: value,
		})
	}

	handleChangeRadioBtn = event => {
		const { name, value } = event.target
	  
		this.setState({
		  	[name]: value,
		})
	}

	submitForm = () => {
		this.props.handleSubmit(this.state)
		this.setState(this.initialState)
	}

	render() {
		const { name, job, gender, nationality } = this.state;
	  
		return (
			
			<div class="form-group">
				<form>
					
					<label>Name</label>
					<input
						type="text"
						name="name"
						value={name}
						onChange={this.handleChange} required/>
					
					<label>Job</label>
					<input
						type="text"
						name="job"
						value={job}
						onChange={this.handleChange} required/>
					
					<label>Gender</label>
					<br />
					<input type="radio" name="gender" value="male" onClick={this.handleChange} />Male
					<input type="radio" name="gender" value="female" onClick={this.handleChange} />Female 
					<br /><br />

					<label>Nationality</label>
					<select name="nationality" onChange={this.handleChange} required>
						<option value="Filipino">Filipino</option>
						<option value="American">American</option>
					</select>
					<button type="button" onClick={this.submitForm}>Submit</button>
				</form>
			</div>
		);
	  }
}

export default Form;