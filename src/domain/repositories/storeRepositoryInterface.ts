import Store from "../valueobjects/store";
import {AxiosResponse} from "axios";

export default interface StoreRepositoryInterface {
    findAll(): Promise<AxiosResponse<Store[]>>;
}
