import React from 'react';

const TextContent = ({ author, title, date }) => {
	return (
		<div className="text-content">
			<span className="author">{author}</span>
			<h3>{title}</h3>
			<span>{date}</span>
		</div>
	);
};

export default TextContent;
