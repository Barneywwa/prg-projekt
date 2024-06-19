import AddWarehouseForm from "@/components/AddWarehouseForm";
import DeleteWarehouseButton from "@/components/DeleteWarehouseButton";
import supabase from "@/supabase";
import { useState } from "react";

export default async function WarehousePage() {
  const { data } = await supabase.from("warehouses").select("");

  console.log(data);

  return (
    <div className="min-h-screen max-w-7xl mx-auto">
      <table className="w-full">
        <tbody>
          <tr className="border-b border-zinc-600">
            <th>Name</th>
            <th>Longitude</th>
            <th>Latitude</th>
          </tr>
          {data?.map((warehouse: any) => {
            return (
              <tr key={warehouse.id} className="border-b border-zinc-600 py-4">
                <th>{warehouse.name}</th>
                <th>{warehouse.longitude}</th>
                <th>{warehouse.latitude}</th>
                <th>
                  <DeleteWarehouseButton id={warehouse.id} />
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
      <AddWarehouseForm />
    </div>
  );
}
