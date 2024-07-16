import { createClient, SupabaseClient } from "@supabase/supabase-js";

const url = process.env.SUPABASE_URL as string; // = process.env.SUPABASE_URL!;
const key = process.env.SUPABASE_KEY as string; // = process.env.SUPABASE_KEY!;

// export function setupSupabaseClient(db_key: string, db_url: string)
// {
//   url = db_url;
//   key = db_key;
// }

export const supabase = createClient(url, key);