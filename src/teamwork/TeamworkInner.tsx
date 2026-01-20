import styled from "styled-components"
import { TeamWorkData, TeamWorkData2 } from "../data/teamwork/teamwork"
import { RiDownload2Line } from "@remixicon/react"

export default function TeamworkInner() {
    return (
        <section className="">
            <div>
                <h2 className="sr-only">팀 활동 역량</h2>
                <div className="mt-3 bg-amber-50 py-4 px-5 rounded-xl">
                    함께 성장하며, 기여하는 문화를 구축하기 위해 노력했습니다.<br />
                    이러한 역량을 바탕으로 기획, 디자인, 개발 전반적인 프로세스에서 의견을 제시할 수 있고<br />
                    문서화를 통해 프로세스를 공유하려 노력합니다.
                </div>
                {TeamWorkData.map((data)=>(
                <div key={data.id} className="flex gap-9 mt-10 border-b border-gray-300 pb-10">
                    <div className="flex-1">
                        <p className="ff-b text-3xl mb-4">{data.title}</p>
                        <div className="mb-6">
                            {data.contents.map((contents)=>(
                                <Descrpition key={contents.id}> {contents.data}</Descrpition>
                            ))}
                        </div>
                        <a href={data.downloadFile}
                        download={data.downloadName}
                        className="inline-block border border-gray-400 rounded-full px-5 py-1"
                        >
                            <RiDownload2Line size={16} className="inline-block mr-2"/>
                            {data.downloadBtnName}
                        </a>
                    </div>
                    <div className="w-200">
                        <img src={data.imageFile} alt={data.imageAlt} />
                    </div>
                </div>
                ))}

                {TeamWorkData2.map((data)=>(
                    <div key={data.id} className="mt-10 border-b border-gray-300 pb-10">
                        <p className="ff-b text-3xl mb-4">{data.title}</p>
                        {data.titledes.map((des)=>(
                            <Descrpition key={des.id}>{des.data}</Descrpition>
                        ))}
                        <div className="mt-14 grid grid-cols-2 gap-9">
                            {data.contents.map((cont)=>(
                                <div key={cont.id} className={cont.id === 'content-2-3' ? 'col-span-2' : ''}>
                                    <div className="flex gap-9 image-container">
                                        {cont.imageFile.map((img)=>(
                                            <div key={img}>
                                                <img src={img} alt={cont.imageAlt} />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-5 text">
                                        {cont.des.map((des)=>(
                                            <Descrpition key={des.id}>{des.contents}</Descrpition>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

const Descrpition = styled.p`
    position: relative;
    padding-left: 30px;
    margin-bottom: 5px;
    &::before {
        content: '';
        position: absolute;
        top: 9px;
        left: 10px;
        display: inline-block;
        width: 6px;
        height: 6px;
        border: 1px solid #757575;
        border-radius: 100px;
        background: #fff;
    }
`