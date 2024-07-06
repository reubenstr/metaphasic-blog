import { remark } from "remark";
import html from "remark-html";

import matter from "gray-matter";

import {unified} from 'unified'
import rehypeRaw from 'rehype-raw'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import remarkFrontmatter from 'remark-frontmatter'
import remarkGfm from 'remark-gfm'


import remarkLocalVideoEmbedder from "./remarkLocalVideoEmbedder";

export default async function markdownToHtml(markdown: string) {

  // console.log("---------------------------")
  // console.log(markdown)
  // console.log("---------------------------")


  

  const result = await unified()
  .use(remarkParse)
  .use(remarkFrontmatter)
  .use(remarkGfm)
  .use(remarkRehype, { allowDangerousHtml: true })
  .use(rehypeRaw) 
  .use(remarkLocalVideoEmbedder)
  .use(rehypeStringify)
  .process(markdown)


  


  // const result = await unified()
  // .use(remarkParse)
  // .use(remarkRehype, {allowDangerousHtml: true})
  // .use(rehypeRaw)
  // .use(rehypeStringify)
  // .process(markdown)



  // const result = await remark()
  // .use(html, {allowDangerousHtml: true})
  // .use(remarkLocalVideoEmbedder)
  // .process(markdown)

  //console.log(result.toString())  
  console.log("---------------------------")

  return result.toString();
}
                 