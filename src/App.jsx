import logo from "./logo.svg";
import "./App.css";
import "./styles/Carousel.css";
import { Carousel } from "./components/Carousel";
import { CarouselItem } from "./components/CarouselItem";

function App() {
    return (
        <div className="App">
            <Carousel>
                <CarouselItem>Item 1</CarouselItem>
                <CarouselItem>Item 2</CarouselItem>
                <CarouselItem>Item 3</CarouselItem>
                <CarouselItem>Item 4</CarouselItem>
                <CarouselItem>Item 5</CarouselItem>
                <CarouselItem>Item 6</CarouselItem>
            </Carousel>
        </div>
    );
}

export default App;
