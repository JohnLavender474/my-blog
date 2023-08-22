"use client";

import React, { useState } from 'react';

type CollapsibleSectionProps = {
  title: string,
  children: any
}

const CollapsibleSection = (props: CollapsibleSectionProps) => {
  const { title, children } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapsible-section">
      <button className="collapsible-header" onClick={toggleSection}>
        {title}
        <span className={`icon ${isOpen ? 'open' : 'closed'}`}>&#x25B6;</span>
      </button>
      {isOpen && <div className="collapsible-content">{children}</div>}
      <style jsx>{`
        .collapsible-section {
          margin: 16px 0;
        }
        .collapsible-header {
          background-color: #f1f1f1;
          border: none;
          padding: 8px;
          width: 100%;
          text-align: left;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .icon {
          font-size: 12px;
          transition: transform 0.3s;
        }
        .open {
          transform: rotate(90deg);
        }
        .closed {
          transform: rotate(0);
        }
        .collapsible-content {
          padding: 16px;
          border: 1px solid #ccc;
        }
      `}</style>
    </div>
  );
};

export default CollapsibleSection;
