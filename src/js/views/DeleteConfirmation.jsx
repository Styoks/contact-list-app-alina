import React, { useContext } from "react"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Context } from "../store/appContext";

const DeleteConfirmation = ({show, onHide, id}) => {

	const {actions} = useContext(Context)

	const handleDelete = () => {
		actions.deleteContact(id)
		onHide()
	}
    return (
        <Modal show={show} onHide={onHide}>
			<Modal.Header closeButton>
				<Modal.Title>You are deleting the contact!!!</Modal.Title>
			</Modal.Header>
			<Modal.Body>Are yor sure you want to delete the contact?{id}</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={onHide}>
					Close
				</Button>
				<Button variant="primary" onClick={handleDelete}>
					Delete
				</Button>
			</Modal.Footer>
      </Modal>
    )
}

export default DeleteConfirmation