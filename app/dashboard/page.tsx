import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import Link from "next/link"

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)
  if (!session) redirect("/login")

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="border-b border-slate-800 bg-[#0f1729]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <h1 className="text-xl font-bold">
            Trade<span className="text-blue-500">Log</span>
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-400">{session.user?.email}</span>
            <Link
              href="/account"
              className="text-sm text-slate-300 hover:text-white transition"
            >
              My Account
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-2">Welcome back 👋</h2>
        <p className="text-slate-400 mb-10">
          Logged in as <span className="text-blue-400">{session.user?.email}</span>
        </p>

        {/* Placeholder stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: "Total Trades", value: "0" },
            { label: "Total P&L", value: "$0.00" },
            { label: "Win Rate", value: "0%" },
          ].map((card) => (
            <div
              key={card.label}
              className="bg-[#0f1729] border border-slate-800 rounded-xl p-6"
            >
              <p className="text-sm text-slate-400">{card.label}</p>
              <p className="text-2xl font-bold mt-1">{card.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-[#0f1729] border border-slate-800 rounded-xl p-8 text-center">
          <p className="text-slate-400">
            Trading journal features coming in Phase 2 ⚡
          </p>
        </div>
      </main>
    </div>
  )
}
