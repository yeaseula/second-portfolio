import { useState, useEffect, useCallback } from "react";

interface PosterProps {
    moreview: boolean
    modal: boolean
    contentId:string|null
    selected:string|null
    setContentId: (id:string|null)=>void
    setSelected: (id:string|null)=>void
    showMore: ()=> void
    hideMore: ()=>void
    openModal: (id:string|null)=>void
    closeModal: ()=>void
}

export function usePosterModal():PosterProps {
    const [moreview, setMoreview] = useState<boolean>(false)
    const [modal, setModal] = useState<boolean>(false)
    const [selected, setSelected] = useState<string | null>("")
    const [contentId, setContentId] = useState<string | null>(null)
    const showMore = useCallback(()=>setMoreview(true),[])
    const hideMore = useCallback(()=>{setMoreview(false)},[])

    const openModal = useCallback((id:string|null)=>{
        setModal(true)
        setMoreview(false)
        setContentId(id)
        setSelected(id)
    },[])

    const closeModal = useCallback(()=>{
        setModal(false)
        setMoreview(false)
        setContentId(null)
        setSelected(null)
    },[])

    return {
        moreview,modal,contentId,selected,
        setSelected,
        setContentId,
        showMore,hideMore,
        openModal, closeModal
    }
}