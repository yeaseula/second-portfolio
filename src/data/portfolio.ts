import { PortfolioType, projectInforType } from "../types/portfolio"

export const SkillHashColor = {
    'Next.js': '',

}
export const TABCONTENTS = [
    {
        id: 1,
        title: '상세설명',
    },
    {
        id: 2,
        title: '기술 선택 이유',
    },
    {
        id: 3,
        title: '트러블슈팅',
    },
    {
        id: 4,
        title: '회고',
    },
]

export const TABCONTENTS_TYPE2 = [
    {
        id: 1,
        title: '상세설명',
    },
    {
        id: 2,
        title: '기술 활용 포인트',
    },
    {
        id: 4,
        title: '회고',
    },
]

export const yeOriginal:projectInforType[] = [
{
    src: '/image/poster_bookdam_302.webp',
    srcSet: '/image/poster_bookdam_604.webp',
    alt:'책담 시즌2 포스터',
    srOnly: '책담 서비스 시즌2 공식 포스터 - 아늑한 분위기의 도서관 풍경',
    contentsId: 'bookdam2',
    title: '책담2(리팩토링)',
    period: '2025.11 - 2025.12',
    contribution: '기여도 100%',
    description: [
        {
            id: 'line1',
            des: '사용자의 리뷰 데이터와 관심분야를 분석해 맞춤형 도서를 추천하고,',
        },{
            id: 'line2',
            des: '독서 시간 기록 및 습관 형성을 지원하는 개인화 독서 관리 웹/앱 서비스입니다.'
        },{
            id: 'line3',
            des: '기획,디자인,백엔드/프론트 모두 1인 주도 개발했습니다.'
        }
    ],
    skills: ['Next.js','Typescript','supabase','zustand','tailwind CSS','styled-components']
},
{
    src: '/image/poster_maserati_302.webp',
    srcSet: '/image/poster_maserati_604.webp',
    alt:'마세라티 3D 갤러리 포스터',
    srOnly: '마세라티 3D 갤러리 공식 포스터 - 고급스러운 분위기의 마세라티 차량',
    contentsId: 'maserati',
    title: '마세라티 3D 갤러리',
    period: '2025.09 - 2025.09',
    contribution: '기여도 100%',
    description: [
        {
            id: 'line1',
            des: 'Three.js와 React로 제작한 인터랙티브 자동차 갤러리 입니다.',
        },{
            id: 'line2',
            des: 'glb 모델을 통해 입체감 있고 정교한 자동차 모델을 사용하였으며'
        },{
            id: 'line3',
            des: 'orbitcontrol을 이용해 360도 회전 및 확대 축소가 가능합니다.'
        }
    ],
    skills: ['React','React Three Fiber','tailwind']
},
    {
        src: '/image/poster_hero_302.webp',
        srcSet: '/image/poster_hero_604.webp',
        alt:'fight hero 포스터',
        srOnly: 'fight hero 공식 포스터 - 용사와 괴수가 맞서 싸우는 판타지풍 포스터',
        contentsId: 'fighthero',
        title: 'Fight Hero',
        period: '2025.08 - 2025.09 (2주)',
        contribution: '기여도 100%',
        description: [
            {
                id: 'line1',
                des: 'JavaScript 클래스 기반으로 구현한 판타지 미니 게임입니다.',
            },{
                id: 'line2',
                des: '생성형 AI를 활용해 대부분의 이미지 에셋을 제작했으며,'
            },{
                id: 'line3',
                des: '상속 및 확장을 활용해 다양한 캐릭터 특성을 구현했습니다.'
            }
        ],
        skills: ['javascript']
    }
]

export const personalProject:projectInforType[] = [

]

export const portfolio:PortfolioType[] = [
{
    id: 'bookdam2',
    video_url : '',
    title: '책담2(리팩토링)',
    period: '2025.11 - 2025.12',
    contribution: '기여도 100%',
    description: '기록은 쌓이고, 경험은 진화한다. \n 리팩토링으로 더 새로워진 책담 Season 2',
    hashtags: ['#1인 프로젝트','독서리뷰'],
    skills: ['Next.js','Typescript','supabaes','zustand','tailwind','style-components'],
    site_url: 'https://bookdam-ver2.vercel.app/',
    github_url: 'https://github.com/yeaseula/BookdamVer2',
},
{
    id: 'maserati',
    video_url : '',
    title: '마세라티 3D 갤러리',
    period: '2025.09 - 2025.09',
    contribution: '기여도 100%',
    description: '정교함을 회전시키다. Maserati 3D Experience',
    hashtags: ['#3D 전시장','#자동차'],
    skills: ['React','tailwind','Three.js','React Fiber'],
    site_url: 'https://maserati-3d-gallery.pages.dev',
    github_url: 'https://github.com/yeaseula/Maserati-3D-Gallery',
},
{
    id: 'fighthero',
    video_url : '',
    title: 'Fight Hero - 미니게임',
    period: '2025.08.21 - 2025.09.02',
    contribution: '기여도 100%',
    description: 'JavaScript 클래스 기반으로 구현한 판타지 미니 게임!',
    hashtags: ['#미니게임'],
    skills: ['javascript','html','css'],
    site_url: 'https://yeaseula.github.io/FightHero/',
    github_url: 'https://github.com/yeaseula/FightHero',
},
]