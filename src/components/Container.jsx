import React from 'react'

import containerCSS from './Container.module.css';

export default function Container({ children }) {
    return (
        <div className={containerCSS.container}>{children}</div>
    )
}
