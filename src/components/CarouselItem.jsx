import React from "react";

export function CarouselItem({ children, width }) {
    return (
        <div className="carousel-item" style={{ width }}>
            {children}
        </div>
    );
}
