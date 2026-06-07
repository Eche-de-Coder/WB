import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

async function initSupabase() {
  const res = await fetch('../api/env');
  const env = await res.json();

  const supabase = createClient(env.SUPABASE_URL, env.SUPABASE_ANON_KEY);
  return supabase;
}

export { initSupabase };
