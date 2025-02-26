import { notFound } from 'next/navigation'
import { allPosts } from 'contentlayer/generated'
import { getMDXComponent } from 'next-contentlayer/hooks'
import { TableOfContents } from '@/components/post/TableOfContents'
import { ReadingProgress } from '@/components/post/ReadingProgress'
import { Container } from '@/components/common/Container'
import { calculateReadingTime } from '@/lib/utils'
import { PostHeader } from '@/components/post/PostHeader'
import { PostContent } from '@/components/post/PostContent'
import { PostFooter } from '@/components/post/PostFooter'

interface PostProps {
    params: {
        slug: string[]
    }
}

// 获取上一篇和下一篇文章（同分类）
const getAdjacentPosts = (currentPost: any) => {
    const categoryPosts = allPosts
        .filter(post => post.category === currentPost.category && post._id !== currentPost._id)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    return { categoryPosts }
}

// 获取推荐文章
const getRecommendedPosts = (currentPost: any, categoryPosts: any[]) => {
    // 如果同类文章不足4篇，则补充最新文章
    if (categoryPosts.length < 4) {
        const latestPosts = allPosts
            .filter(post => post._id !== currentPost._id && post.category !== currentPost.category)
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .slice(0, 4 - categoryPosts.length)

        return [...categoryPosts, ...latestPosts].slice(0, 4)
    }

    return categoryPosts.slice(0, 4)
}

export const generateStaticParams = async () =>
    allPosts.map((post) => ({
        slug: post.url.replace('/posts/', '').split('/')
    }))

export const generateMetadata = ({ params }: PostProps) => {
    const post = allPosts.find((post) => {
        const urlPath = post.url.replace('/posts/', '')
        return urlPath === params.slug.join('/')
    })

    if (!post) return {}
    return {
        title: post.title,
        description: post.description
    }
}

function stripMarkdownLinks(text: string): string {
    // 匹配 Markdown 链接语法 [text](url)
    return text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
}

function extractHeadings(content: string) {
    const headingRegex = /^#{2,4}\s+(.+)$/gm
    const headings: { level: number; text: string }[] = []
    let match

    while ((match = headingRegex.exec(content)) !== null) {
        const text = stripMarkdownLinks(match[1])
        const level = match[0].split('#').length - 1
        headings.push({ level, text })
    }

    return headings
}

const PostLayout = ({ params }: PostProps) => {
    const post = allPosts.find((post) => {
        const urlPath = post.url.replace('/posts/', '')
        return urlPath === params.slug.join('/')
    })

    if (!post) notFound()

    const Content = getMDXComponent(post.body.code)
    const readingTime = calculateReadingTime(post.body.raw)
    const { categoryPosts } = getAdjacentPosts(post)
    const recommendedPosts = getRecommendedPosts(post, categoryPosts)
    const headings = extractHeadings(post.body.raw)

    return (
        <div className="relative w-full min-h-screen">
            <ReadingProgress />
            <Container size="default">
                <div className="py-10 lg:py-12">
                    <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,_1fr)_240px] gap-10">
                        {/* 中间内容区 */}
                        <main className="min-w-0">
                            <div className="max-w-3xl">
                                <article>
                                    <PostHeader
                                        title={post.title}
                                        date={post.date}
                                        readingTime={readingTime}
                                        category={post.category}
                                    />
                                    <div className="prose prose-lg dark:prose-invert max-w-none">
                                        <PostContent>
                                            <Content />
                                        </PostContent>
                                    </div>
                                </article>

                                <div className="mt-16">
                                    <PostFooter
                                        tags={post.tags}
                                        recommendedPosts={recommendedPosts}
                                        category={post.category}
                                        categoryPostsCount={categoryPosts.length}
                                    />
                                </div>
                            </div>
                        </main>

                        {/* 右侧目录 */}
                        <aside className="hidden xl:block">
                            <div className="sticky top-24">
                                <TableOfContents headings={headings} />
                            </div>
                        </aside>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default PostLayout
