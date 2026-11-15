import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

const LOCAL_PHOTOS = [
  { id: "1", author: "Vadim Sherbakov", download_url: "/assets/vadim-sherbakov.png", likes: 0 },
  { id: "2", author: "Marcelo Cid", download_url: "/assets/marcelo-cid.jpg", likes: 0 },
  { id: "3", author: "Florian Klauer", download_url: "/assets/florian-klauer.jpg", likes: 0 },
  { id: "4", author: "Skyler Gerald", download_url: "/assets/skyler-gerald.jpg", likes: 0 },
  { id: "5", author: "Alexander Shustov", download_url: "/assets/alexander-shustov.jpg", likes: 0 },
  { id: "6", author: "Justin Leibow", download_url: "/assets/justin-leibow.jpg", likes: 0 },
  { id: "7", author: "Daniel Genser", download_url: "/assets/daniel-genser.jpg", likes: 0 },
];

function App() {
  const [photos, setPhotos] = useState(LOCAL_PHOTOS);

  const handleLike = (id) => {
    setPhotos((prevPhotos) =>
      prevPhotos.map((photo) =>
        photo.id === id ? { ...photo, likes: photo.likes + 1 } : photo
      )
    );
  };

  return (
    <div className="gallery-container">
      <header className="gallery-header">
        <h1>Photo gallery</h1>
      </header>

      <div className="feed-list">
        {photos.map((photo) => (
          <div key={photo.id} className="photo-row">
            <div className="photo-wrapper">
              <img src={photo.download_url} alt={`By ${photo.author}`} />
            </div>
            <div className="photo-info">
              <span className="author-text">Author: {photo.author}</span>
              <button className="like-btn" onClick={() => handleLike(photo.id)} aria-label="Like photo">
                <FontAwesomeIcon icon={faThumbsUp} />
              </button>
              <span className="like-count">{photo.likes}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;