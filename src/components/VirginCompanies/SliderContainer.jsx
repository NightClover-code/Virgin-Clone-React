import React, { useEffect, useRef, useState } from 'react';

import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import Square from './Square/Square';

const SliderContainer = () => {
	// refs
	const leftBtn = useRef(null);
	const rightBtn = useRef(null);
	const gridRef = useRef(null);
	const squareRef = useRef(null);
	//state
	const [counter, setCounter] = useState(0);
	//square width
	const squareWidth =
		squareRef.current != null ? squareRef.current.clientWidth : null;
	//grid gap
	const gap = 10;
	const distance = squareWidth * 3 + gap * 7;
	//on left arrow click
	const onLeftArrowClick = () => {
		if (counter > 0) {
			setCounter(counter - 1);
		} else {
			setCounter(0);
		}
	};
	const onRightArrowClick = () => {
		if (counter < 2) {
			setCounter(counter + 1);
		} else {
			setCounter(2);
		}
	};
	useEffect(() => {
		gridRef.current.style.transform =
			'translateX(' + -distance * counter + 'px)';
		gridRef.current.style.transition = 'all 0.5s ease-in-out';
	}, [counter, distance]);

	return (
		<div className="slider-container">
			<div className="grid-container">
				<LeftArrow leftbtn={leftBtn} onLeftArrowClick={onLeftArrowClick} />
				<RightArrow rightBtn={rightBtn} onRightArrowClick={onRightArrowClick} />
				<div className="companies-grid" ref={gridRef}>
					<Square
						src={'./assets/img/carousel/1.png'}
						text={'Virgin Atlantic'}
						squareRef={squareRef}
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
