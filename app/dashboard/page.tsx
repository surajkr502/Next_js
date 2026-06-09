export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">
        Dashboard Overview
      </h1>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="bg-white shadow p-5 rounded">
          Total Users: 1500
        </div>

        <div className="bg-white shadow p-5 rounded">
          Revenue: ₹50,000
        </div>

        <div className="bg-white shadow p-5 rounded">
          Orders: 250
        </div>
      </div>
    </div>
  );
}