import PreviewTile from "../PreviewTile/PreviewTile"
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton"

export default function Recent() {
    return (
        <>
        <h2>Recent Posts <i className="fa-duotone fa-solid fa-scroll"></i></h2>
        <PreviewTile/>
        <PreviewTile/>
        <PreviewTile/>
        <PreviewTile/>
        <PreviewTile/>
        <LoadMoreButton/>
        </>
    )
}