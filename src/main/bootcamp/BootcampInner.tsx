import styled from "styled-components"

export default function BootCampInner() {
    return (
        <ToggleSection>
            <p className="text-3xl">프론트엔드 기초 역량</p>
            <div className="relative">
                <div className="mt-10">
                    <h3>학습 내용</h3>
                    <p className="mt-5 mb-3">HTML / CSS / Figma</p>

                    <p>• 시멘틱 마크업, 접근성을 고려한 설계가 가능합니다.</p>
                    <p>• Safari 환경에서의 CSS 크로스 브라우징 이슈 해결 경험이 있습니다.</p>
                    <p>• 개인,팀 프로젝트에 학습 내용을 적용하며 공부합니다.</p>
                    <p>• Figma 툴을 익히고, 디자이너와의 협업이 가능합니다.</p>
                </div>
                <div className="mt-10">
                    <h3>관련 프로젝트</h3>
                    <div className="mt-5">
                        <div className="text-">
                            <p><b>내용</b> : HTML/CSS 기반 미니 프로젝트 2개 제작 및 발표</p>
                            <p><b>역할</b> : 시멘틱 마크업, 반응형 작업 </p>
                            <p><b>성과</b> : 최종 발표 <b>대상(1등)</b> 수상</p>
                            <div className="mt-5">
                                <button>git hub 보러가기</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-1 right-0">
                    <DeskTopWrapper>
                        <img src="/image/imac-frame.png"
                        alt="imac frame"
                        className="relative z-3"/>
                        <DeskTopImgContainer>
                            <img src="/image/bootcamp-project1-pc.png"
                            alt="project capture"
                            className="project-image"
                            />
                        </DeskTopImgContainer>
                    </DeskTopWrapper>
                    <MobileWrapper>
                        <img src="/image/iphone-frame.png" alt=""
                        className="relative z-5"
                        />
                        <MobileImgContainer>
                            <img src="/image/bootcamp-project1-mobile.png" alt=""
                            className="project-image-mobile"/>
                        </MobileImgContainer>
                    </MobileWrapper>
                </div>
            </div>

        </ToggleSection>
    )
}

const ToggleSection = styled.div`
    flex: 1;
    width: 100%;
    margin-top: 30px;
    padding: 35px 20px;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
`
const DeskTopWrapper = styled.div`
    position: relative;
    width: 500px;
    &:hover {
        .project-image {
            transition: all 1.2s;
            transform: translateY(calc((100% - 270px) * -1))
        }
    }
`
const DeskTopImgContainer = styled.div`
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 1;
    width: 458px;
    height: 270px;
    overflow: hidden;
`
const MobileWrapper = styled.div`
    position: absolute;
    bottom: 0;
    left: -50px;
    z-index: 6;
    width: 170px;
    &:hover {
        .project-image-mobile {
            transition: all 1.2s;
            transform: translateY(calc((100% - 313px) * -1))
        }
    }
`
const MobileImgContainer = styled.div`
    position: absolute;
    top: 8px;
    left: 10px;
    z-index: 4;
    border-radius: 15px;
    width: 150px;
    height: 313px;
    overflow: hidden;
`