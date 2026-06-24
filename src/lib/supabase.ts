import { createClient, type SupabaseClient } from '@supabase/supabase-js'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? 'https://srpgtvjhahmwrodwnrre.supabase.co'
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? 'sb_publishable_gLCRKeNLlAeW4KucGrAE-w_nt1tetch'

let _client: SupabaseClient | null = null

export function getSupabase(): SupabaseClient | null {
  if (_client) return _client
  try {
    _client = createClient(SUPABASE_URL, SUPABASE_KEY)
    return _client
  } catch {
    return null
  }
}
