import React, { useState, useCallback } from "react";

import styled from "styled-components";

import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

function PhotoGallery(props) {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <PhotoGalleryDiv>
      <Gallery photos={props.photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={props.photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </PhotoGalleryDiv>
  );
}

export default PhotoGallery;

const PhotoGalleryDiv = styled.div`
  margin: 0 40px 0 40px;
`;
