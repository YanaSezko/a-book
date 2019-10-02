import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import MenuItem from '../components/MenuItem';

import address from '../../img/address.ico';
import star from '../../img/star.ico';
import customers from '../../img/customers.ico';



export default class Layout extends React.Component{
	constructor(props){
		super();
		this.brand = "A-Book";
	}
	isActive(href){
		return window.location.pathname === href;
	}
	
	render(){
		return(
			<>
			<header className="header container">
					<p className="logo"><a  href="/" active = {this.isActive('/')}>{this.brand}</a></p>
			</header>
			<main className="main">
				<div className="card text-center">
				<Menu>
				<MenuItem href="users" active = {this.isActive('/users')}>Мои контакты
<img src={address} alt="Избранные" />					
					</MenuItem>
				<MenuItem href="usersF" active = {this.isActive('/usersF')}>Избранные
<img src={star} alt="Избранные" />
</MenuItem>
				<MenuItem href="groups"  active = {this.isActive('/groups')}>Группы
<img src={customers} alt="Группы" />
</MenuItem>
				</Menu>
			<div className="card-body">
				{this.props.children}
			</div>
  	</div>
</main>
			< Footer clasName="footer" />
			</>
		);
	}
}




