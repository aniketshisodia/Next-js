import Link from 'next/link';

export default function PostPage({ params }) {
  const { slug } = params;

  const posts = {
    'my-first-post': {
      title: 'Getting Started with Next.js',
      content: 'Welcome to my first blog post. Here, I share my journey of learning and growth in the world of technology. This space will document my experiences, challenges, and triumphs as I navigate through various projects and concepts.',
      date: 'May 15, 2023',
      category: 'Tutorial',
      readTime: '5 min read'
    },
    'second-post': {
      title: 'Advanced React Patterns',
      content: 'This is the second post where I delve deeper into specific topics. More insightful content and detailed explorations to come soon as I continue to expand my knowledge and share my learnings with you all!',
      date: 'June 2, 2023',
      category: 'Development',
      readTime: '8 min read'
    },
  };

  const post = posts[slug];

  if (!post) {
    return (
      <div className="min-h-screen bg-[#faf8f5] flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-lg text-center border border-[#edeae3]">
          <p className="text-lg text-gray-700 mb-6">Post not found!</p>
          <Link 
            href="/blog" 
            className="inline-flex items-center px-5 py-2.5 bg-[#a81a24] text-white rounded-md hover:bg-[#8c151e] transition-colors"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

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
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="bg-white p-8 rounded-lg shadow-sm border border-[#edeae3]">
          {/* Back button */}
          <div className="mb-8">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-[#a81a24] hover:text-[#8c151e] transition-colors mb-6"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Blog
            </Link>
            
            {/* Post metadata */}
            <div className="flex items-center gap-x-4 text-sm mb-6">
              <time dateTime={post.date} className="text-gray-500">{post.date}</time>
              <span className="text-gray-300">•</span>
              <span className="text-[#a81a24] bg-[#f5f1ea] px-2.5 py-0.5 rounded-full font-medium">
                {post.category}
              </span>
              <span className="text-gray-300">•</span>
              <span className="text-gray-500">{post.readTime}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            
            {/* Divider */}
            <div className="w-16 h-1 bg-[#a81a24] mb-8 rounded-full"></div>
          </div>

          {/* Content */}
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">{post.content}</p>
            <p className="text-lg text-gray-700 leading-relaxed">Stay tuned for more updates and insights in future posts!</p>
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-[#edeae3]">
            <Link 
              href="/blog" 
              className="inline-flex items-center px-5 py-2.5 bg-[#a81a24] text-white rounded-md hover:bg-[#8c151e] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
              </svg>
              View All Posts
            </Link>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#edeae3] bg-white mt-12">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <p className="text-sm text-gray-600 text-center">
            © {new Date().getFullYear()} My Blog. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
