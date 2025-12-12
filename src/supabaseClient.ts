import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = "https://metxaqquzrwmflfgodxq.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ldHhhcXF1enJ3bWZsZmdvZHhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMwMDA3OTMsImV4cCI6MjA3ODU3Njc5M30.X7YllyYh_vpsfuUU4i40aAvuLJCsxSQDnVioljfXfso";

export const supabase: SupabaseClient = createClient(
  supabaseUrl,
  supabaseAnonKey
);
