import React from 'react';

const TetrisVideos = () => {
  const handleClick = (e) => {
    const url = e.target.id;
    const iframe = document.querySelector('iframe');
    iframe.src = url;
    document.querySelector('.video-links .active').classList.remove('active');
    e.target.classList.add('active');
  };
  return (
    <div className="card-body-section">
      <h3>Live Demos</h3>
      <div className="videos-wrapper">
        <div className="videos">
          <div className="video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/_fMr1luxYGk"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen={true}
            ></iframe>
          </div>
          <div className="video-links">
            <ul>
              <li>
                <div
                  onClick={handleClick}
                  id="https://www.youtube.com/embed/4PgiWbYsn9Q"
                >
                  Part 1: Game Loop and State
                </div>
              </li>
              <li>
                <div
                  onClick={handleClick}
                  id="https://www.youtube.com/embed/VsL3qCBmyOo"
                >
                  Part 2: Game Board
                </div>
              </li>
              <li>
                <div
                  onClick={handleClick}
                  id="https://www.youtube.com/embed/XOavgEvXimQ"
                >
                  Part 3: Drawing our First Piece
                </div>
              </li>
              <li>
                <div
                  onClick={handleClick}
                  id="https://www.youtube.com/embed/WYfzHJtNPiI"
                >
                  Part 4: Stacking our Pieces
                </div>
              </li>
              <li>
                <div
                  onClick={handleClick}
                  id="https://www.youtube.com/embed/jirmL-KV-l0"
                >
                  Part 5: Event Listeners and New Pieces
                </div>
              </li>
              <li>
                <div
                  onClick={handleClick}
                  id="https://www.youtube.com/embed/P6vrpUdnZvM"
                >
                  Part 6: Wall Detection & Lose Condition
                </div>
              </li>
              <li>
                <div
                  id="https://www.youtube.com/embed/_fMr1luxYGk"
                  className="active"
                  onClick={handleClick}
                >
                  Part 7: Tetris Minmum Viable Product
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TetrisVideos;
