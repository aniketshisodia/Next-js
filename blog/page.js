import Link from 'next/link';

export default function BlogPage() {
  const posts = [
    { 
      slug: 'my-first-post', 
      title: 'Getting Started with Next.js', 
      excerpt: 'Learn the fundamentals of Next.js and how to build your first application',
      date: 'May 15, 2023',
      category: 'Tutorial'
    },
    { 
      slug: 'second-post', 
      title: 'Advanced React Patterns', 
      excerpt: 'Explore modern React patterns to improve your component architecture',
      date: 'June 2, 2023',
      category: 'Development'
    },
  ];

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      {/* Navigation */}
      <nav className="border-b border-[#edeae3] px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="font-semibold text-lg text-[#a81a24]">Blog</Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-[#a81a24] transition-colors">About</Link>
            <Link href="/docs" className="text-sm font-medium text-gray-600 hover:text-[#a81a24] transition-colors">Docs</Link>
            <Link href="/blog" className="text-sm font-medium text-gray-600 hover:text-[#a81a24] transition-colors">Blog</Link>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">All Articles</h1>
          <p className="text-lg text-gray-700">Browse our collection of technical articles and tutorials</p>
        </div>

        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="group">
              <Link 
                href={`/blog/${post.slug}`}
                className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[#edeae3] hover:border-[#d8d5ce]"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 group-hover:text-[#a81a24] transition-colors">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-gray-700">{post.excerpt}</p>
                    <div className="mt-4 flex items-center gap-x-3 text-sm">
                      <time dateTime={post.date} className="text-gray-500">{post.date}</time>
                      <span className="text-gray-300">•</span>
                      <span className="text-[#a81a24] bg-[#f5f1ea] px-2.5 py-0.5 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-6 w-6 text-gray-400 group-hover:text-[#a81a24] transition-colors" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/"
            className="inline-flex items-center text-[#a81a24] hover:text-[#8c151e] transition-colors"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 mr-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#edeae3] bg-white mt-24">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <p className="text-sm text-gray-600 text-center">
            © {new Date().getFullYear()} My Blog. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
