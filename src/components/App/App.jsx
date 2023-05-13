import React, { Component } from "react";

import Searchbar from "../Searchbar/Searchbar";
import ImageGallery from "../ImageGallery/ImageGallery";
// import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
// import Modal from '../Modal/Modal';

export default class App extends Component {
	state = {
		images: [],
	};

	onFetchPhotos = photos => {
		this.setState({ images: [...photos] });
		// this.setState(state => {
		// 	return { images: [...state.images, ...photos] };
		// });
		// console.log(this.state.images);
	};

	render() {
		return (
			<>
				<Searchbar onSubmit={this.onFetchPhotos}></Searchbar>
				<ImageGallery></ImageGallery>
			</>
		);
	}
}
