import { NavigationConfig } from '@/types/navigation'
import {
  FaHome,
  FaUser,
  FaCode,
  FaBrain,
  FaLaptopCode,
  FaRocket,
  FaBook,
  FaLightbulb,
  FaGithub,
  FaTwitter,
  FaRobot,
} from 'react-icons/fa'
import { allPosts } from 'contentlayer/generated'
import { createCategoryRoute } from '@/lib/routes'

// 获取每个分类的文章数量
const getCategoryCount = (category: string) => {
  return allPosts.filter((post) => post.category === category).length
}

export const navigation: NavigationConfig = {
  main: [
    { href: '/', label: '首页', icon: FaHome },
    { href: '/about', label: '关于我', icon: FaUser },
  ],
  posts: [
    {
      href: createCategoryRoute('dev'),
      label: '编程开发',
      icon: FaLaptopCode,
      count: getCategoryCount('dev'),
    },
    {
      href: createCategoryRoute('ai'),
      label: '人工智能',
      icon: FaBrain,
      count: getCategoryCount('ai'),
    },
    {
      href: createCategoryRoute('build'),
      label: '构建之路',
      icon: FaRocket,
      count: getCategoryCount('build'),
    },
    {
      href: createCategoryRoute('reading'),
      label: '阅读记录',
      icon: FaBook,
      count: getCategoryCount('reading'),
    },
    {
      href: createCategoryRoute('thoughts'),
      label: '思考随笔',
      icon: FaLightbulb,
      count: getCategoryCount('thoughts'),
    },
  ],
  projects: [
    { href: 'https://shuiyin.yc0501.online/', label: '图片水印', icon: FaCode },
    { href: 'https://openalternative.co/', label: '开源替代', icon: FaCode },
    
  ],
  online: [
    { href: 'https://github.com/macongcong', label: 'GitHub', icon: FaGithub },
    {
      href: 'https://x.com/Snipercccc',
      label: 'Twitter',
      icon: FaTwitter,
    },
  ],
}
