import Stores from '../entities/stores'

export default interface StoreRepositoryInterface {
    getStores(): Stores;
}
