import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Gallery.css'; // Assuming you have a CSS file for styling

const Gallery = () => {
    const [photoData, setPostData] = useState([]);

    useEffect(() => {
        const URL = "https://picsum.photos/v2/list";
        axios.get(URL)
            .then(res => {
                console.log(res.data);
                setPostData(res.data.slice(0, 16)); // Limiting to 16 photos for a 4x4 grid
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h2>Photo Gallery</h2>
            <div className="photo-grid">
                {photoData.map(photo => (
                    <div key={photo.id} className="photo-card">
                        <img src={photo.download_url}  />
                        <h3>{photo.author}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Gallery;