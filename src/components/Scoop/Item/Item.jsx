import Image from './Image';
import React from 'react';
import TextContent from './TextContent';

const Item = ({ src, author, date, title }) => {
	return (
		<div className="item">
			<div className="item-image">
				<Image src={src} />
			</div>
			<TextContent author={author} title={title} date={date} />
		</div>
	);
};

export default Item;
