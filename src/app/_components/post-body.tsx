import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
  repoLink: string;
};

export function PostBody({ content, repoLink }: Props) {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />

      <div className="flex justify-center items-center">
        <a className="repoLink" href={repoLink}>Source code, design files, and more on GitHub</a>
      </div>



    </div>
  );
}
