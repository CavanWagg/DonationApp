import React from 'react'; 
import './Header.css'; 
// import Button from '@material/react-button/dist'; // /index.js is implied

const Header = () => (
	<nav className="navbar navbar-expand-lg navbar-light bg-light">
		<a className="navbar-brand" href="/">Navbar</a>
		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
		</button>

		<div className="collapse navbar-collapse" id="navbarSupportedContent">
			<ul className="navbar-nav mr-auto">
				<li className="nav-item active">
					<a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="/about">About</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="/donations">Donations</a>
				</li>
				<li className="nav-item">
					<a className="nav-link disabled" href="/login">Sign up / Login</a>
				</li>
			</ul>
		</div>
	</nav>
);

export default Header; 