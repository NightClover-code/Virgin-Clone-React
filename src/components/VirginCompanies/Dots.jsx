import React from 'react';

const Dots = () => {
	return (
		<div className="dots-container">
			<div className="dots">
				<div className="dot-container active-dot" data-id="0">
					<div className="dot"></div>
				</div>
				<div className="dot-container" data-id="1">
					<div className="dot"></div>
				</div>
				<div className="dot-container" data-id="2">
					<div className="dot"></div>
				</div>
			</div>
		</div>
	);
};

export default Dots;
