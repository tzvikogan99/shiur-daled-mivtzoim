export default function NewRoute() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Add New Route</h1>

      <div className="mt-6 max-w-2xl rounded-xl border bg-white p-6 shadow-sm">
        <label className="block text-sm font-medium">
          Route Name
        </label>

        <input
          type="text"
          placeholder="Enter route name"
          className="mt-2 w-full rounded-lg border p-3"
        />

        <label className="mt-6 block text-sm font-medium">
          Description
        </label>

        <textarea
          placeholder="Enter route description"
          className="mt-2 w-full rounded-lg border p-3"
          rows={4}
        />

        <button className="mt-6 rounded-lg bg-black px-5 py-2 text-white">
          Create Route
        </button>
      </div>
    </main>
  );
}
