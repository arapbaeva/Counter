import React from 'react';

type MonitorPropsType = {
    tablo: number
}

export const Monitor = (props: MonitorPropsType) => {
    return (
        <h1>{props.tablo}</h1>
    );
};

