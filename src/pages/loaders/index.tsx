import { Loader } from "@freelancing/ui";

export function LoaderShowcasePage() {
  return (
    <main className="min-h-screen bg-white p-12">
      <a href="/" className="inline-block text-blue-600 underline">
        Back to Design System
      </a>

      <h1 className="mt-6 text-3xl font-semibold">Loaders</h1>
      <p className="mt-2 text-sm text-gray-600">
        Loader scales with parent dimensions. Place it in any container and it will fill the available space.
      </p>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">Simple scale examples</h2>
        <div className="mt-3 flex items-center gap-4">
          <div className="h-8 w-8 border border-gray-200 rounded-md flex items-center justify-center">
            <Loader />
          </div>
          <div className="h-12 w-12 border border-gray-200 rounded-md flex items-center justify-center">
            <Loader />
          </div>
          <div className="h-16 w-16 border border-gray-200 rounded-md flex items-center justify-center">
            <Loader />
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">Inside custom layout containers</h2>
        <div className="mt-3 h-20 w-64 border border-dashed border-gray-300 rounded-lg flex items-center justify-around px-4">
          <div className="h-6 w-6">
            <Loader />
          </div>
          <div className="h-10 w-10">
            <Loader />
          </div>
          <div className="h-14 w-14">
            <Loader />
          </div>
        </div>
      </section>
    </main>
  );
}
