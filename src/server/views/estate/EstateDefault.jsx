import React from 'react';
import {useServerContext, getNodeProps, jAddCacheDependency, jUrl} from '@jahia/js-server-engine';

export const EstateDefault = () => {
    const {currentNode, currentResource} = useServerContext();
    const locale = currentResource.getLocale().getLanguage();
    const estate = getNodeProps(currentNode, [
        'title',
        'price',
        'gallery',
        'surface',
        'bedrooms'
    ]);

    const image = estate.gallery[0];
    jAddCacheDependency({node: image});

    return (
        <a href={jUrl({path: currentNode.getPath()})} className="lux-estateCard">
            <img src={image.getUrl()} alt={image.getDisplayableName()} height="265"/>
            <h4 className="my-2">{estate.title}</h4>
            <p className="lux-estateCard_informations">
                {estate.bedrooms} chambres <span className="lux-diamond">✦</span>{' '}
                {estate.surface.toLocaleString(locale)}m<sup>2</sup>
            </p>
            <strong className="lux-estateCard_price">{estate.price.toLocaleString(locale)}€</strong>
        </a>
    );
};

EstateDefault.jahiaComponent = {
    nodeType: 'luxe:estate',
    name: 'default',
    componentType: 'view'
};
