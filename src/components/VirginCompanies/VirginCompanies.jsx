import Button from '../Button';
import React from 'react';
import RedRectangle from './RedRectangle';
import SliderContainer from './SliderContainer';

const VirginCompanies = () => {
	return (
		<section className="virgin-companies">
			<RedRectangle />
			<div className="line"></div>
			<div className="wrapper">
				<h1 className="title">
					See what we're made of<span className="red-dot">.</span>
				</h1>
				<SliderContainer />
				<Button
					buttonClass={'companies-btn'}
					buttonTitle={'See all Virgin Companies'}
				/>
			</div>
		</section>
	);
};

export default VirginCompanies;
