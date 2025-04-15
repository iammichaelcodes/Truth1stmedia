
export default function Custom404() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-5xl md:text-7xl font-bold text-highlight mb-6">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">You found a shifty route.</h2>
      <p className="text-gray-400 max-w-lg mb-8">This page doesn’t exist, or someone tried to censor it. Either way, not here.</p>
      <a href="/" className="px-6 py-3 bg-yellow-500 text-black rounded-lg font-bold hover:bg-yellow-600">Return to Truth</a>
    </div>
  );
}
