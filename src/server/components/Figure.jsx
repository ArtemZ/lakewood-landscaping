import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const defaultWidth = 458;

const CSSfigcaption = {
    imgFull: ['text-center'],
    imgLeft: ['flex-fill', 'align-self-center', 'ms-5'],
    imgRight: ['flex-fill', 'align-self-center', 'text-end', 'me-5'],
    imgCentered: []
};

export const Figure = ({
    imgURL,
    altText,
    layout = 'imgCentered',
    caption,
    className
}) => {
    return (
        <div
            className={clsx(
                'lux-image_wrapper',
                'container',
                'mb-3',
                className
            )}
        >
            <figure
                className={clsx({
                    'd-flex':
                        layout === 'imgLeft' ||
                        layout === 'imgRight' ||
                        layout === 'imgCentered'
                })}
            >
                <img
                    src={imgURL}
                    alt={altText}
                    width={layout === 'imgFull' ? '100%' : `${defaultWidth}px`}
                    className={clsx('lux-image', {
                        'lux-image_full': layout === 'imgFull'
                    })}
                />
                {caption && (
                    <figcaption className={clsx(CSSfigcaption[layout])}>
                        {caption}
                    </figcaption>
                )}
            </figure>
        </div>
    );
};

Figure.propTypes = {
    imgURL: PropTypes.string.isRequired,
    altText: PropTypes.string,
    caption: PropTypes.string,
    layout: PropTypes.oneOf(['imgLeft', 'imgRight', 'imgFull']),
    className: PropTypes.string
};
