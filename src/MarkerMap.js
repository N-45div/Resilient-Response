import React, { useState, useRef } from "react";
import { TileLayer, Marker, Popup } from "react-leaflet";
import { MapContainer as Map } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import osm from "./osm-providers";

import cities from "./cities.json";

const markerIcon = new L.Icon({
  iconUrl: require("./assets/marker.png"),
  iconSize: [40, 40],
  iconAnchor: [17, 46], //[left/right, top/bottom]
  popupAnchor: [0, -46], //[left/right, top/bottom]
});

const MarkersMap = () => {
  const [center, setCenter] = useState({ lat: 13.084622, lng: 80.248357 });
  const ZOOM_LEVEL = 9;
  const mapRef = useRef();

  return (
    <>
      <div className="row mb-3">
        <div className="col text-center">
          <h2>Emergency Shelters for People Safety</h2>
          <p>Nearest Disaster Shelters in case of Emergency</p>
          <div className="col">
            <Map center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
              <TileLayer
                url={osm.maptiler.url}
                attribution={osm.maptiler.attribution}
              />

              {cities.map((city, idx) => (
                <Marker
                  position={[city.lat, city.lng]}
                  icon={markerIcon}
                  key={idx}
                >
                  <Popup>
                    <b>
                      {city.city}, {city.country}
                    </b>
                  </Popup>
                </Marker>
              ))}
            </Map>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarkersMap;
