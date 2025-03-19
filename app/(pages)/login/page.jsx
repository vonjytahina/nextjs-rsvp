"use client";

import { signIn } from "@/app/actions/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

async function signInAction(prevState, formData) {
  return await signIn(prevState, formData);
}

export default function Login() {
  const [state, setState] = useState(null);
  
  const formAction = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const prevState = state;

    const result = await signInAction(prevState, formData);
    setState(result);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={formAction}
        className="p-8 bg-white rounded-lg shadow-md w-96"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
        <div className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" required />
          </div>
          {state?.error && (
            <p className="text-red-500 text-sm">{state.error}</p>
          )}
          <Button type="submit" className="w-full">
            Log In
          </Button>
        </div>
      </form>
    </div>
  );
}
