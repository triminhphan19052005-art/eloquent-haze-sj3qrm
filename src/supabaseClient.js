import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://metxaqquzrwmflfgodxq.supabase.co";
const SUPABASE_API_KEY = "YOUR_SUPABASE_API_KEY"; // Đảm bảo rằng khóa API của bạn chính xác

export const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);
