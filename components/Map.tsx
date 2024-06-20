"use client";

import {
  Circle,
  LayerGroup,
  LayersControl,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  FeatureGroup,
  Rectangle,
} from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";

const warehouseIcon = new Icon({
  iconUrl: "https://img.icons8.com/color/48/garage-closed.png",
  iconSize: [35, 35],
});

const employeeIcon = new Icon({
  iconUrl: "https://img.icons8.com/color/48/collaborator-male--v1.png",
  iconSize: [35, 35],
});

const shopIcon = new Icon({
  iconUrl: "https://img.icons8.com/plasticine/100/shop.png",
  iconSize: [35, 35],
});

export default function Map({ warehouses, shops, employees }: any) {
  return (
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
        <LayersControl.BaseLayer checked name="Google Satelite">
          <TileLayer url="http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}" />
        </LayersControl.BaseLayer>
        <LayersControl.Overlay name="Magazyny">
          <LayerGroup>
            {warehouses.map((warehouse: any) => {
              return (
                <Marker
                  position={[warehouse.longitude, warehouse.latitude]}
                  key={warehouse.id}
                  icon={warehouseIcon}
                >
                  <Popup>
                    <p>
                      <strong>Nazwa</strong>: {warehouse.name}
                    </p>
                  </Popup>
                </Marker>
              );
            })}
          </LayerGroup>
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Sklepy">
          <LayerGroup>
            {shops.map((shop: any) => {
              return (
                <Marker
                  position={[shop.longitude, shop.latitude]}
                  key={shop.id}
                  icon={shopIcon}
                >
                  <Popup>
                    <p>
                      <strong>Nazwa</strong>: {shop.name}
                    </p>
                    <p>
                      <strong>Magazyn</strong>: {shop.warehouse}
                    </p>
                  </Popup>
                </Marker>
              );
            })}
          </LayerGroup>
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Pracownicy">
          <LayerGroup>
            {employees.map((employee: any) => {
              return (
                <Marker
                  position={[employee.longitude, employee.latitude]}
                  key={employee.id}
                  icon={employeeIcon}
                >
                  <Popup>
                    <p>
                      <strong>Imię i nazwisko</strong>:{" "}
                      {`${employee.first_name} ${employee.last_name}`}
                    </p>
                    <p>
                      <strong>Sklep</strong>: {employee.shop}
                    </p>
                  </Popup>
                </Marker>
              );
            })}
          </LayerGroup>
        </LayersControl.Overlay>
      </LayersControl>
    </MapContainer>
  );
}
