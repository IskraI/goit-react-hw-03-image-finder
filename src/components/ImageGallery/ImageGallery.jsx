import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ dataGallery }) => {
  return (
    <ul className={css.image__gallery}>
      {dataGallery.map(el => (
        <ImageGalleryItem key={el.id} item={el} />
      ))}
    </ul>
  );
};
export default ImageGallery;

ImageGallery.propTypes = {
  dataGallery: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ).isRequired,
};
