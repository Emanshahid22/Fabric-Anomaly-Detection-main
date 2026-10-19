import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Missing Supabase config. Create frontend/.env (copy .env.example) and set " +
      "VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY from your Supabase project's " +
      "Settings -> API page, then restart the dev server."
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
