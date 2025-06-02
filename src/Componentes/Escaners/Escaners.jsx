import React, { useState } from "react";
import DepBootStrapCarr from "react-bootstrap/Carousel";
import Img1 from "./img1.jpeg";
import Img2 from "./img4.jpeg";
import Img3 from "./img5.jpeg";
function Carrusel() {
const [index, setIndex] = useState(0);
const handleSelect = (selectedIndex, e) => {
setIndex(selectedIndex);
};
return (
<DepBootStrapCarr activeIndex={index} onSelect={handleSelect}>
    <DepBootStrapCarr.Item>
        <img className="w-75 h-50 d-inline-block img-fluid rounded" src={Img1} alt="venta mayor" /> <a href="Comprar">
        <button>Comprar</button>
        </a>
    </DepBootStrapCarr.Item>
    <DepBootStrapCarr.Item>
        <img className="w-75 h-50 d-inline-block img-fluid rounded" src={Img2} alt="info venta mayor" />
        <a href="/Comprar">
         <button>Comprar</button>
        </a>
    </DepBootStrapCarr.Item>
    <DepBootStrapCarr.Item>
        <img className="w-75 h-50 d-inline-block img-fluid rounded" src={Img3} alt="info venta mayor" />
        <a href="/comprar">
            <button>Comprar</button>
        </a>
    </DepBootStrapCarr.Item>
</DepBootStrapCarr>
);
}
export default Carrusel;

