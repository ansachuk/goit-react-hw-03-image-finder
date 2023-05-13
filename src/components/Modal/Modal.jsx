import css from "./Modal.module.css";

// export default function Modal(, c) {

// 	return (

// 	);
// }

import React, { Component } from "react";

export default class Modal extends Component {
	componentDidMount = () => {
		window.addEventListener("keydown", this.props.onESCPress);
	};

	componentWillUnmount = () => {
		window.removeEventListener("keydown", this.props.onESCPress);
	};

	render() {
		const {
			currentModalImg: { largeImageURL, tags },
			closeModal,
		} = this.props;

		return (
			<div onClick={closeModal} className={css.Overlay}>
				<div className={css.Modal}>
					<img src={largeImageURL} alt={tags} />
				</div>
			</div>
		);
	}
}
