import Image from 'next/image';

const newsStories = [
  {
    title: "How much US land do China and other countries really own?",
    category: "AMERICAS",
    readTime: "5 MINUTE READ",
    image: "/news/story1.jpg",
  },
  {
    title: "What is Jordan’s role in the Middle East and how could the Israel-Hamas war affect the country?",
    category: "CONFLICTS & CRISES",
    readTime: "5 MINUTE READ",
    image: "/news/story2.jpg",
  },
  {
    title: "How much US land do China and other countries really own?",
    category: "AMERICAS",
    readTime: "5 MINUTE READ",
    image: "/news/story1.jpg",
  },
];

const watchNowVideos = [
  {
    title: "We rescued dozens from war in Sudan, now we’re looking ahead",
    category: "AFRICA",
    image: "/news/video1.jpg",
  },
  {
    title: "How do Americans really feel about climate change?",
    category: "AMERICAS",
    image: "/news/video2.jpg",
  },
  {
    title: "How much US land do China and other countries really own?",
    category: "AMERICAS",
    readTime: "5 MINUTE READ",
    image: "/news/story1.jpg",
  },
  {
    title: "How much US land do China and other countries really own?",
    category: "AMERICAS",
    readTime: "5 MINUTE READ",
    image: "/news/story1.jpg",
  },
];

export default function NewsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-10 space-y-20">

      {/* Section 1: Hero */}
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">Welcome to Blue Marble</h1>
          <p className="text-gray-600 mb-4">
            Inspired by the iconic “Blue Marble” photo of Earth taken by the Apollo 17 crew, we share stories that explain this global moment.
          </p>
          <p className="uppercase text-sm text-green-600 font-semibold">3 Minute Read</p>
        </div>
        <Image src="/news/hero.jpg" alt="Hero" width={600} height={400} className="rounded-xl" />
      </section>

      {/* Section 2: Latest Stories */}
      <section>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          Latest Stories <span className="text-green-600">→</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {newsStories.map((story, idx) => (
            <div key={idx}>
              <Image src={story.image} alt={story.title} width={400} height={300} className="rounded-md mb-2" />
              <p className="text-xs font-medium uppercase text-gray-500">{story.category}</p>
              <h3 className="font-semibold text-base mt-1 mb-1">{story.title}</h3>
              <p className="text-xs text-gray-600">{story.readTime}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Watch Now */}
      <section>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          Watch Now <span className="text-green-600">↗</span>
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {watchNowVideos.map((video, idx) => (
            <div key={idx}>
              <div className="relative">
                <Image src={video.image} alt={video.title} width={400} height={240} className="rounded-md" />
                <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">▶</div>
              </div>
              <p className="text-xs font-medium uppercase text-gray-500 mt-2">{video.category}</p>
              <h3 className="text-sm font-semibold mt-1">{video.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Newsletter */}
      <section className="bg-black text-white rounded-xl p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">The Overview: A newsletter for our curious world</h2>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-2 rounded-md text-black w-64"
          />
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md">
            Subscribe
          </button>
          <button className="border border-white px-4 py-2 rounded-md">
            View Past Newsletters
          </button>
        </form>
      </section>

    </main>
  );
}
