"use client";

import {
  LayerGroup,
  LayersControl,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";
import { useState } from "react";
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
    <>
      <MapContainer
        center={[52.2297, 21.0122]}
        zoom={10}
        scrollWheelZoom={true}
        style={{ height: "420px", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="OSM">
            <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer checked name="Google">
            <TileLayer url="http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}" />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer checked name="Google Satellite">
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
                    eventHandlers={{
                      mouseover: () => handleMouseOver(warehouseId),
                      mouseout: () => handleMouseOut(warehouseId),
                      click: () => handleClick(warehouse.id),
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
                          <strong>Magazyn:</strong> {shop.warehouse}
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
                          <strong>Sklep:</strong> {employee.shop}
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
      <ShopsTable shops={shops} selectedId={selectedId} />
    </>
  );
}
