import React from 'react'

export function getSuccessIcon(color, className) {
  return (
    <svg width="50px" height="50px" viewBox="131 24 50 50" version="1.1" className={className}>
        <defs></defs>
        <g className={`svg--icon svg--icon__${color}`} strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(132.000000, 25.000000)">
            <g transform="translate(12.000000, 16.000000)" strokeLinecap="square" strokeWidth="1">
                <g>
                    <path d="M9.5,17.5 L26.5,0.5" id="Line"></path>
                    <path d="M0.5,8.5 L9.5,17.5" id="Line"></path>
                </g>
            </g>
            <circle strokeOpacity="0.403532609" cx="24" cy="24" r="24"></circle>
        </g>
    </svg>
  )
}

export function getLockIcon(color, className) {
  return (
    <svg width="125px" height="125px" viewBox="126 119 125 125" version="1.1" className={className}>
        <defs>
            <rect id="path-1" x="0" y="36" width="75" height="57" rx="16"></rect>
            <mask id="mask-2" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="75" height="57" fill="white">
                <use xlinkHref="#path-1"></use>
            </mask>
        </defs>
        <g className={`svg--icon svg--icon__${color}`} strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(127.000000, 120.000000)">
            <g transform="translate(24.000000, 10.000000)">
                <use mask="url(#mask-2)" strokeWidth="2" xlinkHref="#path-1"></use>
                <path d="M58.7144991,36.1279703 C58.7144991,36.1279703 63.9991879,0.662211024 38.6162515,0.662211024 C13.233315,0.662211024 17.1952527,24.2358411 17.1952527,24.2358411" id="Path-2"></path>
                <path d="M21.5,52.5 L55.5,79.5" id="Line" strokeLinecap="square"></path>
                <path d="M21.5,52.5 L55.5,79.5" id="Line" strokeLinecap="square" transform="translate(38.500000, 66.000000) scale(-1, 1) translate(-38.500000, -66.000000) "></path>
            </g>
            <circle cx="61.5" cy="61.5" r="61.5"></circle>
        </g>
    </svg>
  )
}

export function isJSON(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
