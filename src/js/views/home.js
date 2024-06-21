import React, { useContext,useEffect,useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import DeleteConfirmation from "./DeleteConfirmation";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [show, setShow] = useState({id: null, show: false});
  	const handleShow = (id) => setShow({id: id, show: true});
	const handleClose = () => setShow({id: null, show: false});

	return (
	<div className="mt-5 w-100 d-flex justify-content-center">
		<ul className="list-group w-75 text-align-center">
			{store.contacts.map((item, index) => {
				
			return (
				<li key={item.id} className="list-group-item d-flex p-4 gap-5">
					<img src={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg` } className="rounded-circle"></img>	
					<div className="">
						<h5 className="card-title">{item.name}</h5>
						<p className="text-body-secondary">{item.address}</p>
						<p className="text-body-secondary">{item.email}</p>
						<p className="text-body-secondary">{item.phone}</p>
						<p className="text-body-secondary">{item.id}</p>
					</div>
					<div>
						<Link to={`/single/${item.id}`} className="btn btn-primary">Edit</Link>
						<Button variant="primary" onClick={()=>{handleShow(item.id)}}>
							Delete contact
						</Button>
					</div>
					{show.id==item.id && <DeleteConfirmation show={show.show} onHide={handleClose} id={item.id}></DeleteConfirmation>}
				</li>
			)

			})}
		</ul>
	</div>
)};
