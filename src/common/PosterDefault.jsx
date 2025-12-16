import styled from "styled-components"

export default function PosterDefault({src,alt}) {
    return (
        <div>
            <button>
                <img src={src} alt={alt} />
            </button>
        </div>
    )
}