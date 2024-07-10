import { createClient, SupabaseClient } from "@supabase/supabase-js";

const url = process.env.REACT_APP_SUPABASE_URL!; // = process.env.SUPABASE_URL!;
const key = process.env.REACT_APP_SUPABASE_KEY!; // = process.env.SUPABASE_KEY!;

// export function setupSupabaseClient(db_key: string, db_url: string)
// {
//   url = db_url;
//   key = db_key;
// }

export const supabase = createClient(url, key);