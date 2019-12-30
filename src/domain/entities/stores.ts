import Store from '../valueobjects/store';

export default class Stores {

    private stores: Array<Store>;

    constructor() {
        this.stores = new Array<Store>();
    }

    addStore(store: Store): void {
        this.stores.push(store);
    }

    getStores(): Array<Store> {
        return this.stores;
    }
}
