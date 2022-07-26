import React from "react";
import ReactDOM from "react-dom";
import './index.css';
const name="Saguna";
const img1="https://picsum.photos/200/300";
const img2="https://picsum.photos/200/300";
const img3="https://picsum.photos/200/300";
const img4="https://picsum.photos/200/300";
const links="https://picsum.photos/200/300"

ReactDOM.render(
    <>
<h1 className="heading">My Name Is {name}</h1>
{/* <img src="https://picsum.photos/200/300" alt="RandomImeges"/> */}
<div className="img_div">
<img src={img1} alt="randomimages"/>
<img src={img2} alt="randomimages"/>
<img src={img3} alt="randomimages"/>
<a href={links} target="_Saguna">
<img src={img4} alt="randomimages"/>
</a>
</div>

{/* <img src={img3} alt="randomimages"/>
<a href={links} target="_Saguna"></a>
<img src={img4} alt="randomimages"/> */}

</>,
document.getElementById("root"));