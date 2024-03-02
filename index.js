const h1=React.createElement('h1',{},"Topics Convered");
const p1=React.createElement('p',{},"The following topics that all we cover in MDM Learning Area.");

const divhead=React.createElement('div',{className:"heading-div"},h1,p1);

const a1=React.createElement('a',{href:"google.com"},"Gating started with web.");
const p2=React.createElement('p',{className:"para"},"Provides a practical introduction to web development for complete beginners.");
const divp2=React.createElement('div',{className:"p2-div"},a1,p2);

const a2=React.createElement('a',{href:"google.com"},"HTML — Structuring the web");
const p3=React.createElement('p',{className:"para"},"HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.");
const divp3=React.createElement('div',{className:"p3-div"},a2,p3);

const a3=React.createElement('a',{href:"google.com"},"CSS — Styling the web");
const p4=React.createElement('p',{className:"para"},"CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS.");
const divp4=React.createElement('div',{className:"p4-div"},a3,p4);


const divMain=React.createElement('div',{className:"main-div"},divhead,divp2,divp3,divp4);




ReactDOM.render(divMain,document.getElementById('root'))