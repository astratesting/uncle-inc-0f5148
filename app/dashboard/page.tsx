import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div className="p-6 md:p-8 max-w-6xl mx-auto">
      {/* Welcome */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-1">
          Welcome back{user.user_metadata?.name ? `, ${user.user_metadata.name}` : ""}
        </h1>
        <p className="text-[var(--muted)]">Here&apos;s what&apos;s happening with your projects.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <StatCard label="Projects" value="0" icon="🚀" />
        <StatCard label="User Tests" value="0" icon="👥" />
        <StatCard label="Deployments" value="0" icon="⚡" />
      </div>

      {/* CTA */}
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 text-center mb-8">
        <div className="w-16 h-16 rounded-2xl bg-indigo/10 flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">🚀</span>
        </div>
        <h2 className="text-xl font-bold mb-2">Create Your First Project</h2>
        <p className="text-[var(--muted)] mb-6 max-w-md mx-auto">
          Describe your idea and let Uncle Inc. generate a production-ready MVP. Launch in days, not months.
        </p>
        <Link
          href="/dashboard/projects/new"
          className="inline-block bg-gradient-to-r from-indigo to-cyan text-white px-6 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-all glow-ring"
        >
          New Project →
        </Link>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 text-center">
          <p className="text-[var(--muted)] text-sm">No activity yet. Create your first project to get started.</p>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, icon }: { label: string; value: string; icon: string }) {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-[var(--muted)]">{label}</span>
        <span className="text-2xl">{icon}</span>
      </div>
      <div className="text-3xl font-bold">{value}</div>
    </div>
  );
}
