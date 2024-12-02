"use client";

import L from "leaflet";
import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

// https://www.google.com/maps/place/Jl.+Rowosari+II,+Wonosari,+Kec.+Ngaliyan,+Kota+Semarang,+Jawa+Tengah+50244/@-6.9737171,110.291647,17z/data=!4m15!1m8!3m7!1s0x2e705fd08e012d3f:0xb07c0b58ac9ba793!2sJl.+Rowosari+II,+Wonosari,+Kec.+Ngaliyan,+Kota+Semarang,+Jawa+Tengah+50244!3b1!8m2!3d-6.9737171!4d110.2942219!16s%2Fg%2F11bwg065w2!3m5!1s0x2e705fd08e012d3f:0xb07c0b58ac9ba793!8m2!3d-6.9737171!4d110.2942219!16s%2Fg%2F11bwg065w2?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D
const lat = -6.9737171;
const lng = 110.291647;
const zoom = 14;

export default function Map() {
  const mapbox_style_id = process.env.NEXT_PUBLIC_MAPBOX_STYLE_ID;
  const mapbox_access_token = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
  const mapElement = useRef(null);
  const coordinate = [lat, lng];

  useEffect(() => {
    const m = mapElement?.current;

    if (!m || typeof window === "undefined" || typeof document === "undefined")
      return;

    const map = L.map(m, { attributionControl: false }).setView(
      coordinate,
      zoom,
    );

    L.tileLayer(
      `https://api.mapbox.com/styles/v1/${mapbox_style_id}/tiles/{z}/{x}/{y}?access_token=${mapbox_access_token}`,
      {
        maxZoom: 18,
        tileSize: 512,
        zoomOffset: -1,
      },
    ).addTo(map);

    L.marker(coordinate).addTo(map).openPopup();

    return () => {
      map.remove();
    };
  });

  return (
    <div ref={mapElement} style={{ height: "200px", width: "100%" }}></div>
  );
}
