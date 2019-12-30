import StoreRepositoryInterface from "../domain/repositories/storeRepositoryInterface";

export default class GetStores {
    private storeRepository: StoreRepositoryInterface;

    constructor(storeRepositoryInterface: StoreRepositoryInterface) {
        this.storeRepository = storeRepositoryInterface;
    }

    execute() {
        return this.storeRepository.findAll();
    }
}
