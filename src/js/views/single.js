import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Edit = () => {
	const {id} = useParams()
	const { store, actions } = useContext(Context);
	const [contact, setContact] = useState({name:"asda", address:"", email:"", phone:""})

	const handleInput = (e) => {
		setContact({...contact, [e.target.name]:e.target.value})
	 }

	const handleSubmit = (e) => {
		e.preventDefault()
		actions.editContact(id, contact)
	}

	useEffect(() => {
		let con = store.contacts.find((contacto) => contacto.id == id)
		setContact(con)}, 
	[])

	return (
		<form className="w-50 d-flex justify-content-center flex-column" onSubmit={(e) => {handleSubmit(e)}}>
			<div className="mb-3">
				<label htmlFor="formGroupExampleInput2" className="form-label">Name:</label>
				<input type="text" name="name" className="form-control" placeholder={``} value={contact?.name} onChange={(e) => {handleInput(e)}}/>
			</div>
			<div className="mb-3">
				<label htmlFor="formGroupExampleInput2" className="form-label">Adress:</label>
				<input type="text" name="address" className="form-control"  placeholder="Address" value={contact?.address} onChange={(e) => {handleInput(e)}}/>
			</div>
			<div className="mb-3">
				<label htmlFor="formGroupExampleInput2" className="form-label">Phone number:</label>
				<input type="text" name="phone" className="form-control"  placeholder="Phone number" value={contact?.phone} onChange={(e) => {handleInput(e)}}/>
			</div>
			<div className="mb-3">
				<label htmlFor="formGroupExampleInput2" className="form-label">Email:</label>
				<input type="text" name="email" className="form-control"  placeholder="Email" value={contact?.email} onChange={(e) => {handleInput(e)}} />
			</div>
			<button type="submit" className="btn btn-primary">Submit</button>
			<Link to="/">Or get back to contacts</Link>
		</form>
	);
};
