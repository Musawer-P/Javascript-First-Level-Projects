function swapDivs() {

    var div1 = document.getElementById('div1');
    var div2 = document.getElementById('div2');


    var temp = document.createElement('div');
    temp.innerHTML = div1.innerHTML;


    div1.innerHTML = div2.innerHTML;
    div2.innerHTML = temp.innerHTML;


    var tempStyle = div1.style.cssText;
    div1.style.cssText = div2.style.cssText;
    div2.style.cssText = tempStyle;
}