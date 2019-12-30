import React from "react";
import Store from "../domain/valueobjects/store";
import Stores from "../domain/entities/stores";
import GetStores from "../usecases/getStores";
import StoreRepository from "../infrastractures/storeRepository";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

interface Props {}


class GoogleMap extends React.Component<Props> {
    private stores: Stores;

    constructor(props: Props) {
        super(props);

        this.stores = (new GetStores(new StoreRepository())).execute();
    }

    render () {
        return (
            <GoogleMapReact
                bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_MAP_KEY}}
                defaultCenter={{lat: 35.695491, lng: 139.763253}}
                defaultZoom={17}
            >
                {this.renderMarkers()}
            </GoogleMapReact>
        );
    }

    renderMarkers() {
        return (
            this.stores.getStores().map((store: Store, index: number) => {
                return (
                    <Marker
                        key={index}
                        lat={store.lat}
                        lng={store.lng}
                        storeName={store.name}
                    />
                )
            })
        );
    }
}

export default GoogleMap;
