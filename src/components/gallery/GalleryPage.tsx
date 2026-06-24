import { useState } from "react";
import { MOCK_POSTS } from "../../data/mockPosts";
import { PostRowItem } from "../gallery/PostRowItem";
import { Button } from "../ui/button";
import PostTitleItem from "./PostTitleItem";

type ViewMode = "rows" | "tiles";

interface GalleryPageProps {
  viewMode?: ViewMode;
}

const INITIAL_COUNT = 8;
const LOAD_MORE_COUNT = 4;

export function GalleryPage({ viewMode = "rows" }: GalleryPageProps) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const visiblePosts = MOCK_POSTS.slice(0, visibleCount);
  const hasMore = visibleCount < MOCK_POSTS.length;

  function handleLoadMore() {
    setVisibleCount((prev) => Math.min(prev + LOAD_MORE_COUNT, MOCK_POSTS.length));
  }

  return (
    <div className="w-full">
      {viewMode === "rows" ? (
        <div
          data-testid="posts-rows"
          className="bg-white rounded-xl divide-y divide-gray-100 overflow-hidden shadow-xs border border-gray-100/50"
        >
          {visiblePosts.map((post) => (
            <PostRowItem key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div
          data-testid="posts-tiles"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          {visiblePosts.map((post) => (
            <PostTitleItem key={post.id} post={post} />
          ))}
        </div>
      )}

      {hasMore && (
        <div className="flex justify-center mt-10">
          <Button
            onClick={handleLoadMore}
            data-testid="btn-load-more"
            className="px-8 py-2.5 text-xs font-bold border border-gray-300 text-gray-500 hover:text-gray-700 bg-white hover:bg-gray-50 shadow-xs rounded-full uppercase tracking-wider transition-all duration-200 cursor-pointer"
          >
            Load more
          </Button>
        </div>
      )}
    </div>
  );
}