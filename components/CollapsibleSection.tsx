"use client";

import React, { useState } from "react";

type CollapsibleSectionProps = {
  title: string;
  children: any;
};

const CollapsibleSection = (props: CollapsibleSectionProps) => {
  const { title, children } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapsible-section">
      <button className="collapsible-header" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <span className={`collapsible-icon ${isOpen ? "open" : "closed"}`}>&#x25B6;</span>
      </button>
      {isOpen && <div className="collapsible-content">{children}</div>}
    </div>
  );
};

export default CollapsibleSection;
