'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export function WarehousesTable({ warehouses }: any) {
  const router = useRouter();

  useEffect(() => {
    const channel = supabase
      .channel('realtime warehouses')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'warehouses',
        },
        (_payload) => {
          router.refresh();
        },
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
        </TableRow>
      </TableHeader>
      <TableBody>
        {warehouses.map((warehouse: any) => (
          <TableRow key={warehouse.id} className="text-center">
            <TableCell className="font-medium">{warehouse.name}</TableCell>
            <TableCell>{warehouse.longitude}</TableCell>
            <TableCell>{warehouse.latitude}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
