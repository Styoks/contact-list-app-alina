const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			createUser: async()=> {
				await fetch (`https://playground.4geeks.com/contact/agendas/Styoks`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					  }
				})
				console.log(fetch);
			},

			getContacts: async() => {
				
				const result = await fetch (`https://playground.4geeks.com/contact/agendas/Styoks`)
				
				if (result.ok) {
					const data = await result.json()
					setStore({contacts: data.contacts})
					console.log("Ya existia");
				} else {
					getActions().createUser()
					console.log(result);
				}

			},

			editContact: async(id,newContact) => {
				await fetch (`https://playground.4geeks.com/contact/agendas/Styoks/contacts/${id}`, {
					method: "PUT", 
					body: JSON.stringify(newContact), 
					headers: {"Content-Type": "application/json"}
				})
				
				getActions().getContacts()
			},
			
			deleteContact: async(id) => {
				await fetch (`https://playground.4geeks.com/contact/agendas/Styoks/contacts/${id}`, {
					method: "DELETE"
				})
				getActions().getContacts()
			},

			addContact: async(newContact) => {
				await fetch (`https://playground.4geeks.com/contact/agendas/Styoks/contacts/`, {
					method: "POST", 
					body: JSON.stringify(newContact), 
					headers: {"Content-Type": "application/json"}
				})

				getActions().getContacts()
			},

			getFormInfo: (event) => {
				console.log(event.target)
				event.preventDefault()
				const formData = new FormData(event.target)
				console.log(formData);
			}
		}
	};
};

export default getState;
