import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="container" style={{ backgroundColor: "white", width: "70%", paddingBottom: "10%" }}>
            <h1 style={{ marginLeft: "30%" }}>Add a new contact</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="Fullname" className="form-label">Full name</label>
                    <input type="text" className="form-control" id="Fullname" placeholder="Full name"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="Email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="Email" placeholder="Email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="Phone" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="Phone" placeholder="Phone" />
                </div>
                <div className="mb-3">
                    <label htmlFor="Adress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="Adress" placeholder="Adress" />
                </div>
                <button type="submit" className="btn btn-primary w-100 mb-4">Save</button>
            </form>
			<Link to="/demo">
				<a href="#">or get back to contacts</a>
			</Link>
            
        </div>
);
