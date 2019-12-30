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

        stores.addStore({
            name: '優しいお弁当',
            lat: 35.69386382435,
            lng: 139.76458582216,
            genre: '和食',
            comment: 'リンクは古川さんが購入したお弁当の写真です'
        });

        return stores;
    }
}
