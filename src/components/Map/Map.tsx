import React, {useContext, useEffect, useState} from "react";
import './Map.css'
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {SearchContext} from "../contexts/search.context";
import {SimpleAdEntity} from 'types';

import 'leaflet/dist/leaflet.css';
import '../../utils/fix-map-icon';
import {SingleAd} from "./SingleAd";

export const Map = () => {

    const {search} = useContext(SearchContext);
    const [ads, setAds] = useState<SimpleAdEntity[]>([])

    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3001/ad/search/${search}`);
            const data = await res.json();
            setAds(data);
        })()
    }, [search]);

    return (
        <div className="map">

            <MapContainer center={[59.9554869,10.6472646]} zoom={15}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    ads.map(ad => (
                        <Marker key={ad.id} position={[ad.lat, ad.lon]}>
                            <Popup>
                                <SingleAd id={ad.id}/>
                            </Popup>
                        </Marker>
                    ))
                }
            </MapContainer>

        </div>
    )
}