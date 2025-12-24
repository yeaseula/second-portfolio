import { projectInforType } from "../../types/dataType";
import PostCard from "./PosterCard";


export default function PosterInner({ data }:{ data:projectInforType[] }) {
    return (
        <>
        {data.map((data)=>(
            <PostCard key={data.contentsId} data={data}/>
        ))}
        </>
    )
}