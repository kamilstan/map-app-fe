import React from 'react';
import './Header.css'
import {Btn} from "../common/Btn";

export const Header = () => (
    <header>
        <h1>
            <strong>Map</strong> App
        </h1>
        <Btn text='Dodaj ogłoszenie'/>
        <div className="search">
            <input type="text"/> <Btn text='Szukaj'/>
        </div>
    </header>
)