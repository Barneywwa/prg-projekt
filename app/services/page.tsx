import Image from "next/image";
import ShopImagePath from "@/public/images/shop.png";
import WarehouseImagePath from "@/public/images/warehouse.png";
import WorkerImagePath from "@/public/images/worker.png";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-[90vh] justify-center items-center text-center gap-16">
      <h1 className="text-8xl font-bold">Choose service</h1>
      <div className="flex">
        <div>
          <div className="w-80 h-80 relative mx-auto">
            <Image src={ShopImagePath} alt="" fill />
          </div>
          <button className="uppercase bg-[#19446B] text-white px-9 py-2 text-3xl rounded-lg hover:bg-[#92a9d0] ">
            Oddziały sklepów
          </button>
        </div>
        <div>
          <div className="w-80 h-80 relative mx-auto">
            <Image src={WorkerImagePath} alt="" fill />
          </div>
          <button className="uppercase bg-[#19446B] text-white px-9 py-2 text-3xl rounded-lg hover:bg-[#92a9d0] ">
            Pracownicy
          </button>
        </div>
        <div>
          <div className="w-80 h-80 relative mx-auto">
            <Image src={WarehouseImagePath} alt="" fill />
          </div>
          <button className="uppercase bg-[#19446B] text-white px-9 py-2 text-3xl rounded-lg hover:bg-[#92a9d0] ">
            Oddziały Magazynowe
          </button>
        </div>
      </div>
    </div>
  );
}
