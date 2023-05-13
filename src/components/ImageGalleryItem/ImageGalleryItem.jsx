import css from "./ImageGalleryItem.module.css";

export default function ImageGalleryItem({ id, webURL, tags, large, onClick }) {
	return (
		<li onClick={onClick} className={css.item}>
			<img id={id} src={webURL} alt={tags} className={css.image} />
		</li>
	);
}
