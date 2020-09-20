import React from 'react';

export function InfoBanner(props) {
    if (props.level !== 'info') {
        return null;
    }
    return (<p className="info">Info Banner</p>);
}

export function WarnBanner(props) {
    if (props.level !== 'warn') {
        return null;
    }
    return (<p className="warn">Warning Banner</p>)
}