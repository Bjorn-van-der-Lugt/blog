"use client";

import React from "react";
import { useState } from "react";
import ResponsiveImageClient from "../components/ResponsiveImageClient/ResponsiveImageClient";

export default function AdminPanel() {
  const [jsonInput, setJsonInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [previewData, setPreviewData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      let postData = JSON.parse(jsonInput);
      postData.metadata.createdAt = new Date(postData.metadata.createdAt);

      const response = await fetch("/api/posts/insert", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData),
      });

      const data = await response.json();
      setMessage(data.message || data.error);
    } catch (error) {
      setMessage("Invalid JSON format");
    }

    setLoading(false);
  };

  const handlePreview = () => {
    try {
      const postData = JSON.parse(jsonInput);
      setPreviewData(postData);
      setMessage("");
    } catch (error) {
      setMessage("Invalid JSON format");
      setPreviewData(null);
    }
  };

  return (
    <div className="page-container">
      <h2>Insert JSON Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Paste your JSON here"
          value={jsonInput}
          onChange={(e) => setJsonInput(e.target.value)}
          required
        />
        <button type="button" onClick={handlePreview}>
          Preview
        </button>
        <button type="submit" disabled={loading}>
          {loading ? "Posting..." : "Submit JSON"}
        </button>
      </form>

      {message && <p>{message}</p>}

      {previewData?.article && (
        <div className="preview">
          <article>
            <section>
              <h1>{previewData.metadata.title}</h1>
              {(() => {
                const firstImageContent = previewData.article.sections[0]?.content?.find(
                  (item) => item.type === "image"
                );
                const firstImage = firstImageContent?.image[0];

                return firstImage ? (
                  <figure>
                    <ResponsiveImageClient
                      src={firstImage.src}
                      alt={firstImage.alt}
                      aspectRatio={firstImage.aspectRatio}
                      priority={true}
                    />
                    {firstImage && <figcaption>{firstImage.caption}</figcaption>}
                  </figure>
                ) : null;
              })()}
              <div className="metadata">
                <p>
                  <strong>Title:</strong> {previewData.metadata.title}
                </p>
                <p>
                  <strong>Summary:</strong> {previewData.metadata.summary}
                </p>
                <p>
                  <strong>Author:</strong> {previewData.metadata.author}
                </p>
                <p>
                  <strong>Category:</strong> {previewData.metadata.category}
                </p>
                <p>
                  <strong>Tags:</strong> {previewData.metadata.tags.join(" | ")}
                </p>
                <p>
                  <strong>Reading Time:</strong> {previewData.metadata.readingTime}
                </p>
                <p>
                  <strong>Date:</strong>{" "}
                  {previewData.metadata.createdAt
                    ? new Date(previewData.metadata.createdAt).toLocaleDateString()
                    : "Unknown"}
                </p>
              </div>
              {previewData.article.sections[0]?.content?.map((item, index) => {
                if (index === 0 && item.type === "image") {
                  return null;
                }
                switch (item.type) {
                  case "heading":
                    return React.createElement(`h${item.level || 2}`, { key: index }, item.text);

                  case "paragraph":
                    return <p key={index}>{item.text}</p>;

                  case "list":
                    return item.list?.ordered ? (
                      <ol key={index}>
                        {item.list.items.map((listItem, lIndex) => (
                          <li key={lIndex}>{listItem}</li>
                        ))}
                      </ol>
                    ) : (
                      <ul key={index}>
                        {item.list.items.map((listItem, lIndex) => (
                          <li key={lIndex}>{listItem}</li>
                        ))}
                      </ul>
                    );

                  case "image":
                    return item.image.map((img, imgIndex) => (
                      <figure key={imgIndex}>
                        <ResponsiveImageClient
                          src={img.src}
                          alt={img.alt}
                          aspectRatio={img.aspectRatio}
                        />
                        {img.caption && <figcaption>{img.caption}</figcaption>}
                      </figure>
                    ));
                  default:
                    return null;
                }
              })}
            </section>
            {previewData.article.sections.slice(1).map((section, sectionIndex) => (
              <section key={sectionIndex + 1}>
                {section.content.map((item, contentIndex) => {
                  switch (item.type) {
                    case "heading":
                      return React.createElement(`h${item.level || 2}`, { key: contentIndex }, item.text);

                    case "paragraph":
                      return <p key={contentIndex}>{item.text}</p>;

                    case "list":
                      return item.list?.ordered ? (
                        <ol key={contentIndex}>
                          {item.list.items.map((item, listIndex) => (
                            <li key={listIndex}>{item}</li>
                          ))}
                        </ol>
                      ) : (
                        <ul key={contentIndex}>
                          {item.list.items.map((item, listIndex) => (
                            <li key={listIndex}>{item}</li>
                          ))}
                        </ul>
                      );

                    case "image":
                      return item.image.map((img, imgIndex) => (
                        <figure key={imgIndex}>
                          <ResponsiveImageClient
                            src={img.src}
                            alt={img.alt}
                            aspectRatio={img.aspectRatio}
                          />
                          {img.caption && <figcaption>{img.caption}</figcaption>}
                        </figure>
                      ));
                    default:
                      return null;
                  }
                })}
              </section>
            ))}
          </article>
        </div>
      )}
    </div>
  );
}
