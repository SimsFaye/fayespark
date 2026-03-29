import avatar from '../assets/images/faye_portrait_transp.png';
import hero from '../assets/images/hero_livingroom.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://fayespark.com',
    avatar: {
        src: avatar,
        alt: 'Faye Zhang'
    },
    title: 'Fayespark',
    displayName: 'Faye',
    subtitle: '感谢家人们参观我的个人主页～',
    description: 'Astro.js and Tailwind CSS theme for blog and portfolio by justgoodui.com',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Build',
            href: '/build'
        },
        {
            text: 'Life',
            href: '/life'
        },
        {
            text: 'Gallery',
            href: '/gallery'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },

    ],
    socialLinks: [
        {
            text: 'Instagram',
            href: 'https://www.instagram.com/faye_myinsta/'
        },
        {
            text: 'X/Twitter',
            href: 'https://x.com/Faye_MyTwi'
        }
    ],
    hero: {
        title: '欢迎来到 FayeSpark 数字花园 🪴',
        text: "我是Faye，一个正在探索AI轻创业的25岁女生。  \n这里将记录我从零开始做轻创业的真实经历、投资思考、以及我在现实和游戏中的各种旅程。\n\n闲暇时，我最大的乐趣是玩《模拟人生4》的建筑模式和宅家看Youtube打Switch。  \n在生活与财务规划上，我的目标是让被动收入覆盖生活成本从而实现真正的自由躺平💪。我也会在这里分享一些相关经验和书籍。\n\n为了保持生活的松弛感，我的固定休息日是周三、周六，以及随机一个只想躺平的日子。",
        image: {
            src: hero,
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Contact',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        enabled: true,
        title: '订阅 FayeSpark 更新',
        text: '每周一封邮件，获取最新的创业记录、生活分享和摄影作品，直达你的收件箱。',
        form: {
            action: '#'
        }
    },
    postsPerPage: 8,
    projectsPerPage: 8,
    galleryPerPage: 12
};

export default siteConfig;
