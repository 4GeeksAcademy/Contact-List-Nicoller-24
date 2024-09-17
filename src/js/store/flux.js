const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			 contacs: [
				
			],
			contactId: [

			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				console.log("se cargo la pagina")
				fetch("https://playground.4geeks.com/contact/agendas/nicolle/contacts")
				.then((response)=> response.json())
				 //.then((data) => console.log(data.contacts))
				 .then((data)=> setStore({contacs: data.contacts}))
			},
			removeContact: (idToDelete) => {
				console.log("remove from flux " + idToDelete)
				fetch("https://playground.4geeks.com/contact/agendas/nicolle/contacts/" + idToDelete, 
					{
						method: "DELETE",
						redirect: "follow"
					}
				)
  					.then((response) => response.text())
					.then(()=> getActions().loadSomeData())
				 
				//setStore({ contacs: store.contacs.filter((contacto, index) => contacto.id != idToDelete) });

			},
			addNewContact: (name, phone, email, address) => {
				fetch('https://playground.4geeks.com/contact/agendas/nicolle/contacts',
					{method: 'POST', 
					 headers: {"Content-Type": "application/json"},
					 body: JSON.stringify({
						"name": name,
						"phone": phone,
						"email": email,
						"address": address
					
					}),
					redirect: "follow"
					} )
					.then((response) => response.text())
					.then(()=> getActions().loadSomeData())
			}, 
			idContactToPost: (idContact) => {
				console.log("se va a editar el contacto con el id " + idContact)
				const store = getStore();
				setStore({contactId: [idContact]})
				console.log(store.contactId)
				console.log("el array tiene " + store.contactId)
			},
			postContact: (newname, newphone, newemail, newaddress) => {
				const store = getStore();
				console.log("el array tiene " + store.contactId)
				fetch("https://playground.4geeks.com/contact/agendas/nicolle/contacts/" + store.contactId,
					{method: 'PUT', 
						headers: {"Content-Type": "application/json"},
						body: JSON.stringify({
						   "name": newname,
						   "phone": newphone,
						   "email": newemail,
						   "address": newaddress
					   
					   }),
					   redirect: "follow"
					   })
						.then((response) => response.text())
  						.then(() => getActions().loadSomeData())
			
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
