import LeftArrow from './LeftArrow';
import React from 'react';
import RightArrow from './RightArrow';

const SliderContainer = () => {
	return (
		<div className="slider-container">
			<div className="grid-container">
				<LeftArrow />
				<RightArrow />
				<div className="companies-grid">{/* //TODO add squares */}</div>
			</div>
		</div>
	);
};

export default SliderContainer;
