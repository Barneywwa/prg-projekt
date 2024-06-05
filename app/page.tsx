import Link from "next/link";
import Image from "next/image";
import StoreImagePath from "@/public/images/Store.png";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-[90vh] justify-center items-center">
      <div className="flex gap-14 items-center">
        <div className="w-80 h-80 relative">
          <Image src={StoreImagePath} alt="" fill />
        </div>
        <div>
          <h1 className="font-bold text-7xl gap-3">Shops GeoPortal</h1>
          <p className="text-2xl text-center">
            Baza informacji o pracownikach sieci sklepów “X”
          </p>
        </div>
      </div>
      <div className="flex w-full justify-end">
        <Link href="/services">
          <button className="uppercase bg-[#19446B] text-white px-9 py-2 text-3xl rounded-lg hover:bg-[#92a9d0]">
            start
          </button>
        </Link>
      </div>
    </div>
  );
}
