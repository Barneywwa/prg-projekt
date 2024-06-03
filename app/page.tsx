import Image from "next/image";
import StoreImagePath from "@/public/images/Store.png"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <div className="flex gap-14">
        <div className="w-80 h-80 relative">
          <Image src={StoreImagePath} alt="" fill/>
        </div>
        <div>
          <h1 className="font-bold text-6xl">Shops GeoServer</h1>
          <p>Baza informacji o pracownikach sieci sklepów “X”</p>
        </div>
      </div>
      <div className="flex w-full justify-end">
        <button className="uppercase bg-[#19446B] text-white px-9 py-2 text-3xl rounded-lg hover:bg-[#92a9d0]">start</button>
      </div>
    </div>
  )
}