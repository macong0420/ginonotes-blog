import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import { PostRoute, createPostRoute } from './src/lib/routes'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    category: { type: 'string', required: true },
    description: { type: 'string', required: true },
    tags: { type: 'string', required: false },
    cover: { type: 'string', required: false },
    slug: { type: 'string', required: false },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/posts/${post._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, {
        theme: 'github-dark',
        onVisitLine(node: any) {
          if (node.children.length === 0) {
            node.children = [{ type: 'text', value: ' ' }]
          }
        },
      }],
      [rehypeAutolinkHeadings, {
        properties: {
          className: ['anchor'],
        },
      }],
    ],
  },
})
