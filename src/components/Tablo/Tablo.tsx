import React, {useState} from 'react';
import s from './Tablo.module.css'
import {Monitor} from "../Monitor/Monitor";
import {CustomButton} from "../CustomButton";

export const Tablo = () => {
    const minValue = 0
    const maxValue = 5
    const [tablo, setTablo] = useState(minValue)

    const increment = () => setTablo(tablo + 1)
    const decrement = () => setTablo(tablo - 1)
    const reset = () => setTablo(minValue)

    return (<>
            <div className={s.wrapper}>
                <div className={s.tablo}>
                    <Monitor tablo={tablo}/>
                </div>
                <div className={s.button}>
                    <CustomButton title={'Inc'} disabled={tablo === 5} click={increment}/>
                    <CustomButton title={'Dec'} disabled={tablo === 0} click={decrement}/>
                    <CustomButton title={'Reset'} disabled={tablo === 0} click={reset}/>
                </div>
            </div>
        </>
    );
};

