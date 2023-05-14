import React, { Component } from "react";
// import PropTypes from 'prop-types';

import fetchPhotos from "../../services/fetchPhotos";
import css from "./Searchbar.module.css";

export default class Searchbar extends Component {
	static propTypes = {
		//  prop: PropTypes,
	};

	state = {
		query: "",
	};

	onInputChange = e => {
		this.setState({ query: e.currentTarget.value });
	};

	onSubmit = async e => {
		e.preventDefault();

		const { state, props } = this;

		const images = await fetchPhotos(state.query);

		props.onSubmit(images, state.query);

		this.setState({
			query: "",
		});
	};

	render() {
		return (
			<header className={css.searchbar}>
				<form className={css.form} onSubmit={this.onSubmit}>
					<button type="submit" className={css.button}>
						<span className={css.label}>Search</span>
					</button>

					<input
						onChange={this.onInputChange}
						value={this.state.query}
						className={css.input}
						name="query"
						type="text"
						autoComplete="off"
						autoFocus
						placeholder="Search images and photos"
					/>
				</form>
			</header>
		);
	}
}
