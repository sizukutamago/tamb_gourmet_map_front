import StoreRepositoryInterface from "../domain/repositories/storeRepositoryInterface";
import Stores from "../domain/entities/stores";

export default class GetStores {
    private storeRepository: StoreRepositoryInterface;

    constructor(storeRepositoryInterface: StoreRepositoryInterface) {
        this.storeRepository = storeRepositoryInterface;
    }

    execute(): Stores {
        return this.storeRepository.getStores();
    }
}
