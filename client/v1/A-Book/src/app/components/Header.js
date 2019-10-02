import React, {Component} from 'react';


export default class Header extends Component {
	constructor(props){
		super();
		this.brand = "A-Book";
	}
	isActive(href){
		return window.location.pathname === href;
	}
	render(){
		return(<>
			<header  className="header container"><p className="logo">
				<a  href="/" active = {this.isActive('/')}>{this.brand}</a>
			   </p>
			</header> 
		</>
		)
	}
}
