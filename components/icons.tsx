import React from 'react';

type IconProps = {
  className?: string;
};

export const AppIcon: React.FC<IconProps> = ({ className }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M10.3125 3.75C10.3125 3.33579 9.97671 3 9.5625 3H4.4375C4.02329 3 3.6875 3.33579 3.6875 3.75V8.875C3.6875 9.28921 4.02329 9.625 4.4375 9.625H9.5625C9.97671 9.625 10.3125 9.28921 10.3125 8.875V3.75Z" />
      <path d="M9.5625 5.25H4.4375V8.125H9.5625V5.25Z" />
      <path d="M19.5625 3.75C19.9767 3 20.3125 3.33579 20.3125 3.75V8.875C20.3125 9.28921 19.9767 9.625 19.5625 9.625H14.4375C14.0233 9.625 13.6875 9.28921 13.6875 8.875V3.75C13.6875 3.33579 14.0233 3 14.4375 3H19.5625Z" />
      <path d="M14.4375 5.25H19.5625V8.125H14.4375V5.25Z" />
      <path d="M10.3125 14.5C10.3125 14.0858 9.97671 13.75 9.5625 13.75H4.4375C4.02329 13.75 3.6875 14.0858 3.6875 14.5V19.625C3.6875 20.0392 4.02329 20.375 4.4375 20.375H9.5625C9.97671 20.375 10.3125 20.0392 10.3125 19.625V14.5Z" />
      <path d="M9.5625 15.25H4.4375V18.875H9.5625V15.25Z" />
      <path d="M13.6875 18.125H15.1875V19.625H13.6875V18.125Z" />
      <path d="M15.1875 16.625H16.6875V18.125H15.1875V16.625Z" />
      <path d="M13.6875 15.125H15.1875V16.625H13.6875V15.125Z" />
      <path d="M16.6875 18.125H18.1875V19.625H16.6875V18.125Z" />
      <path d="M18.1875 16.625H19.6875V18.125H18.1875V16.625Z" />
      <path d="M16.6875 15.125H18.1875V16.625H16.6875V15.125Z" />
      <path d="M18.1875 13.75H19.6875V15.125H18.1875V13.75Z" />
      <path d="M19.6875 15.125H21.1875V16.625H19.6875V15.125Z" />
      <path d="M19.6875 18.125H21.1875V19.625H19.6875V18.125Z" />
      <path d="M18.1875 19.625H19.6875V21.125H18.1875V19.625Z" />
      <path d="M16.6875 12.25H18.1875V13.75H16.6875V12.25Z" />
      <path d="M15.1875 13.75H16.6875V15.125H15.1875V13.75Z" />
      <path d="M12.1875 12.25H13.6875V13.75H12.1875V12.25Z" />
      <path d="M13.6875 13.75H15.1875V15.125H13.6875V13.75Z" />
    </svg>
);


export const ScanLine: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3 7V5a2 2 0 0 1 2-2h2" />
    <path d="M17 3h2a2 2 0 0 1 2 2v2" />
    <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
    <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
    <path d="M7 12h10" />
  </svg>
);

export const QrCodeGenerate: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="5" height="5" x="3" y="3" rx="1" />
    <rect width="5" height="5" x="16" y="3" rx="1" />
    <rect width="5" height="5" x="3" y="16" rx="1" />
    <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
    <path d="M21 21v.01" />
    <path d="M12 7v3a2 2 0 0 1-2 2H7" />
    <path d="M3 12h.01" />
    <path d="M12 3h.01" />
    <path d="M12 16v.01" />
    <path d="M16 12h.01" />
    <path d="M21 12v.01" />
    <path d="M12 21v-1" />
  </svg>
);

export const Camera: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
    <circle cx="12" cy="13" r="3" />
  </svg>
);

export const Copy: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
  </svg>
);

export const Download: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" x2="12" y1="15" y2="3" />
  </svg>
);

export const Zap: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

export const XCircle: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <line x1="15" y1="9" x2="9" y2="15" />
    <line x1="9" y1="9" x2="15" y2="15" />
  </svg>
);

export const CheckCircle: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
);

export const Type: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polyline points="4 7 4 4 20 4 20 7"/>
        <line x1="9" y1="20" x2="15" y2="20"/>
        <line x1="12" y1="4" x2="12" y2="20"/>
    </svg>
);