import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
export function Carousel({ children }) {
    function clamp(index) {
        if (index < 0) {
            // out of bounds, set index to first child
            index = React.Children.count(children) - 1;
        } else if (index >= React.Children.count(children)) {
            // out of bounds, set index to last child
            index = 0;
        }

        return index;
    }

    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    const updateIndex = (newIndex) => {
        setActiveIndex(clamp(newIndex));
    };

    const jumpTo = (index) => () => updateIndex(index);

    const carouselHandlers = useSwipeable({
        onSwipedLeft: jumpTo(activeIndex + 1),
        onSwipedRight: jumpTo(activeIndex - 1),
    });

    useEffect(() => {
        const cycleCarousel = setInterval(() => {
            if (!paused) {
                updateIndex(activeIndex + 1);
            }
        }, 3000);

        return () => {
            if (cycleCarousel) {
                clearInterval(cycleCarousel);
            }
        };
    });

    return (
        <div
            className="carousel"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            {...carouselHandlers}>
            <div
                className="inner"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "100%" });
                })}
            </div>
            <div className="indicators">
                <button onClick={jumpTo(activeIndex - 1)}>
                    <FontAwesomeIcon
                        className="icon-btn"
                        icon={faChevronLeft}
                    />
                </button>
                {React.Children.map(children, (child, index) => {
                    return (
                        <button
                            className={index === activeIndex ? "active" : ""}
                            onClick={jumpTo(index)}>
                            {index + 1}
                        </button>
                    );
                })}
                <button onClick={jumpTo(activeIndex + 1)}>
                    <FontAwesomeIcon
                        className="icon-btn"
                        icon={faChevronRight}
                    />
                </button>
            </div>
        </div>
    );
}
