

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
        alert($("input[type=text]").val())
        $("body div").append("<h2></h2>").text($("input[type=text]").val())
    });
    $("body").append("<div></div>")
});
