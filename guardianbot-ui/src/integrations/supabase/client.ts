// This file is automatically generated. Do not edit it directly.
import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";

const SUPABASE_URL = "https://civxvzcxinpibjghezwt.supabase.co";
const SUPABASE_PUBLISHABLE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpdnh2emN4aW5waWJqZ2hlend0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEzNDM2NDgsImV4cCI6MjA1NjkxOTY0OH0.tCmc8WJC2b0xGUjArdlE7f9YXYBhq-r_ervHwofRg2w";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
