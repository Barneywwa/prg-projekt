import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://fmsvdlaxpmoxnsgjwgiu.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtc3ZkbGF4cG1veG5zZ2p3Z2l1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgxMzUyNzIsImV4cCI6MjAzMzcxMTI3Mn0.X979q4DBEV7a44q8pjP3T7EKjltGbdknB-w71itE0pE',
);
