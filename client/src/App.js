import React, { Component } from 'react';
import About from './components/AboutUs/AboutUs';
import Header from './components/Header/Header'; 
import Wrapper from './components/Wrapper/Wrapper';  
import './App.css';

// import Home from './pages/Home';


class App extends Component {
	render() {
		return (
			<Wrapper>
				<About />
			</Wrapper>
		);
	}
}

export default App;
