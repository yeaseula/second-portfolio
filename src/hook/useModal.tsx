import { useState, useEffect, useCallback } from "react";

interface PosterProps {
    moreview: boolean
    modal: boolean
    contentId:string|null
    showMore: ()=> void
    hideMore: ()=>void
    openModal: (id:string|null)=>void
    closeModal: ()=>void
}

export function usePosterModal():PosterProps {
    const [moreview, setMoreview] = useState<boolean>(false)
    const [modal, setModal] = useState<boolean>(false)
    const [contentId, setContentId] = useState<string | null>(null)

    const showMore = useCallback(()=>setMoreview(true),[])
    const hideMore = useCallback(()=>{setMoreview(false)},[])

    const openModal = useCallback((id:string|null)=>{
        setModal(true)
        setMoreview(false)
        setContentId(id)
    },[])

    const closeModal = useCallback(()=>{
        setModal(false)
        setMoreview(false)
        setContentId(null)
    },[])

    return {
        moreview,modal,contentId,
        showMore,hideMore,
        openModal, closeModal
    }
}