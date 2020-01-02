import React, {ChangeEvent} from 'react';
import './App.css';
import GoogleMap from "./presenter/GoogleMap";
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
}

export default class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            stores: [],
            filterStores: [],
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

    filter = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.value === '') {
            this.setState({
                filterStores: this.state.stores
            });
            return;
        }

        let filteredList = this.state.stores.filter(store => {
            return store.name.search(event.target.value) !== -1;
        });

        this.setState({
            filterStores: filteredList
        })
    }

    render() {
        return (
            <div className="App">
                <GoogleMap stores={this.state.filterStores}/>
                <input type='text' onChange={this.filter} />
                <StoreCardList stores={this.state.filterStores}/>
            </div>
        );
    }
};
