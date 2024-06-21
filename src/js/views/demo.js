import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	const [contact, setContact] = useState({name:"", address:"", email:"", phone:""})

	const handleInput = (e) => {
		setContact({...contact, [e.target.name]:e.target.value})
	 }

	const handleSubmit = (e) => {
		e.preventDefault()
		actions.addContact(contact)
	}

	return (
		<form className="w-50 d-flex justify-content-center flex-column" onSubmit={(e) => {handleSubmit(e)}}>
			<div className="mb-3">
				<label htmlFor="formGroupExampleInput2" className="form-label">Name:</label>
				<input type="text" name="name" className="form-control"  placeholder="Name" onChange={(e) => {handleInput(e)}}/>
			</div>
			<div className="mb-3">
				<label htmlFor="formGroupExampleInput2" className="form-label">Adress:</label>
				<input type="text" name="address" className="form-control"  placeholder="Address" onChange={(e) => {handleInput(e)}}/>
			</div>
			<div className="mb-3">
				<label htmlFor="formGroupExampleInput2" className="form-label">Phone number:</label>
				<input type="text" name="phone" className="form-control"  placeholder="Phone number" onChange={(e) => {handleInput(e)}}/>
			</div>
			<div className="mb-3">
				<label htmlFor="formGroupExampleInput2" className="form-label">Email:</label>
				<input type="text" name="email" className="form-control"  placeholder="Email" onChange={(e) => {handleInput(e)}} />
			</div>
			<button type="submit" className="btn btn-primary">Submit</button>
			<Link to="/">Or get back to contacts</Link>
		</form>
	);
};
