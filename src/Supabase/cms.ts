import {supabase} from "./SupabaseClient"

export async function signInWithEmail(userEmail: string, userPassword: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: userEmail,
      password: userPassword,
    })
  }