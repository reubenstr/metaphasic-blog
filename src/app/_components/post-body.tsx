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
      <a href={repoLink}>GitHub</a>
    </div>
  );
}
