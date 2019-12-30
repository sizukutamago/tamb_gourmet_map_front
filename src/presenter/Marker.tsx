import React from 'react';
import './Marker.css';

interface Props {
    storeName: string,
    lat: number,
    lng: number
}

const Marker: React.FC<Props> = props => {
    return (
      <div>
          <div className="pin bounce" style={{ color: 'blue'}} />
          <div className="pulse" />
          <p style={{ width: '100px', marginLeft: '-40px', marginTop: '20px', fontWeight: "bold", position: 'relative', zIndex: 10 }}>{props.storeName}</p>
      </div>
    );
};

export default Marker;
