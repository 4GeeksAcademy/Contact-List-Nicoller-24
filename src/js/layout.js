import React from "react";
import injectContext from "./store/appContext";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { addContact } from "./component/addcontact";
import { contactAgend } from "./component/contactagend";
const Layout = () => {

	
	const basename = process.env.BASENAME || "";
	//<BrowserRouter basename={basename}></BrowserRouter>

	return (<>
			
			<div style={{ backgroundColor: "black", minHeight: "100vh" }}>
				


				
			</div>
		</>
	);
};

export default injectContext(Layout);
