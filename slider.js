
function slide_right(){
    let style_img1, style_img2, style_img3, style_img4, elem_img1, elem_img2, elem_img3, elem_img4;
    elem_img1=document.querySelector("#p1");
    elem_img2=document.querySelector("#p2");
    elem_img3=document.querySelector("#p3");
    elem_img4=document.querySelector("#p4");
    style_img1=window.getComputedStyle(elem_img1);
    style_img2=window.getComputedStyle(elem_img2);
    style_img3=window.getComputedStyle(elem_img3);
    style_img4=window.getComputedStyle(elem_img4);
    let k=1
    if (style_img3.display==="block"){
        k=0
        elem_img3.style.display="none";
        elem_img4.style.display="block";
    }
    if (style_img2.display==="block"){
        elem_img2.style.display="none";
        elem_img3.style.display="block";
    }
    if (style_img1.display==="block"){
        elem_img1.style.display="none";
        elem_img2.style.display="block";    
    }
    if (style_img4.display==="block" && k===1){
        elem_img4.style.display="none";
        elem_img1.style.display="block";
    }
}
function slide_left(){
    let style_img1, style_img2, style_img3, style_img4, elem_img1, elem_img2, elem_img3, elem_img4;
    elem_img1=document.querySelector("#p1");
    elem_img2=document.querySelector("#p2");
    elem_img3=document.querySelector("#p3");
    elem_img4=document.querySelector("#p4");
    style_img1=window.getComputedStyle(elem_img1);
    style_img2=window.getComputedStyle(elem_img2);
    style_img3=window.getComputedStyle(elem_img3);
    style_img4=window.getComputedStyle(elem_img4);
    let k=0
    if (style_img2.display==="block"){
        k=1
        elem_img2.style.display="none";
        elem_img1.style.display="block";
    }
    if (style_img3.display==="block"){
        elem_img3.style.display="none";
        elem_img2.style.display="block";
    }
    if (style_img4.display==="block"){
        elem_img4.style.display="none";
        elem_img3.style.display="block";
    }
    if (style_img1.display==="block" && k===0){
        elem_img1.style.display="none";
        elem_img4.style.display="block";
    }

}