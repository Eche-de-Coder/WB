import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const { SUPABASE_URL, SUPABASE_ANON_KEY } = await fetch('/api/env').then(r => r.json());

sb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
