import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	const [contact, setContact] = useState({name:"", address:"", email:"", phone:""})
	const navigate = useNavigate()

	const handleInput = (e) => {
		setContact({...contact, [e.target.name]:e.target.value})
	 }

	const handleSubmit = (e) => {
		e.preventDefault()
		actions.addContact(contact)
		navigate('/')
	}

	return (
		<form className="w-50 d-flex justify-content-center flex-column m-auto mt-5 bg-ternary" onSubmit={(e) => {handleSubmit(e)}}>
			<div className="mb-3">
				<label htmlFor="formGroupExampleInput2" className="form-label">Name:</label>
				<input type="text" name="name" className="form-control" required placeholder="Name" onChange={(e) => {handleInput(e)}}/>
			</div>
			<div className="mb-3">
				<label htmlFor="formGroupExampleInput2" className="form-label">Adress:</label>
				<input type="text" name="address" className="form-control" required  placeholder="Address" onChange={(e) => {handleInput(e)}}/>
			</div>
			<div className="mb-3">
				<label htmlFor="formGroupExampleInput2" className="form-label">Phone number:</label>
				<input type="number" name="phone" className="form-control" required  placeholder="Phone number" onChange={(e) => {handleInput(e)}}/>
			</div>
			<div className="mb-3">
				<label htmlFor="formGroupExampleInput2" className="form-label">Email:</label>
				<input type="email" name="email" className="form-control" required  placeholder="Email" onChange={(e) => {handleInput(e)}} />
			</div>
			<button type="submit" className="btn btn-primary">Submit</button>
			<Link to="/">Or get back to contacts</Link>
		</form>
	);
};
