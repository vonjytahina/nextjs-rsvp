"use server";

import { redirect } from "next/navigation";
import { createClient } from "../utils/supabase/server";

export async function signIn(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const supabase = await createClient();

  const { error, data } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  console.log(data, "data_login");

  if (error) {
    return { error: error.message };
  }

  redirect("/admin/rsvps");
}

export async function signOut() {
  const supabase = await createClient();

  await supabase.auth.signOut();
  redirect("/login");
}
