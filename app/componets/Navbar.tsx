export default function Navbar() {
  return (
    <div className="bg-white shadow p-4 flex justify-between">
      <h2 className="font-semibold text-xl">
        Admin Dashboard
      </h2>

      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Logout
      </button>
    </div>
  );
}