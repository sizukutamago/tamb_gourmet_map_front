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
                            <li key={index} className="card">
                                <div className="box">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxBmpbAOySU7C1IHHb-oMcRxjm8I1P2IKXNq1t2Xa9KiboZIiP"
                                        className="image" alt='storeimage'/>
                                    <div>
                                        <p className="title">{store.name}</p>
                                        <p className="content">{store.comment}</p>
                                    </div>
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
};

export default StoreCardList;
