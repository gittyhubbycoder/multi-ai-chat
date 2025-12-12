// ⚠️ REPLACE THESE WITH YOUR SUPABASE CREDENTIALS
const SUPABASE_URL = 'YOUR_SUPABASE_URL_HERE'; // e.g., 'https://xxxxx.supabase.co'
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY_HERE'; // Your anon/public key
const ADMIN_EMAIL = 'admin@example.com'; // Change this to your admin email

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);