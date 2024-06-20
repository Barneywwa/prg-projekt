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

export function EmployeesTable({ employees }: any) {
  const router = useRouter();

  useEffect(() => {
    const channel = supabase
      .channel('realtime employees')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'employees',
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

  console.log(employees);

  return (
    <Table className="my-9">
      <TableHeader>
        <TableRow>
          <TableHead className="text-center">Imię</TableHead>
          <TableHead className="text-center">Nazwisko</TableHead>
          <TableHead className="text-center">Długość Geograficzna</TableHead>
          <TableHead className="text-center">Szerokość Geograficzna</TableHead>
          <TableHead className="text-center">Sklep</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {employees.map((employee: any) => (
          <TableRow key={employee.id} className="text-center">
            <TableCell className="font-medium">{employee.first_name}</TableCell>
            <TableCell className="font-medium">{employee.last_name}</TableCell>
            <TableCell>{employee.longitude}</TableCell>
            <TableCell>{employee.latitude}</TableCell>
            <TableCell>{employee.shop}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
