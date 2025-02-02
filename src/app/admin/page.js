"use client";

import { useState } from "react";

export default function AdminPanel() {
  const [jsonInput, setJsonInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const postData = JSON.parse(jsonInput);
      
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

  return (
    <div className="page-container">
      <h2>Insert JSON Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Paste your JSON here"
          value={jsonInput}
          onChange={(e) => setJsonInput(e.target.value)}
          rows={10}
          cols={50}
          required
        />
        <br />
        <button type="submit" disabled={loading}>{loading ? "Posting..." : "Submit JSON"}</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
