import React from 'react';

const CompaniesButton = ({ buttonClass, buttonTitle }) => {
	return (
		<div className="companies-button-container">
			<button className={`btn ${buttonClass}`}>
				{buttonTitle}
				<div className="button-overlay"></div>
			</button>
		</div>
	);
};

export default CompaniesButton;
