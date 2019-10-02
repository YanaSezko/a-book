import React, {Component} from 'react';

import vk from '../../img/icon-vk.svg';
import fb from '../../img/icon-fb.svg';
import insta from '../../img/icon-insta.svg';

const Footer = () => {
  return (
    <footer className="footer">
			<div className="footer-copyright">
				<p>© 2019 "A-Book"</p>
				<p>Все права защищены</p>
			</div>
			<div className="footer-social">
				<ul className="social-list list-hiden">
					<li>
						<a href="#" className="social-button">
							{/* <span className="visually-hidden">Вконтакте</span> */}
							<img src={vk} alt="Вконтакте" />
						</a>
					</li>
					<li>
						<a href="#" className="social-button">
							{/* <span className="visually-hidden">Фейсбук</span> */}
							<img src={fb} alt="Фейсбук" />
						</a>
					</li>
					<li>
						<a href="#" className="social-button">
							{/* <span className="visually-hidden">Инстаграм</span> */}
							<img src={insta} alt="Инстаграм" />
						</a>
					</li>
				</ul>
			</div>
		</footer>
  );
};

export default Footer;