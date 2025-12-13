import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useRef } from "react";
import Slides from "./Slides";

const BannerWrap = styled.section`
    margin-top: 45px;
    width: 100%;
    aspect-ratio: 1920 / 720;
    height: auto;
`

const SLIDE = [
    {
        backImage : 'url(/image/slide01.png)',
        maincopy : <>1,593 contributions <br /> in the last year</>,
        subcopy : <>보는 사람이 없을 때도, 만들었습니다.</>,
        link : '',
        button : '깃허브 바로가기'
    },
    {
        backImage : 'url(/image/slide02.png)',
        maincopy : <>AM 10:00 — PM 19:00<br />부트캠프<br />그 이후, 자격증 공부</>,
        subcopy : <>흐트러지지 않는 정신력<br />루틴으로 증명한 집요함</>,
        link : '',
        button : ''
    },
    {
        backImage : 'url(/image/slide03.png)',
        maincopy : <>백엔드 전원 이탈.<br />프로젝트 중단이 더 쉬운 선택이었습니다.</>,
        subcopy : <>새로운 백엔드 개발자를 영입해<br />기능을 확장하며 프로젝트를 완주했습니다.</>,
        link : '',
        button : '프로젝트 바로가기'
    },
    {
        backImage : 'url(/image/slide04.png)',
        maincopy : <>제주까지 날아가<br />컨퍼런스 무대에 섰습니다.</>,
        subcopy : <>만들고, 설명하고, 공유합니다.</>,
        link : '',
        button : '자료 보러가기'
    }
]

export default function Banner() {

    const SwiperRef = useRef((swiper)=>swiper.SwiperRef)
    return (
        <BannerWrap>
            <Swiper
            modules={[Navigation, Pagination, A11y]}
            ref={SwiperRef}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            loopAdditionalSlides={4}
            loopAddBlankSlides={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            style={{ height: '100%', overflow: 'visible' }}
            >
                {SLIDE.map((slide,idx)=>(
                <SwiperSlide
                key={`${idx}`}
                style={{ backgroundImage: slide.backImage, backgroundSize: 'contain', backgroundPositionY: '0' }}
                >
                    <Slides
                    maincopy={slide.maincopy}
                    subcopy={slide.subcopy}
                    link={slide.link}
                    button={slide.button}
                    />
                </SwiperSlide>
                ))}
            </Swiper>
        </BannerWrap>
    )
}