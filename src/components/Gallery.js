import "../styles/Gallery.css";
import gallery1 from '../assets/gallery1 (1).png';
import gallery2 from '../assets/gallery2.png';
import gallery3 from '../assets/gallery3.png';
import gallery4 from '../assets/gallery4.png';
import gallery5 from '../assets/gallery5.png';
import gallery6 from '../assets/gallery6.png';


function Gallery() {
  return (
    <div  className="Gallery-main">
      <h1 id="gallery">
        <b id="fisrt-word">G</b>alle<b id="last-word">ry</b>
      </h1>

      <div className="gallary-main">
        <img src={gallery1} alt="gallary-pic" id="gallery1"/>
        <img src={gallery2} alt="gallary-pic" id="gallery2"/>
        <img src={gallery3} alt="gallary-pic" id="gallery3"/>
        <img src={gallery4} alt="gallary-pic" id="gallery4"/>
        <img src={gallery5} alt="gallary-pic" id="gallery5"/>
        <img src={gallery6} alt="gallary-pic" id="gallery6"/>
      </div>
    </div>
  );
}
export default Gallery;
