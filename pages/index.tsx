import type { NextPage } from 'next'
import Head from 'next/head';

const posts = [
  { title: 'React testing', excerpt: 'Learn React testing'},
  { title: 'React with Tailwind', excerpt: 'Learn React with Testing'},
];

const Home: NextPage = () => {
  return (
    <div className="container mx-auto px-10 mb-8 bg-gray-300">
      <Head>
        <title>Finance blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {posts.map((post, index ) => {
          return (
            <div>
              {post.title}
              {post.excerpt}
            </div>
          )})}
      </div>
    </div>
  )
}

export default Home
