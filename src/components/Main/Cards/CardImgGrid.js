import React from 'react';

const CardImgGrid = ({ imgFolder, images, icons }) => {
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
                  background: `url('/public/images/${imgFolder}/${
                    icons ? icons[index] : 'icon.png'
                  }')`,
                  backgroundSize: 'cover',
                }}
              ></div>
              <img
                src={`/public/images/${imgFolder}/${image}`}
                alt={`screenshot ${index + 1} of the project`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardImgGrid;
