import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white min-h-screen p-5">
      <h1 className="text-2xl font-bold mb-8">Dashboard</h1>

      <ul className="space-y-4">
        <li>
          <Link href="/dashboard">Home</Link>
        </li>

        <li>
          <Link href="/dashboard/analytics">
            Analytics
          </Link>
        </li>

        <li>
          <Link href="/dashboard/users">
            Users
          </Link>
        </li>
      </ul>
    </div>
  );
}