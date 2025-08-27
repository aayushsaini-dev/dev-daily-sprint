import Link from "next/link";

// app/profile/[id]/page.tsx
export default async function Profile({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 via-indigo-600 to-pink-500 p-6">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-8 text-center">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          Profile
        </h2>
        <hr className="mb-6 border-gray-300" />

        <div className="text-left">
          <p className="text-gray-700 font-medium mb-2">Profile ID</p>
          <div className="w-full px-4 py-2 bg-gray-100 rounded-lg font-mono text-sm break-all text-gray-800">
            {id}
          </div>
        </div>
        <div className="mt-6">
          <Link
            href="/profile"
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition"
          >
            Back to Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
