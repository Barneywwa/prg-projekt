import { DynamicMap } from '@/components/DynamicMap';
import { EmployeesTable } from '@/components/EmployeesTable';
import { supabase } from '@/lib/supabase';

export const revalidate = 0;

export default async function EmployeesPage() {
  const { data: warehouses } = await supabase.from('warehouses').select();
  const { data: shops } = await supabase.from('shops').select();
  const { data: employees } = await supabase.from('employees').select();

  return (
    <main className="flex flex-col max-w-7xl justify-center items-center mx-auto py-12 px-8 bg-white">
      <h1 className="text-3xl font-bold mb-10">Pracownicy</h1>
      <div className="h-[420px] rounded-md w-full bg-slate-500">
        <DynamicMap
          warehouses={warehouses}
          shops={shops}
          employees={employees}
        />
      </div>
      <EmployeesTable employees={employees} />
    </main>
  );
}
