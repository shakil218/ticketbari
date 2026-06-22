// fake data
const admin = {
  name: "Admin Panel",
  email: "admin@ticketbari.com",
  role: "admin",
  image: "https://i.pravatar.cc/150?img=5",
};

export default function AdminProfilePage() {

  return (
    <div className="max-w-2xl">

      <h2 className="text-2xl font-bold mb-6">
        Admin Profile
      </h2>

      <div className="p-6 border rounded-xl">
        <img
          src={admin.image}
          className="w-20 h-20 rounded-full"
        />

        <h3 className="text-xl font-semibold mt-4">
          {admin.name}
        </h3>

        <p className="text-gray-500">{admin.email}</p>

        <span className="inline-block mt-2 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
          {admin.role}
        </span>
      </div>

    </div>
  );
}