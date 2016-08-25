import React from 'react'

export function getSuccessIcon(color, className) {
  return (
    <svg width="50px" height="50px" viewBox="131 24 50 50" version="1.1" className={className}>
        <defs></defs>
        <g className={`svg--icon svg--icon__${color}`} strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(132.000000, 25.000000)">
            <g id="Group-2" transform="translate(12.000000, 16.000000)" strokeLinecap="square" strokeWidth="1">
                <g id="Group">
                    <path d="M9.5,17.5 L26.5,0.5" id="Line"></path>
                    <path d="M0.5,8.5 L9.5,17.5" id="Line"></path>
                </g>
            </g>
            <circle id="Oval" strokeOpacity="0.403532609" cx="24" cy="24" r="24"></circle>
        </g>
    </svg>
  )
}
