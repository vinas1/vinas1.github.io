import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import "./Pages.scss";

const TERMS_MD_URL =
  "https://raw.githubusercontent.com/vinas1/gdocs-codeblocks/main/TERMS.md";

const Terms = () => {
  const [markdown, setMarkdown] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(TERMS_MD_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load terms of service (${res.status})`);
        return res.text();
      })
      .then((text) => setMarkdown(text))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="pages-container">
        <div className="pages-content">
          <h1>Terms of Service</h1>
          <p>Loading terms of service&hellip;</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pages-container">
        <div className="pages-content">
          <h1>Terms of Service</h1>
          <p className="pages-error">
            Unable to load the terms of service at this time.{" "}
            <a href={TERMS_MD_URL} target="_blank" rel="noopener noreferrer">
              View raw file
            </a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="pages-container">
      <div className="pages-content">
        <h1>Terms of Service</h1>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Terms;
