export default function Profile() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Profile</h1>

      <div className="mt-6 max-w-2xl rounded-xl border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Your Information</h2>

        <div className="mt-6 space-y-4">
          <div>
            <p className="text-sm text-gray-500">Name</p>
            <p className="text-lg">Your Name</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="text-lg">your@email.com</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Shiur</p>
            <p className="text-lg">Shiur Daled</p>
          </div>
        </div>

        <button className="mt-6 rounded-lg bg-black px-5 py-2 text-white">
          Edit Profile
        </button>
      </div>
    </main>
  );
}