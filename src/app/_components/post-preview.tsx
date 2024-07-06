import Link from "next/link";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  excerpt: string; 
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  excerpt, 
  slug,
}: Props) {
  return (
    <div>
        <h3 className="text-2xl mb-3 leading-snug">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>        
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>     
    </div>
  );
}
