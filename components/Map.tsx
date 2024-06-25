"use client";

import {
  LayerGroup,
  LayersControl,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
} from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";
import "leaflet.fullscreen/Control.Fullscreen.css"; // Import CSS
import "leaflet.fullscreen";
import { useState, useEffect } from "react";
import { ShopsTable } from "@/components/ShopsTable";

// Icons
const warehouseIcon = new Icon({
  iconUrl: "https://img.icons8.com/color/48/garage-closed.png",
  iconSize: [35, 35],
});

const warehouseIconHover = new Icon({
  iconUrl: "https://img.icons8.com/color/48/garage-closed.png",
  iconSize: [45, 45],
});

const employeeIcon = new Icon({
  iconUrl: "https://img.icons8.com/color/48/collaborator-male--v1.png",
  iconSize: [35, 35],
});

const employeeIconHover = new Icon({
  iconUrl: "https://img.icons8.com/color/48/collaborator-male--v1.png",
  iconSize: [45, 45],
});

const shopIcon = new Icon({
  iconUrl: "https://img.icons8.com/plasticine/100/shop.png",
  iconSize: [35, 35],
});

const shopIconHover = new Icon({
  iconUrl: "https://img.icons8.com/plasticine/100/shop.png",
  iconSize: [45, 45],
});

interface MarkerData {
  id: string;
  longitude: number;
  latitude: number;
  name?: string;
  warehouse?: string;
  shop?: string;
  first_name?: string;
  last_name?: string;
}

function FullscreenControl({
  onFullscreenChange,
}: {
  onFullscreenChange: (isFullscreen: boolean) => void;
}) {
  const map = useMap();

  useEffect(() => {
    const fullscreenDiv = window.document.createElement("div");
    fullscreenDiv.className = "leaflet-control leaflet-bar";
    fullscreenDiv.style.backgroundColor = "white";
    fullscreenDiv.style.padding = "5px";
    fullscreenDiv.style.cursor = "pointer";
    fullscreenDiv.title = "Toggle Fullscreen";
    fullscreenDiv.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-fullscreen" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1 1.5a.5.5 0 0 1 .5-.5H5a.5.5 0 0 1 0 1H2.707L6.854 6.646a.5.5 0 0 1-.708.708L2 2.707V5.5a.5.5 0 0 1-1 0V1.5zM11 .5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V2.707L7.146 7.854a.5.5 0 1 1-.708-.708L10.293 2H8a.5.5 0 0 1 0-1h3.5a.5.5 0 0 1 .5.5zM15 10.5a.5.5 0 0 1-.5.5H11a.5.5 0 0 1 0-1h2.293l-4.147-4.146a.5.5 0 1 1 .708-.708L14 9.293V7a.5.5 0 0 1 1 0v3.5zM5 11a.5.5 0 0 1 .5-.5h2.293l-4.147-4.146a.5.5 0 1 1 .708-.708L9 9.293V7a.5.5 0 0 1 1 0v3.5a.5.5 0 0 1-.5.5H6.5a.5.5 0 0 1-.5-.5z"/>
    </svg>`;

    const handleFullscreenToggle = () => {
      if (!document.fullscreenElement) {
        map
          .getContainer()
          .requestFullscreen()
          .catch((err: any) => {
            alert(
              `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
            );
          });
        onFullscreenChange(true);
      } else {
        document.exitFullscreen();
        onFullscreenChange(false);
      }
    };

    fullscreenDiv.addEventListener("click", handleFullscreenToggle);
    map
      .getContainer()
      .querySelector(".leaflet-control-container .leaflet-bottom.leaflet-left")
      ?.appendChild(fullscreenDiv);

    return () => {
      fullscreenDiv.removeEventListener("click", handleFullscreenToggle);
      map
        .getContainer()
        .querySelector(
          ".leaflet-control-container .leaflet-bottom.leaflet-left"
        )
        ?.removeChild(fullscreenDiv);
    };
  }, [map, onFullscreenChange]);

  return null;
}

export default function Map({
  warehouses,
  shops,
  employees,
}: {
  warehouses: MarkerData[];
  shops: MarkerData[];
  employees: MarkerData[];
}) {
  const [hoveredMarker, setHoveredMarker] = useState<{
    [key: string]: boolean;
  }>({});
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleMouseOver = (id: string) => {
    setHoveredMarker((prevState) => ({ ...prevState, [id]: true }));
  };

  const handleMouseOut = (id: string) => {
    setHoveredMarker((prevState) => ({ ...prevState, [id]: false }));
  };

  const handleClick = (id: string) => {
    setSelectedId(id);
  };

  return (
    <div style={{ position: "relative" }}>
      <MapContainer
        center={[52.2297, 21.0122]}
        zoom={6}
        scrollWheelZoom={true}
        style={{ height: "465px", width: "100%" }}
      >
        <FullscreenControl onFullscreenChange={setIsFullscreen} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="OSM">
            <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Google">
            <TileLayer url="http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}" />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Google Satellite">
            <TileLayer url="http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}" />
          </LayersControl.BaseLayer>
          <LayersControl.Overlay name="Magazyny">
            <LayerGroup>
              {warehouses.map((warehouse) => {
                const warehouseId = `warehouse-${warehouse.id}`;
                return (
                  <Marker
                    position={[warehouse.longitude, warehouse.latitude]}
                    key={warehouseId}
                    icon={
                      hoveredMarker[warehouseId]
                        ? warehouseIconHover
                        : warehouseIcon
                    }
                  >
                    <Popup>
                      <div style={{ textAlign: "center", padding: "10px" }}>
                        <h3
                          style={{
                            margin: "0",
                            color: "#007BFF",
                            fontWeight: "bold",
                            fontSize: "18px",
                          }}
                        >
                          {warehouse.name}
                        </h3>
                      </div>
                    </Popup>
                  </Marker>
                );
              })}
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Sklepy">
            <LayerGroup>
              {shops.map((shop) => {
                const shopId = `shop-${shop.id}`;
                return (
                  <Marker
                    position={[shop.longitude, shop.latitude]}
                    key={shopId}
                    icon={hoveredMarker[shopId] ? shopIconHover : shopIcon}
                    eventHandlers={{
                      mouseover: () => handleMouseOver(shopId),
                      mouseout: () => handleMouseOut(shopId),
                      click: () => handleClick(shop.id),
                    }}
                  >
                    <Popup>
                      <div style={{ textAlign: "center", padding: "10px" }}>
                        <h3
                          style={{
                            margin: "0",
                            color: "#007BFF",
                            fontWeight: "bold",
                            fontSize: "18px",
                          }}
                        >
                          {shop.name}
                        </h3>
                        <p>
                          <strong>Dostawca:</strong> {shop.warehouse}
                        </p>
                      </div>
                    </Popup>
                  </Marker>
                );
              })}
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Pracownicy">
            <LayerGroup>
              {employees.map((employee) => {
                const employeeId = `employee-${employee.id}`;
                return (
                  <Marker
                    position={[employee.longitude, employee.latitude]}
                    key={employeeId}
                    icon={
                      hoveredMarker[employeeId]
                        ? employeeIconHover
                        : employeeIcon
                    }
                    eventHandlers={{
                      mouseover: () => handleMouseOver(employeeId),
                      mouseout: () => handleMouseOut(employeeId),
                      click: () => handleClick(employee.id),
                    }}
                  >
                    <Popup>
                      <div style={{ textAlign: "center", padding: "10px" }}>
                        <h3
                          style={{
                            margin: "0",
                            color: "#007BFF",
                            fontWeight: "bold",
                            fontSize: "18px",
                          }}
                        >
                          {employee.first_name} {employee.last_name}
                        </h3>
                        <p>
                          <strong>Pracownik oddziału:</strong> {employee.shop}
                        </p>
                      </div>
                    </Popup>
                  </Marker>
                );
              })}
            </LayerGroup>
          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
      {isFullscreen && (
        <div
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            maxHeight: "200px",
            overflowY: "scroll",
            padding: "10px",
            boxSizing: "border-box",
          }}
        >
          <ShopsTable shops={shops} selectedId={selectedId} />
        </div>
      )}
    </div>
  );
}
