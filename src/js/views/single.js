import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Edit = () => {
	const {id} = useParams()
	const { store, actions } = useContext(Context);
	const [contact, setContact] = useState({name:"", address:"", email:"", phone:""})
	const navigate = useNavigate()
	
	useEffect(() => {
		let singleContactInfo = store.contacts.find((contacto) => contacto.id == id)
		setContact(singleContactInfo)}, 
	[])

	const handleInput = (e) => {
		setContact({...contact, [e.target.name]:e.target.value})
	 }

	const handleSubmit = (e) => {
		e.preventDefault()
		actions.editContact(id, contact)
		navigate('/')
	}

	return (
		<form className="w-50 d-flex justify-content-center flex-column m-auto mt-5" onSubmit={(e) => {handleSubmit(e)}}>
			<div className="mb-3">
				<label htmlFor="formGroupExampleInput2" className="form-label">Name:</label>
				<input type="text" name="name" className="form-control" placeholder="Name" value={contact?.name} onChange={(e) => {handleInput(e)}}/>
			</div>
			<div className="mb-3">
				<label htmlFor="formGroupExampleInput2" className="form-label">Adress:</label>
				<input type="text" name="address" className="form-control"  placeholder="Address" value={contact?.address} onChange={(e) => {handleInput(e)}}/>
			</div>
			<div className="mb-3">
				<label htmlFor="formGroupExampleInput2" className="form-label">Phone number:</label>
				<input type="number" name="phone" className="form-control"  placeholder="Phone number" value={contact?.phone} onChange={(e) => {handleInput(e)}}/>
			</div>
			<div className="mb-3">
				<label htmlFor="formGroupExampleInput2" className="form-label">Email:</label>
				<input type="email" name="email" className="form-control"  placeholder="Email" value={contact?.email} onChange={(e) => {handleInput(e)}} />
			</div>
			<button type="submit" className="btn btn-primary">Submit</button>
			<Link to="/">Or get back to contacts</Link>
		</form>
	);
};
