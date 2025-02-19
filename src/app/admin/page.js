"use client";

import { useState } from "react";
import ResponsiveImage from "../components/ResponsiveImage/ResponsiveImage";

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
        <button type="button" onClick={handlePreview}>Preview</button>
        <button type="submit" disabled={loading}>{loading ? "Posting..." : "Submit JSON"}</button>
      </form>
    
      {message && <p>{message}</p>}

      {previewData?.article && (
        <div className="preview">
          <article>
            {previewData.article.sections?.[0] && (
              <section>
                <h1>{previewData.article.sections[0].heading}</h1>

                {previewData.article.sections[0].images?.map((image, iIndex) => (
                  <div key={iIndex}>
                    <ResponsiveImage
                      src={image.src}
                      alt={image.alt}
                      aspectRatio={image.aspectRatio}
                      {...(image.priority && { priority: true })}
                    />
                    {image.caption && <p className="figcaption">{image.caption}</p>}
                  </div>
                ))}

                <div className="metadata">
                  <p><strong>Title:</strong> {previewData.metadata.title}</p>
                  <p><strong>Author:</strong> {previewData.metadata?.author}</p>
                  <p><strong>Category:</strong> {previewData.metadata?.category}</p>
                  <p><strong>Tags:</strong> {previewData.metadata?.tags?.join(" | ")}</p>
                  <p><strong>Date:</strong> {previewData.metadata?.createdAt ? new Date(previewData.metadata.createdAt).toLocaleDateString() : "Unknown"}</p>
                </div>

                {previewData.article.sections[0].paragraphs?.[0] && (
                  <p>{previewData.article.sections[0].paragraphs[0].content}</p>
                )}
              </section>
            )}

            {previewData.article.sections?.slice(1).map((section, index) => (
              <section key={index + 1}>
                <h2>{section.heading}</h2>

                {section.images?.map((image, iIndex) => (
                  <figure key={iIndex}>
                    <ResponsiveImage
                      src={image.src}
                      alt={image.alt}
                      aspectRatio={image.aspectRatio}
                      {...(image.priority && { priority: true })}
                    />
                    {image.caption && <p className="figcaption">{image.caption}</p>}
                  </figure>
                ))}

                {section.paragraphs?.map((paragraph, pIndex) => (
                  <p key={pIndex}>{paragraph.content}</p>
                ))}
              </section>
            )) || <p>No sections available.</p>}
          </article>
        </div>
      )}
    </div>
  );
}

