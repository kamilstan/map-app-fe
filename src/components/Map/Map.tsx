import React from "react";
import './Map.css'
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import '../../utils/fix-map-icon';

export const Map = () => {
    return (
        <div className="map">
            <MapContainer center={[59.9554869,10.6472646]} zoom={15}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[59.9554869,10.6472646]}>
                    <Popup>
                       <h2>Las krzyży</h2>
                       <p>To jest super las!</p>
                    </Popup>
                </Marker>
            </MapContainer>

        </div>
    )
}