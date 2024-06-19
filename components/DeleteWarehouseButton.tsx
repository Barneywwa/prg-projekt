"use client";

import supabase from "@/supabase";

export default function DeleteWarehouseButton({ id }: any) {
  return (
    <button
      className="border bg-red-300 py-1 my-2 px-4 rounded-lg text-zinc-700"
      onClick={async () => {
        await supabase.from("warehouses").delete().eq("id", id);
      }}
    >
      Delete
    </button>
  );
}
