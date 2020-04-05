$(document).ready(function(){
    $(".toSignup").click(function(){
        $("#loginbox").hide();
        $("#signupBox").css("display","block");
        $("title").text("Sign Up");
    })
})