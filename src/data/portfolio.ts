import { PortfolioType } from "../types/portfolio"
import { projectInforType } from "./types/dataType"

export const SkillHashColor = {
    'Next.js': '',

}

export const yeOriginal:projectInforType[] = [
{
    src: '/image/poster_bookdam_302.webp',
    srcSet: '/image/poster_bookdam_604.webp',
    alt:'책담 시즌2 포스터',
    srOnly: '책담 서비스 시즌2 공식 포스터 - 아늑한 분위기의 도서관 풍경',
    contentsId: 'bookdam2'
},
]

export const personalProject:projectInforType[] = [
    {
        src: '/image/poster_maserati_302.webp',
        srcSet: '/image/poster_maserati_604.webp',
        alt:'마세라티 3D 갤러리 포스터',
        srOnly: '마세라티 3D 갤러리 공식 포스터 - 고급스러운 분위기의 마세라티 차량',
        contentsId: 'maserati'
    }
]

export const portfolio:PortfolioType[] = [
{
    id: 'bookdam2',
    video_url : '',
    title: '책담2(리팩토링)',
    period: '2025.11 - 2025.12',
    contribution: '기여도 100%',
    description: '기록은 쌓이고, 경험은 진화한다. \n리팩토링으로 더 새로워진 책담 Season 2',
    hashtags: ['#1인 프로젝트','독서리뷰'],
    skills: ['Next.js','Typescript','supabaes','zustand','tailwind','style-components'],
    site_url: '',
    github_url: '',
},
]