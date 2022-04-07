import Directory from "../../components/directory/directory.component";

import CATEGORIES_DATA from '../../assets/data/categories.data.json';

const Home = () => {
      return <Directory categories={CATEGORIES_DATA} />;
}

export default Home;