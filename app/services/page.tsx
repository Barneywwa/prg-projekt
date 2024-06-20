import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function ServicesPage() {
  return (
    <main className="flex flex-col max-w-7xl justify-center items-center mx-auto py-44 px-8 bg-white">
      <h1 className="text-4xl font-bold mb-10">Wybierz usługę</h1>
      <div className="flex gap-24">
        <div className="flex flex-col items-center justify-between gap-4">
          <div className="relative w-48 h-48">
            <Image src="/employee.webp" alt="" fill />
          </div>
          <Link href="/employees">
            <Button>Pracownicy</Button>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-between gap-4">
          <div className="relative w-48 h-48">
            <Image src="/store.webp" alt="" fill />
          </div>
          <Link href="/shops">
            <Button>Sklepy</Button>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-between gap-4">
          <div className="relative w-48 h-48">
            <Image src="/warehouse.webp" alt="" fill />
          </div>
          <Link href="/warehouses">
            <Button>Magazyny</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
