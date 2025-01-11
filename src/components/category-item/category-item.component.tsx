import "./category-item.styles.scss";
import { CategoryItemProps } from "./types";

const CategoryItem = ({ category }: CategoryItemProps) => {
	const { title, imageUrl } = category;

	return (
		<div className="category-container">
			<div
				className="background-image"
				style={{ backgroundImage: `url(${imageUrl})` }}
			/>
			<div className="category-body-container">
				<h2>{title}</h2>
				<p>Shop Now</p>
			</div>
		</div>
	);
};

export default CategoryItem;
