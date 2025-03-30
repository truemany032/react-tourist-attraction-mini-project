import React from 'react';
import './TouristAttractionItem.css';
import Icon from '@mdi/react';
import { mdiShare } from '@mdi/js';

const TouristAttractionItem = ({ attraction, onTagClick, onCopyLink }) => {
  const { title, description, photos, url, tags } = attraction;

  return (
    <div className="attraction-item">
      <div className="attraction-image">
        {photos && photos.length > 0 && <img src={photos[0]} alt={title} />}
      </div>
      <div className="attraction-content">
        <h3 className="attraction-title">
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h3>
        <p className="attraction-description">
          {description.length > 100 ? `${description.slice(0, 100)}...` : description}
        </p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="attraction-read-more">
          อ่านต่อ
        </a>
        <div className="attraction-tags">
          <span className="tags-label">หมวด</span>
          {tags &&
            tags.map((tag, eid) => (
              <span
                key={eid}
                className="tag"
                onClick={() => onTagClick(tag)}
              >
                {tag}
              </span>
            ))}
        </div>
        <div className="additional-images">
          {photos && photos[1] && <img src={photos[1]} alt={`${title} - 1`} />}
          {photos && photos[2] && <img src={photos[2]} alt={`${title} - 2`} />}
          {photos && photos[3] && <img src={photos[3]} alt={`${title} - 3`} />}
        </div>
        <button
          className="copy-link-button"
          onClick={() => onCopyLink(url)}
          aria-label="Copy link"
        >
          <Icon path={mdiShare} size={1} />
        </button>
      </div>
    </div>
  );
};

export default TouristAttractionItem;