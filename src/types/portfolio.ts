export interface PortfolioType {
    id: string;
    video_url : string;
    title: string;
    period: string;
    contribution: string;
    description: string;
    hashtags: string[];
    skills: string[];
    site_url: string;
    github_url: string;
}

export interface TabContent {
    description?: string
    skills?: string
    trouble?: string
    retrospect?: string
    skillPoint?: string
}

export interface AllPortfolioTypes {
    topDataType: PortfolioType | null;
    tapDataType: TabContent | null;
}

export interface TabType {
    tab_contents: {
        tab_description: string;
        tab_skills: {
            skill_category: string;
            skill_env: {
                skill_logo?: string;
                logo_alt?: string;
                logo_width?: number;
                logo_height?: number;
                skill_name: string;
                skill_desc: string;
            }[];
        }[];
        tab_trouble: {
            title: string;
            contents: string;
        }[];
        tab_retrospect: string;
    }
}