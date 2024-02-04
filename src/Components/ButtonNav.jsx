import { Link } from "react-router-dom";
import "./ButtonNav.css";

function ButtonNav ({linkURL, imgSrc, altImg, title}) {
    
    return (
        <Link className="ButtonNav" to={linkURL}>
          <h1 className="ButtonNavTitle">{title}</h1>
        <img  className="ButtonNavImg"src={imgSrc} alt={altImg} style={{width: '100%',
            height: '100%',
            objectFit:'cover',
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 15% 100%, 0 88%, 0% 50%)',}}/>
      </Link>
    )
}
 export default ButtonNav;
 