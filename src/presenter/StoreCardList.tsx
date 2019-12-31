import React from 'react';
import Store from "../domain/valueobjects/store";
import './StoreCardList.css';

interface Props {
    stores: Store[]
}

const StoreCardList: React.FC<Props> = props => {
    return (
        <div className='StoreCardList'>
            <ul>
                {
                    props.stores.map((store: Store, index: number) => {
                        return (
                            <li key={index}>{store.name}</li>
                            );
                    })
                }
            </ul>
        </div>
    );
};

export default StoreCardList;
