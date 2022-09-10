document.addEventListener("DOMContentLoaded", function () {
    let letter = 0;
    const text = "Students Against Destructive Decisions (SADD) works closely with the Upcounty Prevention Network to support our local school community. Our outstanding student leaders participate in directing both organizations. ";
    function typeText() {
        if (letter < text.length) {
            document.getElementById("type-js").innerHTML += text.charAt(letter);
            letter++;
            let speed = Math.floor(Math.random() * .5) + 20;
            setTimeout(typeText, speed);
        }
    }
    typeText();
});
document.addEventListener("DOMContentLoaded", function () {
    let letter = 0;
    const text = "We partner with organizations in the community including local service and religious groups to help people and focus on certain intrest groups so that we can recive the most participation from all groups rather than one.";
    function typeText() {
        if (letter < text.length) {
            document.getElementById("type-js2").innerHTML += text.charAt(letter);
            letter++;
            let speed = Math.floor(Math.random() * .5) + 20;
            setTimeout(typeText, speed);
        }
    }
    typeText();
});
document.addEventListener("DOMContentLoaded", function () {
    let letter = 0;
    const text = "We provide educational programming to strengthen and inform the community. We lean on local expertise to address concerns such as the prevention of suicide and substance use and the promotion of emotional wellbeing.";
    function typeText() {
        if (letter < text.length) {
            document.getElementById("type-js3").innerHTML += text.charAt(letter);
            letter++;
            let speed = Math.floor(Math.random() * .5) + 20;
            setTimeout(typeText, speed);
        }
    }
    typeText();
});
$(document).ready(function () {
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });

    $(".zoom").hover(function () {

        $(this).addClass('transition');
    }, function () {

        $(this).removeClass('transition');
    });
});



