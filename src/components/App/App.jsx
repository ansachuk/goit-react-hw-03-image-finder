import { Component } from "react";

import Searchbar from "../Searchbar/Searchbar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
// import Loader from '../Loader/Loader'
// import Button from "../Button/Button";
import Modal from "../Modal/Modal";

export default class App extends Component {
	state = {
		images: [],
		isModalOpen: false,
		currentModalImg: {},
	};

	onESCPress = e => {
		if (e.code === "Escape") {
			return this.setState({ isModalOpen: false });
		}
	};

	onFetchPhotos = photos => {
		this.setState({ images: [...photos] });
		// this.setState(state => {
		// 	return { images: [...state.images, ...photos] };
		// });
		// console.log(this.state.images);
	};

	closeModal = e => {
		if (e.currentTarget === e.target) {
			this.setState({ isModalOpen: false });
		}
	};

	onImgClick = e => {
		const currentImg = this.state.images.find(image => image.id === Number(e.target.id));
		this.setState({ currentModalImg: currentImg, isModalOpen: true });
	};

	render() {
		return (
			<>
				<Searchbar onSubmit={this.onFetchPhotos}></Searchbar>
				<ImageGallery>
					{this.state.images.map(({ tags, webformatURL, largeImageURL, id }) => (
						<ImageGalleryItem
							onClick={this.onImgClick}
							key={id}
							id={id}
							webURL={webformatURL}
							tags={tags}
							large={largeImageURL}
						/>
					))}
				</ImageGallery>
				{/* <Button /> */}
				{this.state.isModalOpen && (
					<Modal
						onESCPress={this.onESCPress}
						closeModal={this.closeModal}
						currentModalImg={this.state.currentModalImg}
					/>
				)}
			</>
		);
	}
}
