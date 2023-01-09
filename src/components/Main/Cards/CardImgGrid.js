import React from 'react';

const CardImgGrid = ({ overlays, images, icons }) => {
  return (
    <div className="card-body-section">
      <h3>Screenshots</h3>
      <div className="grid">
        {images.map((image, index) => {
          return (
            <div className="item" key={image}>
              <div
                className="overlay"
                style={{
                  background: `url(${
                    overlays.length > 1 ? overlays[index] : overlays[0]
                  })`,
                  backgroundSize: 'cover',
                }}
              ></div>
              <img src={image} alt={`screenshot ${index + 1} of the project`} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardImgGrid;
