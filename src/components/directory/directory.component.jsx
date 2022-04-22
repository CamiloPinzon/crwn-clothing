import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';
import CATEGORIES_DATA from '../../assets/data/categories.data.json';

const Directory = () => {
    return(
        <DirectoryContainer>
      {
        CATEGORIES_DATA.map((category) => (
          <DirectoryItem key={category.id} category={category} />
        ))
      }
      
    </DirectoryContainer>
    )
}

export default Directory