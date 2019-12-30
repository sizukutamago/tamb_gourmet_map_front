import React from "react";
import Store from "../domain/valueobjects/store";
import GetStores from "../usecases/getStores";
import StoreRepository from "../infrastractures/storeRepository";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import {AxiosResponse} from "axios";

interface Props {}

interface State {
    stores: Store[],
}


class GoogleMap extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            stores: []
        };

        (new GetStores(new StoreRepository())).execute().then((stores: AxiosResponse<Store[]>) => {
            let stateStores: Store[] = this.state.stores.slice();
            // eslint-disable-next-line
            stores.data.map((store: Store) => {
                stateStores.push(store);
            });

            this.setState({
                stores: stateStores,
            });
        });
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
            this.state.stores.map((store: Store, index: number) => {
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
