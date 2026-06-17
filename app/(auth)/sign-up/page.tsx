"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function SignUpPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const supabase = createClient();
    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name },
      },
    });

    if (signUpError) {
      setError(signUpError.message);
      setLoading(false);
      return;
    }

    setSuccess(true);
    setLoading(false);
    // Redirect after brief delay
    setTimeout(() => router.push("/dashboard"), 2000);
  }

  return (
    <div className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--card)]">
      <h1 className="text-2xl font-bold mb-1">Create your account</h1>
      <p className="text-sm text-[var(--muted)] mb-8">
        Start building your MVP in minutes.
      </p>

      {success ? (
        <div className="p-4 rounded-lg bg-teal/10 border border-teal/30 text-teal text-sm mb-6">
          Account created! Redirecting to dashboard...
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1.5">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Jane Smith"
              className="w-full px-4 py-2.5 rounded-lg bg-[var(--bg)] border border-[var(--border)] text-[var(--fg)] placeholder:text-[var(--muted)] focus:outline-none focus:border-indigo focus:ring-1 focus:ring-indigo/50 transition-colors"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1.5">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="jane@example.com"
              className="w-full px-4 py-2.5 rounded-lg bg-[var(--bg)] border border-[var(--border)] text-[var(--fg)] placeholder:text-[var(--muted)] focus:outline-none focus:border-indigo focus:ring-1 focus:ring-indigo/50 transition-colors"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1.5">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
              placeholder="••••••••"
              className="w-full px-4 py-2.5 rounded-lg bg-[var(--bg)] border border-[var(--border)] text-[var(--fg)] placeholder:text-[var(--muted)] focus:outline-none focus:border-indigo focus:ring-1 focus:ring-indigo/50 transition-colors"
            />
            <p className="text-xs text-[var(--muted)] mt-1">At least 8 characters</p>
          </div>

          {error && (
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-gradient-to-r from-indigo to-cyan text-white font-semibold text-sm hover:opacity-90 disabled:opacity-50 transition-all"
          >
            {loading ? "Creating account..." : "Create account"}
          </button>
        </form>
      )}

      <p className="text-sm text-[var(--muted)] mt-6 text-center">
        Already have an account?{" "}
        <Link href="/sign-in" className="text-cyan hover:underline font-medium">
          Sign in
        </Link>
      </p>
    </div>
  );
}
