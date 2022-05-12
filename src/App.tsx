import React from 'react';
import './App.css';
export const App = () => {

  return (
    <>
        <header>
            <h1>
                <strong>Map</strong> App
            </h1>
            <button>Dodaj ogłoszenia</button>
            <div className="search">
                <input type="text"/> <button>Szukaj</button>
            </div>
        </header>
        <div className="map"></div>
    </>
  );
}


