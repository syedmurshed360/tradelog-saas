import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import Link from "next/link"
import LogoutButton from "@/components/LogoutButton"

export default async function AccountPage() {
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
          <Link
            href="/dashboard"
            className="text-sm text-slate-300 hover:text-white transition"
          >
            ← Dashboard
          </Link>
        </div>
      </nav>

      <main className="max-w-2xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-8">My Account</h2>

        <div className="bg-[#0f1729] border border-slate-800 rounded-2xl p-8 space-y-6">
          <div>
            <p className="text-sm text-slate-400 mb-1">Email</p>
            <p className="text-white font-medium">{session.user?.email}</p>
          </div>

          <div>
            <p className="text-sm text-slate-400 mb-1">Role</p>
            <span className="inline-block bg-blue-500/10 text-blue-400 text-xs font-semibold px-3 py-1 rounded-full border border-blue-500/20">
              {session.user?.role ?? "USER"}
            </span>
          </div>

          <div>
            <p className="text-sm text-slate-400 mb-1">Subscription</p>
            <span className="inline-block bg-yellow-500/10 text-yellow-400 text-xs font-semibold px-3 py-1 rounded-full border border-yellow-500/20">
              Subscription system coming in Phase 3
            </span>
          </div>

          <div className="pt-4 border-t border-slate-800">
            <LogoutButton />
          </div>
        </div>
      </main>
    </div>
  )
}
