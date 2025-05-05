import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      {/* Navigation */}
      <nav className="border-b border-[#edeae3] px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="font-semibold text-lg text-[#a81a24]">Blog</span>
          <div className="hidden md:flex space-x-8">
            <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-[#a81a24] transition-colors">About</Link>
            <Link href="/docs" className="text-sm font-medium text-gray-600 hover:text-[#a81a24] transition-colors">Docs</Link>
            <Link href="/blog" className="text-sm font-medium text-gray-600 hover:text-[#a81a24] transition-colors">Blog</Link>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="max-w-4xl mx-auto px-6 py-16 sm:py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Welcome to the <span className="text-[#a81a24]">Blog</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-700 max-w-2xl mx-auto">
            Quality content designed to help you grow. Read technical articles, 
            tutorials, and industry insights.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/blog"
              className="rounded-md bg-[#a81a24] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#8c151e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a81a24] transition-colors"
            >
              Browse articles
            </Link>
          </div>
        </div>

        {/* Featured articles */}
         </main>

      {/* Footer */}
    </div>
  );
}
