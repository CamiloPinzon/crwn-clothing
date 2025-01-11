import CategoryItem from "../category-item/category-item.component";
import categories from "../../data/categories.json";

import "./directory.styles.scss";

const Directory = () => {
	return (
		<div className="directory-container">
			{categories.map(({ id, title, imageUrl }) => (
				<CategoryItem key={id} category={{ title, imageUrl }} />
			))}
		</div>
	);
};

export default Directory;
