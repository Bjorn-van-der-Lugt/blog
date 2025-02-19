return (
    <div className="page-container">
        <article>
            <section>
                <h1>{postData.article.title}</h1>
                {postData.article.sections[0].images[0] && (
                    <>
                        <ResponsiveImage
                            src={postData.article.sections[0].images[0].src}
                            alt={postData.article.sections[0].images[0].alt}
                            aspectRatio={postData.article.sections[0].images[0].aspectRatio}
                            {...(postData.article.sections[0].images[0].priority && { priority: true })}
                        />
                        {postData.article.sections[0].images[0].caption && (
                            <figcaption>{postData.article.sections[0].images[0].caption}</figcaption>
                        )}
                    </>
                )}
                <div className="metadata">
                            <p><strong>Category:</strong> {postData.article.metadata.category}</p>
                            <p><strong>Author:</strong> {postData.article.metadata.author}</p>
                            <p><strong>Tags:</strong> {postData.article.metadata.tags.join("| ")}</p>
                            <p><strong>Date:</strong> {new Date(postData.article.metadata.createdAt).toLocaleDateString()}</p>
                        </div>
            </section>

            {postData.article.sections.slice(1).map((section, index) => (
                <section key={index}>
                    <h2>{section.heading}</h2>
                    
                    {section.paragraphs.map((paragraph, pIndex) => (
                        <>
                            {paragraph.images?.map((image, iIndex) => (
                                image.caption ? (
                                    <figure key={iIndex}>
                                        <ResponsiveImage
                                            src={image.src}
                                            alt={image.alt}
                                            aspectRatio={image.aspectRatio}
                                            {...(image.priority && { priority: true })}
                                        />
                                        <figcaption>{image.caption}</figcaption>
                                    </figure>
                                ) : (
                                    <ResponsiveImage
                                        key={iIndex}
                                        src={image.src}
                                        alt={image.alt}
                                        aspectRatio={image.aspectRatio}
                                        {...(image.priority && { priority: true })}
                                    />
                                )
                            ))}
                            <p>{paragraph.content}</p>
                        </>
                    ))}
                </section>
            ))}
        </article>
    </div>
);
