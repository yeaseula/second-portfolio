import styled from "styled-components";
import { usePosterModal } from "../../hook/useModal";

import { projectInforType } from "../../data/types/dataType";
import PostCard from "./PosterCard";


export default function PosterInner({ data }:{ data:projectInforType[] }) {
    const {
        moreview,modal,contentId,
        showMore,hideMore,
        openModal, closeModal
    } = usePosterModal()

    return (
        <>
        {data.map((data)=>(
            <PostCard key={data.contentsId} data={data}/>
        ))}
        </>
    )
}