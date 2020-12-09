import React from 'react';

const Scoop = () => {
	return (
		<section className="scoop">
			<svg
				width="1903"
				height="81"
				viewBox="0 0 1903 81"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M-5.34058e-05 3.8147e-06V81L1903 3.8147e-06H-5.34058e-05Z"
					fill="#FFF2F2"
				/>
			</svg>
			<div className="line"></div>
			<div className="wrapper">
				<h1 className="title">
					Get the inside scoop<span className="red-dot">.</span>
				</h1>
				<div className="scoop-grid">
					<div className="item">
						<img src="./assets/img/1.jpg" alt="" />
						<div className="text-content">
							<span className="author">Richard</span>
							<h3>Virgin Hyperloop makes transportation history</h3>
							<span>9 November 2020</span>
						</div>
					</div>
					<div className="item">
						<img src="./assets/img/2.jpg" alt="" />
						<div className="text-content">
							<span className="author">Virgin companies</span>
							<h3>
								Passengers travel safely on a Hyperloop for the first time
							</h3>
							<span>9 November 2020</span>
						</div>
					</div>
					<div className="item">
						<img src="./assets/img/3.jpg" alt="" />
						<div className="text-content">
							<span className="author">Virgin Unite</span>
							<h3>Dream Corps on the power of our common humanity</h3>
							<span>9 November 2020</span>
						</div>
					</div>
					<div className="item">
						<img src="./assets/img/4.jpg" alt="" />
						<div className="text-content">
							<span className="author">Virgin companies</span>
							<h3>Interior design tips from a Virgin Hotels stylist</h3>
							<span>6 November 2020</span>
						</div>
					</div>
					<div className="item">
						<img src="./assets/img/5.jpg" alt="" />
						<div className="text-content">
							<span className="author">Careers</span>
							<h3>Meet the Virgin Family: Charmaine Clarke</h3>
							<span>6 November 2020</span>
						</div>
					</div>
					<div className="item">
						<img src="./assets/img/6.jpg" alt="" />
						<div className="text-content">
							<span className="author">Virgin companies</span>
							<h3>
								Virgin Galactic on first spaceflight from Spaceport America
							</h3>
							<span>6 November 2020</span>
						</div>
					</div>
				</div>
			</div>
			<div className="companies-button-container">
				<button className="btn scoop-btn">View more from Virgin</button>
			</div>
		</section>
	);
};

export default Scoop;
