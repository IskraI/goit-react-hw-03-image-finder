// import PropTypes from 'prop-types';
// import { Component } from 'react';

import css from './ImageGalleryItem.module.css';
const ImageGalleryItem = ({ item }) => {
  const { webformatURL } = item;

  // console.log('item', item);
  // console.log('webformatURL', webformatURL);
  return (
    <li className={css.galleryItem}>
      <img
        className={css.galleryItemImg}
        src={webformatURL}
        alt="{webformatURL}"
        // onClick={this.handleModalOpen}
      />
    </li>
  );
};
export default ImageGalleryItem;

// export class ImageGalleryItem extends Component {
//   static propTypes = {
//     imageData: PropTypes.shape({
//       webformatURL: PropTypes.string.isRequired,
//       tags: PropTypes.string.isRequired,
//       largeImageURL: PropTypes.string.isRequired,
//     }).isRequired,
//   };

//   state = {
//     isModalOpen: false,
//   };

//   handleModalOpen = () => {
//     this.setState({ isModalOpen: true });
//   };

//   handleModalClose = () => {
//     this.setState({ isModalOpen: false });
//   };

//   render() {
//     const { webformatURL, tags, largeImageURL } = this.props.imageData;
//     const { isModalOpen } = this.state;

//     return (
//       <>
//         <GalleryCard>
//           <GalleryImage
//             src={webformatURL}
//             alt={tags}
//             onClick={this.handleModalOpen}
//           />
//         </GalleryCard>

//         {isModalOpen && (
//           <Modal
//             largeImageURL={largeImageURL}
//             tags={tags}
//             onClose={this.handleModalClose}
//           />
//         )}
//       </>
//     );
//   }
// }
