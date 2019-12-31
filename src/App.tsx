import React from 'react';
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
}

export default class App extends React.Component<Props, State> {
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

    render() {
        return (
            <div className="App">
                <GoogleMap stores={this.state.stores}/>
                <StoreCardList stores={this.state.stores}/>
            </div>
        );
    }
};
