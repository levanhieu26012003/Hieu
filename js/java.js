function init() {
    var a = document.querySelectorAll(".CHNN a")
    for (var i = 0; i < a.length; i++)
        a[i].onclick = function () {
            event.preventDefault()
        }


}

$(document).ready(function () {

    //GO TO TOP && FIX NAVIGATION
    $("#gototop").hide()

    $(window).scroll(function () {
        if ($(this).scrollTop() >= 300)
            $("nav").css({
                "position": "fixed",
                "left": 0,
                "right": 0,
                "z-index": "9999",
                "margin-top": "-10px"
            })
        else
            $("nav").css({
                "position": "relative"
            })

        if ($(this).scrollTop() >= 300)
            $("#gototop").fadeIn("slow")
        else
            $("#gototop").fadeOut("slow")

    })
    $("#gototop").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000)
    })

   
})


