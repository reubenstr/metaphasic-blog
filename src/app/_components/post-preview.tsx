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
        <h3 className="text-2xl leading-snug md:mb-3 sm:mb-1">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="md:mb-4 sm:mb-2">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>        
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>     
    </div>
  );
}
