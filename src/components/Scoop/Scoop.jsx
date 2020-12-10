import Button from '../Button';
import Item from './Item/Item';
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
					<Item
						src={'./assets/img/1.jpg'}
						author={'Richard'}
						title={'Virgin Hyperloop makes transportation history'}
						date={'9 November 2020'}
					/>
					<Item
						src={'./assets/img/2.jpg'}
						author={'Virgin Companies'}
						title={'Passengers travel safely on a Hyperloop for the first time'}
						date={'9 November 2020'}
					/>
					<Item
						src={'./assets/img/3.jpg'}
						author={'Virgin Unite'}
						title={'Dream Corps on the power of our common humanity'}
						date={'9 November 2020'}
					/>
					<Item
						src={'./assets/img/4.jpg'}
						author={'Virgin Companies'}
						title={'Interior design tips from a Virgin Hotels stylist'}
						date={'6 November 2020'}
					/>
					<Item
						src={'./assets/img/5.jpg'}
						author={'Careers'}
						title={'Meet the Virgin Family: Charmaine Clarke'}
						date={'6 November 2020'}
					/>
					<Item
						src={'./assets/img/6.jpg'}
						author={'Virgin Companies'}
						title={
							'Virgin Galactic on first spaceflight from Spaceport America'
						}
						date={'6 November 2020'}
					/>
				</div>
			</div>
			<Button buttonClass={'scoop-btn'} buttonTitle={'View more from Virgin'} />
		</section>
	);
};

export default Scoop;
