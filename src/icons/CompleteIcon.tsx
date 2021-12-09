import React from "react";

export const CompleteIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="20" cy="20" r="20" fill="var(--background-paper)" />
    <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="4" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M28.7678 13.7678C29.3536 14.3536 29.3536 15.3033 28.7678 15.8891L17.4142 27.2426L12.0607 21.8891C11.4749 21.3033 11.4749 20.3536 12.0607 19.7678L12.7678 19.0607C13.3536 18.4749 14.3033 18.4749 14.8891 19.0607L17.4142 21.5858L25.9393 13.0607C26.5251 12.4749 27.4749 12.4749 28.0607 13.0607L28.7678 13.7678Z"
      fill="currentColor"
    />
  </svg>
);

CompleteIcon.displayName = "CompleteIcon";
