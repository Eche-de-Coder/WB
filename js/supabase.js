/**import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL = "https://ydwblfkjxhmwhyrbsury.supabase.co"
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlkd2JsZmtqeGhtd2h5cmJzdXJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc2NTEyNjIsImV4cCI6MjA5MzIyNzI2Mn0.1j88nrD6PH1LuCvFLTh03dWPKvqAIr6oIuWTh03TlK0"

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
**/
const SUPABASE_URL = 'https://iawolvozacmaoehlhvrk.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlhd29sdm96YWNtYW9laGxodnJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc4NDYwODIsImV4cCI6MjA5MzQyMjA4Mn0.yhx4aUJGGICQESl-thbQmmUaxbQlH7FerlDumK0iO_k';

const { createClient } = supabase;
const sb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
