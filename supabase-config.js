// Configuración de Supabase
const SUPABASE_URL = "https://taacamsxwgjrmmgrejmf.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRhYWNhbXN4d2dqcm1tZ3Jlam1mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzczMjE2MzUsImV4cCI6MjA5Mjg5NzYzNX0.EzHzYh1neWRoocnPzwqEg72q4LJ_mB677E8nlXShvYs";

// Inicializamos el cliente de Supabase
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);