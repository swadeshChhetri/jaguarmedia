import Image from 'next/image';

const videos = [
  {
    title: "A Broken House",
    views: "4,630",
    timeAgo: "2 days ago",
    duration: "20:50",
    author: "Jimmy Goldblum",
    thumbnail: "/videos/thumb1.jpg",
    avatar: "/videos/avatar1.jpg",
  },
  {
    title: "Bacon ‘N’ Laces",
    views: "5,726",
    timeAgo: "16 days ago",
    duration: "19:26",
    author: "The New Yorker",
    thumbnail: "/videos/thumb2.jpg",
    avatar: "/videos/avatar2.jpg",
  },
  {
    title: "A Broken House",
    views: "4,630",
    timeAgo: "2 days ago",
    duration: "20:50",
    author: "Jimmy Goldblum",
    thumbnail: "/videos/thumb1.jpg",
    avatar: "/videos/avatar1.jpg",
  },
  {
    title: "Bacon ‘N’ Laces",
    views: "5,726",
    timeAgo: "16 days ago",
    duration: "19:26",
    author: "The New Yorker",
    thumbnail: "/videos/thumb2.jpg",
    avatar: "/videos/avatar2.jpg",
  },
  {
    title: "A Broken House",
    views: "4,630",
    timeAgo: "2 days ago",
    duration: "20:50",
    author: "Jimmy Goldblum",
    thumbnail: "/videos/thumb1.jpg",
    avatar: "/videos/avatar1.jpg",
  },
  {
    title: "Bacon ‘N’ Laces",
    views: "5,726",
    timeAgo: "16 days ago",
    duration: "19:26",
    author: "The New Yorker",
    thumbnail: "/videos/thumb2.jpg",
    avatar: "/videos/avatar2.jpg",
  },
  {
    title: "A Broken House",
    views: "4,630",
    timeAgo: "2 days ago",
    duration: "20:50",
    author: "Jimmy Goldblum",
    thumbnail: "/videos/thumb1.jpg",
    avatar: "/videos/avatar1.jpg",
  },
  {
    title: "Bacon ‘N’ Laces",
    views: "5,726",
    timeAgo: "16 days ago",
    duration: "19:26",
    author: "The New Yorker",
    thumbnail: "/videos/thumb2.jpg",
    avatar: "/videos/avatar2.jpg",
  },
  // Add more videos similarly...
];

export default function VideosPage() {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {videos.map((video, index) => (
          <div key={index} className="bg-white rounded shadow-sm overflow-hidden">
            <div className="relative h-48">
              <Image
                src={video.thumbnail}
                alt={video.title}
                layout="fill"
                className="object-cover"
              />
              <span className="absolute bottom-1 right-1 bg-black bg-opacity-70 text-white text-xs px-1.5 py-0.5 rounded">
                {video.duration}
              </span>
            </div>
            <div className="p-3">
              <p className="text-xs text-blue-500 mb-1">Added to Vimeo Staff Picks</p>
              <h3 className="font-semibold text-sm mb-1">{video.title}</h3>
              <p className="text-xs text-gray-500 mb-2">
                {video.views} views • {video.timeAgo}
              </p>
              <div className="flex items-center space-x-2">
                <Image
                  src={video.avatar}
                  alt={video.author}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span className="text-sm text-gray-800">{video.author}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
