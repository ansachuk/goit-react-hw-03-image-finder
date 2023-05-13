import axios from "axios";

//?fields=name,capital,population,flags,languages`

const AUTH_KEY = "34948813-296850008c19dad8d09f83fef";
axios.defaults.baseURL = "https://pixabay.com/api/";

const fetchPhotos = async (query, page = 1) => {
	try {
		const res = await axios.get(
			`/?key=${AUTH_KEY}&q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=12&fields=id,webformatURL,largeImageURL`,
		);

		return res.data.hits;
	} catch (error) {
		console.log(error.message);
	}
};

export default fetchPhotos;
