// js/supabase.js

const supabaseUrl = "https://ahnpmtpcxvwfhhxkclgb.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFobnBtdHBjeHZ3ZmhoeGtjbGdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM1NzQ5MDMsImV4cCI6MjA3OTE1MDkwM30.BuwdEr-jz91Ghf083Cw9oaUDFYvma1M5VNrDae3Jz2s";

const supabaseClient = supabase.createClient(supabaseUrl, supabaseAnonKey);

