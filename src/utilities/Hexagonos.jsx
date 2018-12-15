import styled from 'react-emotion';

const HexagonosCss = styled.div`
font-family: 'Oswald', sans-serif;

html { 
  font-size: 62.5%; } 
body {
font-size: 1.5em;
line-height: 1.6;
font-weight: 400;
font-family: 'lux', sans-serif;
color: #222;
background-color: #f6f6f6;
overflow-y: scroll;
}


/* Typography
–––––––––––––––––––––––––––––––––––––––––––––––––– */
h1, h2, h3, h4, h5, h6 { 
  font-weight: 300;
  margin-top: 0;
  margin-bottom: 2rem; }
h1 { font-size: 4.0rem; line-height: 1.2;  letter-spacing: -.1rem;}
h2 { font-size: 3.6rem; line-height: 1.25; letter-spacing: -.1rem; }
h3 { font-size: 3.0rem; line-height: 1.3;  letter-spacing: -.1rem; }
h4 { font-size: 2.4rem; line-height: 1.35; letter-spacing: -.08rem; }
h5 { font-size: 1.8rem; line-height: 1.5;  letter-spacing: -.05rem; }
h6 { font-size: 1.5rem; line-height: 1.6;  letter-spacing: 0; }

/* Larger than phablet */
@media (min-width: 550px) {
  h1 { font-size: 5.0rem; }
  h2 { font-size: 4.2rem; }
  h3 { font-size: 3.6rem; }
  h4 { font-size: 3.0rem; }
  h5 { font-size: 2.4rem; }
  h6 { font-size: 1.5rem; }
}

p {
  margin-top: 0; }

* {
box-sizing: border-box;
margin: 0;
}

section.intro {
font-family: oswald;
position: relative;
height: 100vh;
width: 100%;
background: #f6f6f6;
background: -moz-radial-gradient(center, ellipse cover, #f6f6f6 1%, #d3d3d3 100%);
background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(1%,#f6f6f6), color-stop(100%,#d3d3d3));
/* background: -webkit-radial-gradient(center, ellipse cover, #f6f6f6 1%,#d3d3d3 100%); */
background: -o-radial-gradient(center, ellipse cover, #f6f6f6 1%,#d3d3d3 100%);
background: -ms-radial-gradient(center, ellipse cover, #f6f6f6 1%,#d3d3d3 100%);
/* background: radial-gradient(ellipse at center, #f6f6f6 1%,#d3d3d3 100%); */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f6f6f6', endColorstr='#d3d3d3',GradientType=1 );
overflow: hidden;
z-index: 1;
}

.welcome {
font-size: 60px;
text-align: center;
color: #333;
}

/********************************************************************************************************************************
                                            Hexagon Intro Blocks
********************************************************************************************************************************/
.intro-block {
position: relative;
display: flex;
align-items: center;
height: 100%;
box-shadow: inset 0px 0px 64px 0px rgba(50,50,50,0.75);
}

.hex-bg-big-text {
position: absolute;
z-index: -1;
height: 100%;
width: 100%;
}

.centerfold-wrap {
position: relative;
display: flex;
justify-content: center;
align-items: center;
flex: 1;
}

.hoverblock {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
}

.hover-notify {
position: absolute;
bottom: -80px;
left: 0;
width: 100%;
text-align: center;
font-size: 50px;
}

.code-display {
position: relative;
color: #f6f6f6;
width: 600px;
height: 260px;
}

.code-display::before {
content: "Expertise";
position: absolute;
top: -70px;
left: 0;
font-size: 3.0rem;
color: #333;
}

.code-display h1 {
color: #333;
}

.code-description {
width: 100%;
height: 100%;
color: #333;
}

.code-description * {
display: none;
}

.code-description > div {
padding: 0px 40px;
font-size: 26px;
border-left: 2px solid #DDDDDD;
}

.desc-active {
display: block;
/*height: 100%;*/
position: relative;
}

.desc-active > p {
display: block;
margin: 0;
}

.desc-active > p > span {
display: inline-block;
/* font-weight: bold; */
width: 125px;
}

p.code-title {
position: relative;
font-size: 6rem;
}

.desc-active::after {
position: absolute;
height: 100%;
width: 100%;
top: 0;
left: 0;
content: "";
opacity: .2;
z-index: -1;
}

.backend-desc.desc-active::after {
background: url(https://i.imgur.com/Dc8HgeM.png);
background-repeat: no-repeat;
background-size: contain;
background-position: right center;
}

.frontend-desc.desc-active::after {
background: url(https://i.imgur.com/QcfXSkf.jpg);
background-repeat: no-repeat;
background-size: contain;
background-position: right center;
}

.html-desc.desc-active::after {
background: url(https://i.imgur.com/0g3HZSF.jpg);
background-repeat: no-repeat;
background-size: contain;
background-position: right center;
}

.css-desc.desc-active::after {
background: url(https://i.imgur.com/poC0TYE.png);
background-repeat: no-repeat;
background-size: contain;
background-position: right center;
}

.javascript-desc.desc-active::after {
background: url(https://i.imgur.com/QjrmHkb.jpg);
background-repeat: no-repeat;
background-size: contain;
background-position: right center;
}

.gui-desc.desc-active::after {
background: url(https://i.imgur.com/YmCqPpk.jpg);
background-repeat: no-repeat;
background-size: contain;
background-position: right center;
}

.seo-desc.desc-active::after {
background: url(https://i.imgur.com/V9vAVUO.png);
background-repeat: no-repeat;
background-size: contain;
background-position: right center;
}

.hex-master-wrap {
position: relative;
/* width: 50%; */
min-width: 665px;
height: 460px;
}

.border-1,
.border-2,
.border-3 {
position: absolute;
width: 100%;
height: 88px;
top: 46px;
left: 0;
border-left: 3px solid;
border-right: 3px solid;
border-radius: 8px;
z-index: 2;
border-color: #333;
-webkit-backface-visibility: hidden;
backface-visibility: hidden;
}

.border-2 {
transform: rotate(60deg);
}

.border-3 {
transform: rotate(120deg);
}

.border-3::before {
display: none;
position: absolute;
content: "";
bottom: 10%;
left: 42px;
width: 50%;
height: 83%;
background-color: rgba(255, 255, 255, 0);
border-top: 1px solid;
border-bottom: 1px solid;
border-color: white;
border-radius: 50%;
visibility: visible;
z-index: -1;
/* transform: rotate(60deg); */
}

.intro-block .grid-1,
.intro-block .grid-2,
.intro-block .grid-3 {
display: flex;
align-items: center;
justify-content: center;
width: 75%;
margin: 0 auto;
margin-bottom: -50px;
}

.intro-block .grid-3 {
margin-bottom: -50px;
}

.intro-block .grid-2,
.intro-block .grid-3 {
margin-top: -50px;
}

.hex-wrap {
position: relative;
width: 150px;
height: 190px;
margin: 0 1em 0 0;
border-top-left-radius: 100%;
border-top-right-radius: 100%;
border-bottom-left-radius: 100%;
border-bottom-right-radius: 100%;
border: 0px solid;
transform: scale(1.1);
}

.hex-wrap .label {
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
margin: auto;
width: 100%;
height: 58px;
color: #f6f6f6;
display: flex;
justify-content: center;
align-items: center;
z-index: 3;
}

.hex-wrap .label svg, .hex-wrap .label img {
height: 50px;
width: 50px;
-webkit-backface-visibility: hidden;
backface-visibility: hidden;
}

.hexagon {
width: 300px;
height: 150px;
margin: 15px 0 0 -75px;
overflow: hidden;
visibility: hidden;
-webkit-transform: rotate(120deg);
-moz-transform: rotate(120deg);
-ms-transform: rotate(120deg);
-o-transform: rotate(120deg);
transform: rotate(90deg);
cursor: pointer;
-webkit-backface-visibility: hidden;
backface-visibility: hidden;
}

.hex-inner-1 {
overflow: hidden;
width: 100%;
height: 100%;
-webkit-backface-visibility: hidden;
backface-visibility: hidden;
-webkit-transform: rotate(-60deg);
-moz-transform: rotate(-60deg);
-ms-transform: rotate(-60deg);
-o-transform: rotate(-60deg);
transform: rotate(-60deg);
}

.hex-inner-2 {
position: relative;
width: 100%;
height: 100%;
background-repeat: no-repeat;
background-position: 50%;
/* background-image: url(http://placekitten.com/240/240); */
visibility: visible;
-webkit-backface-visibility: hidden;
backface-visibility: hidden;
-webkit-transform: rotate(-60deg);
-moz-transform: rotate(-60deg);
-ms-transform: rotate(-60deg);
-o-transform: rotate(-60deg);
transform: rotate(-60deg);
overflow: hidden;
}

.hex-inner-2::before, .hex-inner-2::after {
position: absolute;
background-repeat: no-repeat;
background-position: 50%;
background-size: contain;
top: 0;
left: 0;
height: 110%;
width: 110%;
content: "";
-webkit-transform: rotate(30deg);
transform: rotate(30deg);
}

/**********************************************************************************
                                Hex Hover Area
**********************************************************************************/
.hex-init {
position: absolute;
top: 46px;
left: 0px;
height: 46%;
width: 100%;
z-index: 9;
transform: rotate(-60deg);
cursor: pointer;
}

.hex-init::after {
width: 100%;
height: 100%;
display: block;
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
margin: auto;
content: "";
transform: rotate(-60deg);
}

.hex-init::before {
width: 100%;
height: 100%;
display: block;
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
margin: auto;
content: "";
transform: rotate(60deg);
}

`
export default HexagonosCss