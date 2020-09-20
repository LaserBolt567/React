import React from 'react';

export function InfoBanner(props) {
    if (props.level !== 'info') {
        return null;
    }
    return (<alert className="info">Info Banner</alert>);
}

export function WarnBanner(props) {
    if (props.level !== 'warn') {
        return null;
    }
    return (<alert className="warn">Warning Banner</alert>)
}