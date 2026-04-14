import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jupvjbcfrbjuuhzufdyr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1cHZqYmNmcmJqdXVoenVmZHlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYxNjQzNTgsImV4cCI6MjA5MTc0MDM1OH0.3YElz2VrZvwUjsvAmbRdHw0LnQNz0AOLQMZsYQaFvxU'

export const supabase = createClient(supabaseUrl, supabaseKey)