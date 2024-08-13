window.addEventListener('DOMContentLoaded', () => {
    fix100vh();
    window.addEventListener('resize', () => {
        fix100vh();
    })
})

function fix100vh() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}


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

let body = document.querySelector("body")
let modalTogglers = document.querySelectorAll("[data-modal]")
let modals = document.querySelectorAll(".modal")

modalTogglers.forEach(el => {
    el.onclick = function (e) {
        e.preventDefault()
        let modalId = el.getAttribute("data-modal")
        openModal(modalId)
    }
})

function closeModals() {
    modals.forEach(modal => {
        modal.classList.remove("_active")
        body.classList.remove("fixed-body2")
    })
}

function openModal(modalId) {
    closeModals()
    let modal = document.querySelector(`#${modalId}`)
    let closeButtons = modal.querySelectorAll(`._close-modal`)

    modal.classList.add("_active")
    body.classList.add("fixed-body2")


    closeButtons.forEach(btn => {
        btn.onclick = ()=> {
            modal.classList.remove("_active")
            body.classList.remove("fixed-body2")
        }
    })
}


