import {useState, useEffect} from "react"
import demoslide1 from "./assets/demoslide1.png"
import demoslide2 from "./assets/demoslide2.png"
import demoslide3 from "./assets/demoslide3.png"
import demoslide4 from "./assets/demoslide4.png"
import demoslide5 from "./assets/demoslide5.png"
import "./SlideShower.css"

const images = [demoslide1, demoslide2, demoslide3, demoslide4, demoslide5]

export default function SlideShower() {
    const [index, setIndex] = useState(0)

    const next = () => {
        if (index === images.length - 1) {
            setIndex(0)
        }
        else {
            setIndex(index + 1)
        }
    }

    const prev = () => {
        if (index === 0) {
            setIndex(images.length - 1)
        }
        else {
            setIndex(index - 1)
        }
    }

    console.log(index)

    return (
        <div className="slideshow">
            <img className="slide-image" src={images[index]}/>
            <div className="actions">
                <button onClick={prev}> &lt; </button>
                <button onClick={next}> &gt; </button>
            </div>
            <div className="dots">
                {images.map((_, i) => (
                    <div
                    key={i}
                    className={`dot ${i === index ? "active" : ""}`}
                    onClick={() => setIndex(i)}
                    />
                ))}
            </div>
        </div>
    )
}