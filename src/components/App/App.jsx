import { Component } from "react";

import Searchbar from "../Searchbar/Searchbar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
// import Loader from '../Loader/Loader'
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

export default class App extends Component {
	state = {
		images: [],
		isModalOpen: false,
		currentModalImg: {},
		searchQuery: "",
	};

	onESCPress = e => {
		if (e.code === "Escape") {
			return this.setState({ isModalOpen: false });
		}
	};

	onFetchPhotos = (photos, query) => {
		this.setState({ images: [...photos], searchQuery: `${query}` });
		// this.setState(state => {
		// 	return { images: [...state.images, ...photos], searchQuery: `${query}` };
		// });
	};

	closeModal = e => {
		const { currentTarget, target } = e;

		if (currentTarget === target) {
			this.setState({ isModalOpen: false });
		}
	};

	onImgClick = e => {
		const { images } = this.state;

		const currentImg = images.find(image => image.id === Number(e.target.id));
		this.setState({ currentModalImg: currentImg, isModalOpen: true });
	};

	render() {
		const {
			state: { images, isModalOpen, currentModalImg, searchQuery },
			onFetchPhotos,
			onImgClick,
			onESCPress,
			closeModal,
		} = this;

		return (
			<>
				<Searchbar onSubmit={onFetchPhotos}></Searchbar>

				<ImageGallery>
					{images.map(({ tags, webformatURL, largeImageURL, id }) => (
						<ImageGalleryItem
							onClick={onImgClick}
							key={id}
							id={id}
							webURL={webformatURL}
							tags={tags}
							large={largeImageURL}
						/>
					))}
				</ImageGallery>

				{searchQuery && <Button />}

				{isModalOpen && <Modal onESCPress={onESCPress} closeModal={closeModal} currentModalImg={currentModalImg} />}
			</>
		);
	}
}
