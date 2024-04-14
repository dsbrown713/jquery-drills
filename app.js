function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

$(document).ready(function () {
    $("#btnSubmit").attr("disabled", true)
    $("#textBox").on("keyup", function () {
        console.log($(this).val())
        if ($(this).val()) {
            $("#btnSubmit").attr("disabled", false)
        } else {
            $("#btnSubmit").attr("disabled", true)
        }
    });
    $("#btnSubmit").click(function () {
        event.preventDefault()
        let input_text = $("input[type=text]").val()
        // alert(input_text)
        $("body ul").append(`<li>${input_text}</li>`)
        $("li").css({
            "width": "fit-content",
            "padding": "1%"
        });
        $("li").on("click", function() {
            $(this).css({
                "background-color": getRandomColor(),
                "border-radius": Math.floor(Math.random() * 100) + "%"
            });
        });
        $("li").on("dblclick", function() {
            $(this).remove();
        });
    });
    $("body").append("<ul>")
});
