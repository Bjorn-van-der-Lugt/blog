import PreviewTile from "../PreviewTile/PreviewTile";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";

export default function Popular() {
    return(
        <>
        <h2>Popular Posts <i className="fa-duotone fa-solid fa-chess-king"></i></h2>
        <PreviewTile/>
        <PreviewTile/>
        <PreviewTile/>
        <PreviewTile/>
        <PreviewTile/>
        <LoadMoreButton/>
        </>
    )
}