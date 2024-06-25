"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { supabase } from "@/lib/supabase";

export function ShopsTable({ shops }: any) {
  const router = useRouter();

  useEffect(() => {
    const channel = supabase
      .channel("realtime shops")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "shops",
        },
        (_payload) => {
          router.refresh();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [router]);

  return (
    <Table className="my-9">
      <TableHeader>
        <TableRow>
          <TableHead className="text-center">Nazwa</TableHead>
          <TableHead className="text-center">Długość Geograficzna</TableHead>
          <TableHead className="text-center">Szerokość Geograficzna</TableHead>
          <TableHead className="text-center">Magazyn</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {shops.map((shop: any) => (
          <TableRow key={shop.id} className="text-center">
            <TableCell className="font-medium">{shop.name}</TableCell>
            <TableCell>{shop.longitude}</TableCell>
            <TableCell>{shop.latitude}</TableCell>
            <TableCell>{shop.warehouse}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
