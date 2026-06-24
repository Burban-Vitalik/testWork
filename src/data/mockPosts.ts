export interface Post {
  id: number;
  seed: string;
  dateLabel: string;
  uploadDate: string;
  likes: number;
  views: number;
  comments: number;
  title: string;
  postedDate: string;
}

export const MOCK_POSTS: Post[] = [
  { id: 1, seed: "alpine1", title: "Today", uploadDate: "9-08-2016", likes: 128, views: 47, comments: 22, dateLabel: "Image upload", postedDate: "11-04-2014" },
  { id: 2, seed: "forest2", title: "Today", uploadDate: "9-08-2016", likes: 47, views: 47, comments: 22, dateLabel: "Image upload", postedDate: "11-04-2014" },
  { id: 3, seed: "ocean3", title: "Today", uploadDate: "9-08-2016", likes: 139, views: 67, comments: 14, dateLabel: "Image upload", postedDate: "11-04-2014" },
  { id: 4, seed: "mountain4", title: "Today", uploadDate: "9-08-2016", likes: 87, views: 33, comments: 9, dateLabel: "Image upload", postedDate: "11-04-2014" },
  { id: 5, seed: "sunset5", title: "Today", uploadDate: "9-08-2016", likes: 204, views: 91, comments: 38, dateLabel: "Image upload", postedDate: "11-04-2014" },
  { id: 6, seed: "clouds6", title: "Today", uploadDate: "9-08-2016", likes: 56, views: 28, comments: 7, dateLabel: "Image upload", postedDate: "11-04-2014" },
  { id: 7, seed: "city7", title: "Today", uploadDate: "9-08-2016", likes: 312, views: 112, comments: 45, dateLabel: "Image upload", postedDate: "11-04-2014" },
  { id: 8, seed: "lake8", title: "Today", uploadDate: "9-08-2016", likes: 73, views: 41, comments: 18, dateLabel: "Image upload", postedDate: "11-04-2014" },
  { id: 9, seed: "desert9", title: "Today", uploadDate: "9-08-2016", likes: 165, views: 58, comments: 31, dateLabel: "Image upload", postedDate: "11-04-2014" },
  { id: 10, seed: "trail10", title: "Today", uploadDate: "9-08-2016", likes: 99, views: 44, comments: 12, dateLabel: "Image upload", postedDate: "11-04-2014" },
  { id: 11, seed: "bridge11", title: "Today", uploadDate: "9-08-2016", likes: 241, views: 87, comments: 29, dateLabel: "Image upload", postedDate: "11-04-2014" },
  { id: 12, seed: "river12", title: "Today", uploadDate: "9-08-2016", likes: 61, views: 35, comments: 11, dateLabel: "Image upload", postedDate: "11-04-2014" },
];
