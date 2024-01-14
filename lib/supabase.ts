import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://tbxxsyvivolowryrevfr.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRieHhzeXZpdm9sb3dyeXJldmZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUxNzA3NjEsImV4cCI6MjAyMDc0Njc2MX0.inG-oZLiMWP93pH7TOfm5gury7goF7DTF45-WM8g4xU";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})