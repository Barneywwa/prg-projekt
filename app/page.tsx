import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col max-w-7xl justify-center items-center mx-auto py-48 px-8 bg-white">
      <div className="flex justify-center gap-24">
        <div className="relative w-72 h-72">
          <Image src="/shop.png" alt="" fill />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold">GeoPortal</h1>
          <p className="mb-6 mt-3 text-lg">
            Baza informacji o pracownikach sieci sklepów “X”
          </p>
          <Link href="/services">
            <Button>Start</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
