import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";

type Props = {
  title: string;
  coverImage: string;
  date: string;
};

export function PostHeader({ title, coverImage, date}: Props) {
  return (
    <>

      <div className="flex justify-between">
        <div className="text-left ">
          <PostTitle>{title}</PostTitle>
        </div>
        <div className="text-right text-lg mb-3 row-span-1 justify-self-center self-end" >
          <DateFormatter dateString={date} />
        </div>
      </div>

      <div className="mb-4 md:mb-8 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>

    </>
  );
}
