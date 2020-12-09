import LeftArrow from './LeftArrow';
import React from 'react';
import RightArrow from './RightArrow';
import Square from './Square/Square';

const SliderContainer = () => {
	return (
		<div className="slider-container">
			<div className="grid-container">
				<LeftArrow />
				<RightArrow />
				<div className="companies-grid">
					<Square
						src={'./assets/img/carousel/1.png'}
						text={'Virgin Atlantic'}
					/>
					<Square src={'./assets/img/carousel/2.png'} text={'Virgin Orbit'} />
					<Square src={'./assets/img/carousel/3.png'} text={'Virgin Media'} />
					<Square
						src={'./assets/img/carousel/4.png'}
						text={'Virgin Money Giving'}
					/>
					<Square src={'./assets/img/carousel/5.png'} text={'Virgin Hotels'} />
					<Square src={'./assets/img/carousel/6.png'} text={'Virgin Money'} />
					<Square
						src={'./assets/img/carousel/7.png'}
						text={'Virgin Wines UK'}
					/>
					<Square src={'./assets/img/carousel/8.png'} text={'Virgin Bet'} />
					<Square
						src={'./assets/img/carousel/9.png'}
						text={'Virgin Holidays'}
					/>
				</div>
			</div>
		</div>
	);
};

export default SliderContainer;
