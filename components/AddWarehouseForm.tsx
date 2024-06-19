"use client";

import supabase from "@/supabase";
import { useState } from "react";

export default function AddWarehouseForm() {
  const [warehouseName, setWarehouseName] = useState("");
  const [warehouseLatitude, setWarehouseLatitude] = useState("");
  const [warehouseLongitude, setWarehouseLongitude] = useState("");

  const handleNameChange = (e: any) => {
    setWarehouseName(e.target.value);
  };

  const handleLatitudeChange = (e: any) => {
    setWarehouseLatitude(e.target.value);
  };

  const handleLongitudeChange = (e: any) => {
    setWarehouseLongitude(e.target.value);
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold my-4">Add new warehouse</h1>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label>Name</label>
          <input
            value={warehouseName}
            onChange={handleNameChange}
            className="border p-1 max-w-[250px]"
          ></input>
        </div>
        <div className="flex flex-col">
          <label>Latitude</label>
          <input
            value={warehouseLatitude}
            onChange={handleLatitudeChange}
            className="border p-1 max-w-[250px]"
          ></input>
        </div>
        <div className="flex flex-col">
          <label>Longitude</label>
          <input
            value={warehouseLongitude}
            onChange={handleLongitudeChange}
            className="border p-1 max-w-[250px]"
          ></input>
        </div>
        <button
          className="border px-4 py-2 max-w-[250px]"
          onClick={async () => {
            await supabase
              .from("warehouses")
              .insert({
                name: warehouseName,
                longitude: warehouseLongitude,
                latitude: warehouseLatitude,
              });
          }}
        >
          Add warehouse
        </button>
      </form>
    </div>
  );
}
