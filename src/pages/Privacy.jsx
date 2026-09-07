import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import "./Pages.scss";

const PRIVACY_MD_URL =
  "https://raw.githubusercontent.com/vinas1/gdocs-codeblocks/main/PRIVACY.md";

const Privacy = () => {
  const [markdown, setMarkdown] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(PRIVACY_MD_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load privacy policy (${res.status})`);
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
          <h1>Privacy Policy</h1>
          <p>Loading privacy policy&hellip;</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pages-container">
        <div className="pages-content">
          <h1>Privacy Policy</h1>
          <p className="pages-error">
            Unable to load the privacy policy at this time.{" "}
            <a href={PRIVACY_MD_URL} target="_blank" rel="noopener noreferrer">
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
        <h1>Privacy Policy</h1>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Privacy;
