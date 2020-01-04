import React from "react";
import Store from "../domain/valueobjects/store";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import './GoogleMap.css';

export interface Center {
    lat: number,
    lng: number,
}

interface Props {
    stores: Store[],
    center: Center,
}

const GoogleMap: React.FC<Props> = props => {
    return (
        <div className='Map'>
            <GoogleMapReact
                style={{width: '100%'}}
                bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_MAP_KEY}}
                center={props.center}
                defaultZoom={17}
            >
                {
                    props.stores.map((store: Store, index: number) => {
                        return (
                            <Marker
                                key={index}
                                lat={store.lat}
                                lng={store.lng}
                                storeName={store.name}
                            />
                        )
                    })
                }
            </GoogleMapReact>
        </div>
    )
};

export default GoogleMap;
