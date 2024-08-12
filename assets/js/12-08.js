$(".spoiler-card__show").click(function () {
    let parent = $(this).parents(".spoiler-card")
    $(parent).toggleClass("_open")
    $(parent).find(".spoiler-card__hidden").slideToggle()
})

function setLabelPlace(){
    let fields = document.querySelectorAll(".fg input,.fg textarea,.fg select")

    fields.forEach(field => {
        setLabelPosition(field)

        field.onchange = ()=> {
            setLabelPosition(field)
        }

        function setLabelPosition() {
            if(field.value !== ""){
                field.classList.add("_filled")
            } else{
                field.classList.remove("_filled")
            }
        }
    })
}


setLabelPlace()

$(".materials-filter__clear").click(function () {
    $(".filter-check input:checked").each(function (i,el) {
        $(el).prop("checked",false)
        $(el).trigger("change");
    })
})
