import React from "react";
import "./Pages.scss";

// Branded assets for Code Blocks for Docs
import gDocsIcon220 from "../assets/images/gDocs-CodeBlocks220.png";
import gDocsIcon128 from "../assets/images/gDocs-CodeBlocks128.png";
import gDocsIcon96 from "../assets/images/gDocs-CodeBlocks96.png";
import gDocsIcon48 from "../assets/images/gDocs-CodeBlocks48.png";
import gDocsIcon32 from "../assets/images/gDocs-CodeBlocks32.png";
import gDocsScreenshot from "../assets/images/gDocs-CodeBlocks-SS.JPG";

const DocsCodeblocks = () => {
  return (
    <div className="pages-container">
      <div className="pages-content">
        {/* Hero section with branded icon */}
        <div className="docs-hero">
          <img
            src={gDocsIcon220}
            alt="Code Blocks for Docs add-on icon"
            className="docs-hero-icon"
          />
          <h1>Code Blocks for Google Docs</h1>
          <p className="docs-tagline">
            Beautiful syntax-highlighted code blocks, right inside your documents.
          </p>
        </div>

        <section className="pages-section">
          <h2>About This Add-on</h2>
          <p>
            <strong>Code Blocks for Docs</strong> is a Google Docs add-on that brings
            syntax-highlighted code blocks directly into your documents. Whether you're
            writing technical documentation, tutorials, or sharing code snippets with
            colleagues, this add-on makes it easy to embed beautifully formatted code.
          </p>
        </section>

        <section className="pages-section">
          <h2>Screenshot</h2>
          <img
            src={gDocsScreenshot}
            alt="Code Blocks for Docs screenshot showing syntax-highlighted code in Google Docs"
            className="docs-screenshot"
          />
        </section>

        <section className="pages-section">
          <h2>Key Features</h2>
          <ul>
            <li><strong>Syntax Highlighting:</strong> Supports dozens of programming languages with color-coded syntax for improved readability.</li>
            <li><strong>Easy Insertion:</strong> Add code blocks to your Google Doc with just a few clicks from the sidebar.</li>
            <li><strong>Customizable Themes:</strong> Choose from multiple color themes to match your document's style.</li>
            <li><strong>Copy-Paste Friendly:</strong> Generated code blocks preserve formatting when copied elsewhere.</li>
          </ul>
        </section>

        <section className="pages-section">
          <h2>Supported Languages</h2>
          <p>
            Code Blocks for Docs supports a wide range of programming and markup languages,
            including JavaScript, Python, Java, C++, TypeScript, Go, Rust, Ruby, PHP, Swift,
            Kotlin, HTML, CSS, SQL, Bash/Shell, JSON, XML, YAML, Markdown, and many more.
          </p>
        </section>

        <section className="pages-section">
          <h2>Get Started</h2>
          <p>
            Install the add-on directly from the{" "}
            <a
              href="https://workspace.google.com/marketplace/app/code_blocks_for_docs/105387964780"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Workspace Marketplace
            </a>
            . Once installed, open any Google Doc and go to <strong>Extensions &gt; Add-ons &gt; Code Blocks for Docs</strong> to get started.
          </p>
        </section>

        {/* Favicon sizes reference */}
        <section className="pages-section docs-favicons">
          <h2>Add-on Icon Sizes</h2>
          <div className="docs-icon-grid">
            {[
              { src: gDocsIcon32, label: "32×32" },
              { src: gDocsIcon48, label: "48×48" },
              { src: gDocsIcon96, label: "96×96" },
              { src: gDocsIcon128, label: "128×128" },
            ].map(({ src, label }) => (
              <div key={label} className="docs-icon-item">
                <img src={src} alt={`${label} icon`} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <footer className="pages-footer">
          <div className="pages-footer-links">
            <a href="/privacy">Privacy Policy</a>
            <span className="footer-separator">&bull;</span>
            <a href="/terms">Terms of Service</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default DocsCodeblocks;
