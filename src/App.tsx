import React from 'react';
import GoogleMapReact from 'google-map-react';
import './App.css';

import GetStores from './usecases/getStores';
import StoreRepository from './infrastractures/storeRepository';

console.log((new GetStores(new StoreRepository())).execute());

const App: React.FC = () => {
  return (
    <div className="App">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_KEY }}
        defaultCenter={{ lat: 35.695491, lng: 139.763253 }}
        defaultZoom={17}
      />
    </div>
  );
}

export default App;
