import React from 'react';
import TouristAttractionItem from './TouristAttractionItem';

const TouristAttractionList = ({ attractions, onTagClick, onCopyLink }) => {
  return (
    <div>
      {attractions.map((attraction) => (
        <TouristAttractionItem
          key={attraction.eid}
          attraction={attraction}
          onTagClick={onTagClick}
          onCopyLink={onCopyLink}
        />
      ))}
    </div>
  );
};

export default TouristAttractionList;

