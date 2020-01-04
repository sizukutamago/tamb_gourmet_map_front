import React, {ChangeEvent} from 'react';
import './App.css';
import GoogleMap, {Center} from "./presenter/GoogleMap";
import StoreCardList from "./presenter/StoreCardList";
import GetStores from "./usecases/getStores";
import StoreRepository from "./infrastractures/storeRepository";
import {AxiosResponse} from "axios";
import Store from "./domain/valueobjects/store";

interface Props {
}

interface State {
    stores: Store[],
    filterStores: Store[],
    center: Center,
}

export default class App extends React.Component<Props, State> {

    readonly tokyoOfficeLocation: Center = {lat: 35.695491, lng: 139.763253};

    readonly osakaOfficeLocation: Center = {lat: 34.7016075, lng: 135.515056};

    constructor(props: Props) {
        super(props);

        this.state = {
            stores: [],
            filterStores: [],
            center: this.tokyoOfficeLocation,
        };

        (new GetStores(new StoreRepository())).execute().then((stores: AxiosResponse<Store[]>) => {
            let stateStores: Store[] = this.state.stores.slice();
            // eslint-disable-next-line
            stores.data.map((store: Store) => {
                stateStores.push(store);
            });

            this.setState({
                stores: stateStores,
                filterStores: stateStores,
            });
        });
    }

    filter = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.value === '') {
            this.setState({
                filterStores: this.state.stores
            });
            return;
        }

        let filteredList = this.state.stores.filter(store => {
            return store.name.search(event.target.value) !== -1 || store.genre.search(event.target.value) !== -1 || store.comment.search(event.target.value) !== -1;
        });

        this.setState({
            filterStores: filteredList
        })
    };

    render() {
        return (
            <div className="App">
                <GoogleMap stores={this.state.filterStores} center={this.state.center}/>
                <div className="switch" onClick={() => { this.setState({center: this.osakaOfficeLocation}) }}>
                    大阪
                </div>
                <input type='text' placeholder="お店検索" onChange={this.filter}/>
                <StoreCardList stores={this.state.filterStores}/>
            </div>
        );
    }
};
