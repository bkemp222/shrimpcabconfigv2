const bodyPicker =
document.getElementById("bodyColor");

const stripePicker =
document.getElementById("stripeColor");


function colorSVG(object,color){

    const svg =
    object.contentDocument;

    if(!svg) return;

    svg.querySelectorAll("*").forEach(el=>{

        el.setAttribute("fill",color);

    });

}


const bodyObject =
document.getElementById("bodySVG");

const stripeObject =
document.getElementById("stripeSVG");


bodyObject.addEventListener("load",()=>{

    colorSVG(bodyObject,bodyPicker.value);

});

stripeObject.addEventListener("load",()=>{

    colorSVG(stripeObject,stripePicker.value);

});


bodyPicker.addEventListener("input",()=>{

    colorSVG(bodyObject,bodyPicker.value);

});


stripePicker.addEventListener("input",()=>{

    colorSVG(stripeObject,stripePicker.value);

});