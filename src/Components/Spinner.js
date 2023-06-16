import React from 'react';
import spinner from './loading.gif';

export default function Spinner() {
    return (
        <div className="text-center">
            <img src={spinner} alt="loading"></img>
        </div>
    )
}
