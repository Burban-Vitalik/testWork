import { Heart, MessageCircle } from "lucide-react";
import type { Post } from "../../data/mockPosts";

interface PostTitleItemProps {
  post: Post;
}

export function PostTitleItem({ post }: PostTitleItemProps) {
  return (
    <div 
      className="flex flex-col bg-white rounded-xl overflow-hidden border border-gray-100 shadow-xs w-full"
      data-testid={`tile-post-${post.id}`}
    >
      <div className="w-full aspect-square overflow-hidden bg-gray-50 flex-shrink-0">
        <img
          src={`https://picsum.photos/seed/${post.seed}/400/400`}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4 flex flex-col justify-between flex-grow gap-3 text-xs">
        
        <div className="flex justify-between items-baseline gap-2">
          <span className="font-medium text-slate-500 truncate">
            {post.dateLabel || "Image upload"}
          </span>
          <span className="text-gray-400 font-medium flex-shrink-0 whitespace-nowrap">
            {post.uploadDate || "11-04-2014"}
          </span>
        </div>

        <div className="flex justify-between items-center font-bold text-slate-800">
          <div className="flex flex-col gap-1.5 text-left">
            <span className="flex items-center gap-2 min-w-0">
              <Heart size={14} className="fill-slate-900 stroke-slate-900 flex-shrink-0" />
              <span className="truncate">{post.likes ?? 128}</span>
            </span>
            <span className="flex items-center gap-2 min-w-0">
              <MessageCircle size={14} className="fill-slate-900 stroke-slate-900 flex-shrink-0" />
              <span className="truncate">{post.comments ?? 22}</span>
            </span>
          </div>

          <div className="flex flex-col gap-1.5 items-end text-slate-300 font-medium">
            <span className="flex items-center gap-2 min-w-0">
              <Heart size={14} className="fill-slate-200 stroke-slate-200 flex-shrink-0" />
              <span className="truncate">67</span>
            </span>
            <span className="flex items-center gap-2 min-w-0">
              <MessageCircle size={14} className="fill-slate-200 stroke-slate-200 flex-shrink-0" />
              <span className="truncate">22</span>
            </span>
          </div>
        </div>

        <div className="flex justify-between items-baseline pt-0.5">
          <span className="font-bold text-slate-900 text-sm truncate pr-1">
            {post.title || "Today"}
          </span>
          <span className="font-bold text-slate-700 whitespace-nowrap">
            {post.postedDate || "9-08-2016"}
          </span>
        </div>

      </div>
    </div>
  );
}