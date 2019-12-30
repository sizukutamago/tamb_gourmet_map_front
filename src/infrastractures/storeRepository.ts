import StoreRepositoryInterface from '../domain/repositories/storeRepositoryInterface'
import Stores from '../domain/entities/stores'

export default class StoreRepository implements StoreRepositoryInterface {
    getStores(): Stores {
        const stores = new Stores();
        stores.addStore({
            name: 'マジカレー',
            lat: 35.696207128098,
            lng: 139.76133848396,
            genre: 'カレー',
            comment: 'ハンバーグカレー食べたいときはここ。'
        });

        return stores;
    }
}
