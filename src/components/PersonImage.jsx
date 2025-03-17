import React from 'react';

const imgStyle = {
    imgAvatar: {
        width: '100%',                // Make the image fill the width of its container
        height: 'auto',               // Maintain aspect ratio
        minWidth: '512px',            // Set a minimum width for large screens
        maxWidth: '512px',            // Set a max-width that is equal to the minWidth on desktop
        borderRadius: '50%',          // Make it circular
        objectFit: 'cover',           // Crop the image to fit the container
    }
};

const getResponsiveStyles = (width) => {
    if (width <= 600) {
        return { maxWidth: '100px' };   // Smaller max-width for small screens
    } else if (width > 600 && width <= 768) {
        return { maxWidth: '120px' };   // Slightly larger for medium screens
    } else {
        return { maxWidth: '512px' };    // Use the minimum width for larger screens
    }
}

export default function PersonImage({ img }) {
    const screenWidth = window.innerWidth;
    const responsiveStyles = getResponsiveStyles(screenWidth);

    return (
        <img style={{ ...imgStyle.imgAvatar, ...responsiveStyles }} src={img} alt="" />
    );
}