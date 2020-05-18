
document.onreadystatechange = function () {

    if (document.readyState === "complete") {

        window.addEventListener('scroll', autoScroll);

        // setTimeout(() => {
        //     if (!window.pageYOffset) {
        //         noScroll()
        //     }
        // }, 10000)

    }

}



function autoScroll() {

    var scrolledPx = this.pageYOffset;
    var ecranWidth = this.outerWidth;

    var contentHeight = this.document.querySelector('.content').clientHeight;
    var paralaxHeight = this.document.querySelector('.parallax').clientHeight;
    var procentScrolledContent = scrolledPx / contentHeight * 100;

    var procentScrolledParalax = scrolledPx / paralaxHeight * 100;
    var o = 1 - 1 / 100 * procentScrolledParalax;

    var z_1 = 1 + (ecranWidth / 10000 * procentScrolledParalax);
    this.document.querySelector('.parallax_fog').style.transform = `scale(${z_1})`;
    this.document.querySelector('.parallax_fog').style.opacity = `${o}`;


    var z_2 = 1 + (ecranWidth / 5000000 * procentScrolledContent);
    this.document.querySelector('.parallax_montain_1').style.transform = `scale(${z_2})`;

    var hr = ecranWidth / 2000 * procentScrolledParalax;
    var z_3 = 1 + (ecranWidth * 0.000005 * procentScrolledParalax)
    this.document.querySelector('.parallax_montain_2').style.transform = `scale(${z_3}) translate3d(${hr}px,0,0)`;

    var hr_2 = ecranWidth / 1500 * procentScrolledParalax;
    var z_4 = 1 + (ecranWidth * 0.00002 * procentScrolledParalax)
    this.document.querySelector('.parallax_montain_3').style.transform = `scale(${z_4}) translate3d(${hr_2}px,0,0)`;

}

// function noScroll() {
//     setTimeout(() => {
//         clearInterval(intervalID)
//     }, 20000)

//     var intervalID = setInterval(() => {
//         window.pageYOffset++;
//         autoScroll();
//     }, 50);
// }