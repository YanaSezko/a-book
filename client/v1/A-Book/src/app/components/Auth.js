import React, {Component} from 'react';

export default class Auth extends Component {
	render(){
		return(<>
			<section className="form auth">
				<h2 className="visually-hidden">Авторизация</h2>
				<form className="form-auth">
					<div className="form-group">
						<label className="visually-hidden" htmlFor="exampleInputEmail1">E-mail</label>
						<input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email"></input>
					</div>
					<div className="form-group">
						<label className="visually-hidden" htmlFor="exampleInputPassword1">Password</label>
						<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter password"></input>
					</div>
					<div className="form-group visually-hidden">
						<label className="visually-hidden" htmlFor="exampleInputPassword2">Password</label>
						<input type="password" className="form-control" id="exampleInputPassword2" placeholder="Enter the password again"></input>
					</div>
					<div className="form-group form-check">
						<input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
						<label className="form-check-label" htmlFor="exampleCheck1">Запомнить пароль</label>
					</div>
					<div className="user-navigation">
						<ul className="list-hiden user-navigation">
							<li className=""><button type="submit" className="btn btn-secondary">Войти</button></li>
							<li className=""><button type="submit" className="btn btn-secondary">Регистрация</button></li>
							<li><button type="submit" className="btn btn-secondary visually-hidden">Сохранить</button></li>
						</ul>
					</div>
				</form>
			</section>
			</>
    	)
	}
}