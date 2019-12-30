import StoreRepositoryInterface from '../domain/repositories/storeRepositoryInterface'
import Store from '../domain/valueobjects/store'
import axios from 'axios'

export default class StoreRepository implements StoreRepositoryInterface {
    async findAll() {
        return await axios.get<Store[]>('http://t-gourmet-map.herokuapp.com/api/stores');
    }
}
