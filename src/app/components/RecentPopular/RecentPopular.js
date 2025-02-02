import PreviewTile from "../PreviewTile/PreviewTile";

export default function RecentPopular() {
    const previewCount = 5; 

    return (
        <>
         <section>
            <h2>Recent Posts <i className="fa-duotone fa-solid fa-scroll"></i></h2>
            {Array(previewCount).fill().map((_, index) => (
                <PreviewTile key={index} />
            ))}
                <button className="load-more-button">Load More <i className="fa-duotone fa-solid fa-brain"></i></button>
        </section>
        <section>
            <h2>Popular Posts <i className="fa-duotone fa-solid fa-chess-king"></i></h2>
            {Array(previewCount).fill().map((_, index) => (
                <PreviewTile key={index} />
            ))}
            <button className="load-more-button">Load More <i className="fa-duotone fa-solid fa-brain"></i></button>
        </section>
        </>
    );
}
