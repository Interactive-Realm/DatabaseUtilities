export * as Client from './Supabase/SupabaseClient';
export * as UserTypes from './usertypes';
export * as Score from './Supabase/ScoreFunctions';
export * as ClientFunctions from './Supabase/UserFunctions';

// import { createClient, SupabaseClient } from '@supabase/supabase-js';

// let supabase: SupabaseClient;

// export const initializeSupabaseClient = () => {
//   const supabaseUrl = process.env.SUPABASE_URL;
//   const supabaseKey = process.env.SUPABASE_KEY;

//   if (!supabaseUrl || !supabaseKey) {
//     throw new Error('Supabase environment variables are not set');
//   }

//   supabase = createClient(supabaseUrl, supabaseKey);
// };

// export const callRpcFunction = async (functionName: string, params: any) => {
//   if (!supabase) {
//     throw new Error('Supabase client is not initialized');
//   }

//   const { data, error } = await supabase.rpc(functionName, params);
//   if (error) throw error;
//   return data;
// };