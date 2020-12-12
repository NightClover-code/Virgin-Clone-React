/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';

const NavBar = () => {
	return (
		<nav className="nav-bar">
			<ul>
				<li>
					<a href="#">Companies</a>
				</li>
				<li data-id="about">
					<a href="#">
						About us<i className="fas fa-chevron-down"></i>
					</a>
				</li>

				<li data-id="foundation">
					<a href="#">
						Our foundation<i className="fas fa-chevron-down"></i>
					</a>
				</li>
				<li data-id="branson">
					<a href="#">
						branson family<i className="fas fa-chevron-down"></i>
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
