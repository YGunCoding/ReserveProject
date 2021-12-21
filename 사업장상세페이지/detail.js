onload = function() {

    $(function() {
        $(".header_section .header_part ").on("click ", function() {
            $(".hamburger_section ").toggleClass("menuon ");
        });
    });
}