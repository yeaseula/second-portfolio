import { projectInforType } from "../../types/portfolio";
import PostCard from "./PosterCard";


export default function PosterInner({ data }:{ data:projectInforType[] }) {
    return (
        <main>
        {data.map((data)=>(
            <PostCard key={data.contentsId} data={data}/>
        ))}
        </main>
    )
}