import React from "react";

export default function ImageGallery({ children }) {
	return (
		<>
			<ul className="gallery">{children}</ul>
		</>
	);
}
