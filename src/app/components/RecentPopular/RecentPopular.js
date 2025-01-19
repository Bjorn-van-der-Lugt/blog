import PreviewTile from "../PreviewTile/PreviewTile";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";

export default function RecentPopular() {
    const previewCount = 5; 

    return (
        <>
         <section>
            <h2>Recent Posts <i className="fa-duotone fa-solid fa-scroll"></i></h2>
            {Array(previewCount).fill().map((_, index) => (
                <PreviewTile key={index} />
            ))}
                <LoadMoreButton/>
        </section>
        <section>
            <h2>Popular Posts <i className="fa-duotone fa-solid fa-chess-king"></i></h2>
            {Array(previewCount).fill().map((_, index) => (
                <PreviewTile key={index} />
            ))}
            <LoadMoreButton />
        </section>
        </>
    );
}
