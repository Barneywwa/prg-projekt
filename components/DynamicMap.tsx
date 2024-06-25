import dynamic from "next/dynamic";

const MapWithoutSSR = dynamic(() => import("./Map"), { ssr: false });

export function DynamicMap({ warehouses, shops, employees }: any) {
  return (
    <MapWithoutSSR
      warehouses={warehouses}
      shops={shops}
      employees={employees}
    />
  );
}
