import { WEBSITE_HOST_URL } from '@/lib/constants'
import type { Metadata } from 'next'
import { FaBasketballBall, FaBook, FaRobot, FaJava, FaGithub, FaTwitter } from 'react-icons/fa'
import { SiSpring, SiNextdotjs, SiMongodb, SiSwift, SiFlutter, SiReact } from 'react-icons/si'
import { GiChessKing } from 'react-icons/gi'
import { HiMail } from 'react-icons/hi'
import { BsRobot, BsGear } from 'react-icons/bs'
import { Container } from '@/components/common/Container'

const meta = {
    title: '关于我 - Just be funny',
    description: '开发工程师，AI 爱好者，篮球迷，终身学习者。每周发送 AI 精选文章，欢迎订阅！',
    url: `${WEBSITE_HOST_URL}/about`,
}

export const metadata: Metadata = {
    metadataBase: new URL(WEBSITE_HOST_URL),
    title: meta.title,
    description: meta.description,
    openGraph: {
        title: meta.title,
        description: meta.description,
        url: meta.url,
        type: 'website',
    },
    twitter: {
        title: meta.title,
        description: meta.description,
        card: 'summary_large_image',
    },
    alternates: {
        canonical: meta.url,
    },
}

const skills = [
    { icon: SiSwift, name: 'iOS', color: 'text-orange-500' },
    { icon: SiFlutter, name: 'Flutter', color: 'text-blue-500' },
    { icon: SiReact, name: 'React', color: 'text-blue-400' },
    { icon: SiNextdotjs, name: 'Next.js', color: 'text-gray-800 dark:text-gray-200' },
    { icon: BsRobot, name: 'RAG', color: 'text-purple-500' },
    { icon: FaRobot, name: 'Agent', color: 'text-emerald-500' },
]

const interests = [
    {
        icon: FaBasketballBall,
        title: '篮球',
        description: '热爱篮球运动，享受团队协作的乐趣'
    },
    {
        icon: GiChessKing,
        title: '中国象棋',
        description: '享受博弈的乐趣，提升思维能力'
    },
    {
        icon: FaBook,
        title: '阅读',
        description: '保持学习的习惯，探索不同领域的知识'
    },
    {
        icon: FaRobot,
        title: 'AI 产品',
        description: '关注并评测最新的 AI 产品和技术'
    },
]

const contacts = [
    {
        icon: FaGithub,
        name: 'GitHub',
        value: 'macong0420',
        link: 'https://github.com/macong0420',
        color: 'text-gray-800 dark:text-gray-200',
    },
    {
        icon: FaTwitter,
        name: 'Twitter',
        value: '@Snipercccc',
        link: 'https://x.com/Snipercccc',
        color: 'text-blue-400',
    },
    {
        icon: HiMail,
        name: '邮件',
        value: 'macong0420@gmail.com',
        link: 'mailto:macong0420@gmail.com',
        color: 'text-red-500',
    },
]

export default function About() {
    return (
        <Container size="md">
            <div className="py-12 sm:py-16 lg:py-20">
                {/* 头部介绍 */}
                <div>
                    <h1 className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
                        Just be funny~
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
                        👋 你好！我是一名客户端开发工程师，负责架构设计和核心功能开发。主要从事 iOS、Flutter 和前端开发工作，热衷于探索新技术，追求代码质量和用户体验的完美统一。在空闲时间，我会研究人工智能和 Web3 项目，同时运营着
                        <a href="https://bestblogs.dev" target="_blank" rel="noopener noreferrer" className="px-1 text-blue-500 hover:text-blue-600">
                            bestblogs.dev
                        </a>
                        ，每周发送 AI 精选文章，目前已有超过 2000 位订阅者。我相信技术不仅仅是工具，更是创造价值和改变世界的力量。
                    </p>
                </div>

                {/* 技术栈 */}
                <div className="mt-16">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">技术栈</h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-400">
                        我的技术栈包含 iOS、Flutter 和前端开发，能够独立完成移动端和 Web 端的项目开发。
                    </p>
                    <div className="mt-8 flex flex-wrap gap-6">
                        {skills.map((skill) => (
                            <div key={skill.name} className="flex items-center gap-2">
                                <skill.icon className={`h-6 w-6 ${skill.color}`} />
                                <span className="text-gray-800 dark:text-gray-200">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 兴趣爱好 */}
                <div className="mt-16">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">兴趣爱好</h2>
                    <div className="mt-8 grid gap-6 sm:grid-cols-2">
                        {interests.map((interest) => (
                            <div
                                key={interest.title}
                                className="group rounded-2xl bg-white/50 p-6 shadow-md transition-all hover:shadow-xl dark:bg-gray-800/50"
                            >
                                <interest.icon className="h-8 w-8 text-blue-500" />
                                <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
                                    {interest.title}
                                </h3>
                                <p className="mt-2 text-gray-600 dark:text-gray-400">
                                    {interest.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 博客目的 */}
                <div className="mt-16">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">关于博客</h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-400">
                        这里是我的数字花园，记录日常学习和思考的内容。你可以找到关于编程技术、人工智能、产品设计的文章，
                        也可以看到我的阅读笔记和生活随想。希望这些内容能够帮助到你，也欢迎与我交流讨论。
                    </p>
                </div>

                {/* 联系方式 */}
                <div className="mt-16">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">联系方式</h2>
                    <div className="mt-8 grid gap-6 sm:grid-cols-2">
                        {contacts.map((contact) => (
                            <div key={contact.name} className="flex items-center gap-4">
                                <contact.icon className={`h-6 w-6 ${contact.color}`} />
                                <div className="flex flex-col">
                                    <span className="text-sm text-gray-500 dark:text-gray-400">{contact.name}</span>
                                    {contact.link ? (
                                        <a
                                            href={contact.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400"
                                        >
                                            {contact.value}
                                        </a>
                                    ) : (
                                        <span className="text-gray-900 dark:text-gray-100">{contact.value}</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 订阅提示 */}
                <div className="mt-16">
                    <div className="rounded-2xl bg-blue-50 p-6 dark:bg-blue-900/20">
                        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100">
                            📬 免费订阅我的 AI 周刊
                        </h3>
                        <p className="mt-2 text-blue-800 dark:text-blue-200">
                            每周精选高质量的 AI 文章，帮助你跟上人工智能的最新发展。已有超过 2000 位读者订阅，欢迎加入我们！
                        </p>
                        <a
                            href="https://www.bestblogs.dev/#subscribe"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                        >
                            立即订阅
                        </a>
                    </div>
                </div>
            </div>
        </Container>
    )
}
