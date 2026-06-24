import { Heart, MessageCircle } from "lucide-react";
import type { Post } from "../../data/mockPosts";

interface PostRowItemProps {
  post: Post;
}

export function PostRowItem({ post }: PostRowItemProps) {
  return (
    <div
      className="flex items-center justify-between p-4 bg-white border-b border-gray-100 last:border-none transition-colors gap-4"
      data-testid={`row-post-${post.id}`}
    >
      <div className="flex items-center gap-4 flex-1 min-w-0">
        <img
          src={`https://picsum.photos/seed/${post.seed}/80/80`}
          alt={post.title}
          className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
          data-testid={`img-post-${post.id}`}
        />

        <div className="flex flex-col gap-1 min-w-0">
          <span className="text-sm font-semibold text-black truncate">
            {post.title}
          </span>
          <div className="flex items-center gap-4 text-xs font-bold text-black">
            <span className="flex items-center gap-1">
              <Heart size={14} className="text-black fill-black" />
              <span>{post.likes}</span>
            </span>
            <span className="flex items-center gap-1">
              <MessageCircle size={14} className="text-black fill-black" />
              <span>{post.comments}</span>
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-12 md:gap-16 flex-shrink-0 text-right">
        <div className="flex flex-col">
          <span className="text-sm font-bold text-black tracking-tight">
            {post.postedDate || "11-04-2014"}
          </span>
          <div className="flex items-center gap-4 text-xs font-bold text-black">
            <span className="flex items-center gap-1">
              <Heart size={14} className="text-black fill-black" />
              <span>{post.likes}</span>
            </span>
            <span className="flex items-center gap-1">
              <MessageCircle size={14} className="text-black fill-black" />
              <span>{post.comments}</span>
            </span>
          </div>
        </div>

        <div className="flex flex-col min-w-[90px]">
          <span className="text-sm font-medium text-black">
            {post.dateLabel || "Image upload"}
          </span>
          <span className="text-xs font-bold text-black mt-0.5">
            {post.uploadDate || "9-08-2016"}
          </span>
        </div>
      </div>
    </div>
  );
}