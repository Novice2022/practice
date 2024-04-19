var header = document.getElementById('header')
var content_block = document.getElementById('content')
var form_container = document.getElementById('final-form')

var form_go_back = document.getElementById('form-go-back')

var resulting_mark_input = document.getElementById('resulting-mark-input')
var mark_0 = document.getElementById('mark-value-0')
var mark_1 = document.getElementById('mark-value-1')
var mark_2 = document.getElementById('mark-value-2')
var mark_3 = document.getElementById('mark-value-3')
var mark_4 = document.getElementById('mark-value-4')
var mark_5 = document.getElementById('mark-value-5')
var comment_input = document.getElementById('comment-input')

var prepare_mark = document.getElementById('prepare-mark')

var form_final_mark = document.getElementById('form-final-mark')
var response_comment = document.getElementById('response-comment')

var comment_block = document.getElementById('comment-block')


// =================================================================================

form_go_back.addEventListener(
    'click',
    () => {
        header.style.display = "block"
        content_block.style.display = "grid"
        form_container.style.display = "none"

        comment_block.style.display = "block"
    }
)

mark_0.addEventListener(
    'click',
    () => {
        mark_0.style.backgroundColor = "rgba(255, 255, 255, 0.15)"
        mark_1.style.backgroundColor = "rgba(255, 255, 255, 0)"
        mark_2.style.backgroundColor = "rgba(255, 255, 255, 0)"
        mark_3.style.backgroundColor = "rgba(255, 255, 255, 0)"
        mark_4.style.backgroundColor = "rgba(255, 255, 255, 0)"
        mark_5.style.backgroundColor = "rgba(255, 255, 255, 0)"
        
        mark_0.style.color = "white"
        mark_1.style.color = "rgba(255, 255, 255, 0.6)"
        mark_2.style.color = "rgba(255, 255, 255, 0.6)"
        mark_3.style.color = "rgba(255, 255, 255, 0.6)"
        mark_4.style.color = "rgba(255, 255, 255, 0.6)"
        mark_5.style.color = "rgba(255, 255, 255, 0.6)"

        resulting_mark_input.value = "0"
    }
)

mark_1.addEventListener(
    'click',
    () => {
        mark_0.style.backgroundColor = "rgba(255, 255, 255, 0)"
        mark_1.style.backgroundColor = "rgba(255, 255, 255, 0.15)"
        mark_2.style.backgroundColor = "rgba(255, 255, 255, 0)"
        mark_3.style.backgroundColor = "rgba(255, 255, 255, 0)"
        mark_4.style.backgroundColor = "rgba(255, 255, 255, 0)"
        mark_5.style.backgroundColor = "rgba(255, 255, 255, 0)"
        
        mark_0.style.color = "rgba(255, 255, 255, 0.6)"
        mark_1.style.color = "white"
        mark_2.style.color = "rgba(255, 255, 255, 0.6)"
        mark_3.style.color = "rgba(255, 255, 255, 0.6)"
        mark_4.style.color = "rgba(255, 255, 255, 0.6)"
        mark_5.style.color = "rgba(255, 255, 255, 0.6)"

        resulting_mark_input.value = "1"
    }
)

mark_2.addEventListener(
    'click',
    () => {
        mark_0.style.backgroundColor = "rgba(255, 255, 255, 0)"
        mark_1.style.backgroundColor = "rgba(255, 255, 255, 0)"
        mark_2.style.backgroundColor = "rgba(255, 255, 255, 0.15)"
        mark_3.style.backgroundColor = "rgba(255, 255, 255, 0)"
        mark_4.style.backgroundColor = "rgba(255, 255, 255, 0)"
        mark_5.style.backgroundColor = "rgba(255, 255, 255, 0)"
        
        mark_0.style.color = "rgba(255, 255, 255, 0.6)"
        mark_1.style.color = "rgba(255, 255, 255, 0.6)"
        mark_2.style.color = "white"
        mark_3.style.color = "rgba(255, 255, 255, 0.6)"
        mark_4.style.color = "rgba(255, 255, 255, 0.6)"
        mark_5.style.color = "rgba(255, 255, 255, 0.6)"

        resulting_mark_input.value = "2"
    }
)

mark_3.addEventListener(
    'click',
    () => {
        mark_0.style.backgroundColor = "rgba(255, 255, 255, 0)"
        mark_1.style.backgroundColor = "rgba(255, 255, 255, 0)"
        mark_2.style.backgroundColor = "rgba(255, 255, 255, 0)"
        mark_3.style.backgroundColor = "rgba(255, 255, 255, 0.15)"
        mark_4.style.backgroundColor = "rgba(255, 255, 255, 0)"
        mark_5.style.backgroundColor = "rgba(255, 255, 255, 0)"
        
        mark_0.style.color = "rgba(255, 255, 255, 0.6)"
        mark_1.style.color = "rgba(255, 255, 255, 0.6)"
        mark_2.style.color = "rgba(255, 255, 255, 0.6)"
        mark_3.style.color = "white"
        mark_4.style.color = "rgba(255, 255, 255, 0.6)"
        mark_5.style.color = "rgba(255, 255, 255, 0.6)"

        resulting_mark_input.value = "3"
    }
)

mark_4.addEventListener(
    'click',
    () => {
        mark_0.style.backgroundColor = "rgba(255, 255, 255, 0)"
        mark_1.style.backgroundColor = "rgba(255, 255, 255, 0)"
        mark_2.style.backgroundColor = "rgba(255, 255, 255, 0)"
        mark_3.style.backgroundColor = "rgba(255, 255, 255, 0)"
        mark_4.style.backgroundColor = "rgba(255, 255, 255, 0.15)"
        mark_5.style.backgroundColor = "rgba(255, 255, 255, 0)"
        
        mark_0.style.color = "rgba(255, 255, 255, 0.6)"
        mark_1.style.color = "rgba(255, 255, 255, 0.6)"
        mark_2.style.color = "rgba(255, 255, 255, 0.6)"
        mark_3.style.color = "rgba(255, 255, 255, 0.6)"
        mark_4.style.color = "white"
        mark_5.style.color = "rgba(255, 255, 255, 0.6)"

        resulting_mark_input.value = "4"
    }
)

mark_5.addEventListener(
    'click',
    () => {
        mark_0.style.backgroundColor = "rgba(255, 255, 255, 0)"
        mark_1.style.backgroundColor = "rgba(255, 255, 255, 0)"
        mark_2.style.backgroundColor = "rgba(255, 255, 255, 0)"
        mark_3.style.backgroundColor = "rgba(255, 255, 255, 0)"
        mark_4.style.backgroundColor = "rgba(255, 255, 255, 0)"
        mark_5.style.backgroundColor = "rgba(255, 255, 255, 0.15)"
        
        mark_0.style.color = "rgba(255, 255, 255, 0.6)"
        mark_1.style.color = "rgba(255, 255, 255, 0.6)"
        mark_2.style.color = "rgba(255, 255, 255, 0.6)"
        mark_3.style.color = "rgba(255, 255, 255, 0.6)"
        mark_4.style.color = "rgba(255, 255, 255, 0.6)"
        mark_5.style.color = "white"

        resulting_mark_input.value = "5"
    }
)

prepare_mark.addEventListener(
    'click',
    () => {
        form_final_mark.value = resulting_mark_input.value

        if (comment_input.value == "") {
            comment_block.style.display = "none"
        }
        else {
            response_comment.value = comment_input.value
        }

        form_container.style.display = "grid"
        header.style.display = "none"
        content_block.style.display = "none"
    }
)
