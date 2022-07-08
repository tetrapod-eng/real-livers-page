const question_c = document.getElementById("question");
const map_dom = {};

questionInit();

function questionInit() {
    const que_items = question_c.getElementsByClassName("que-add");
    const que_body = question_c.getElementsByClassName("question-body");

    for (var i = 0; i < que_items.length; i++) {
        que_items[i].setAttribute("data-idx", i);
        que_body[i].setAttribute("id", "que-body-" + i);

        que_items[i].addEventListener("click", function(e) {
            const target_idx = e.target.getAttribute("data-idx");
            const body = document.getElementById("que-body-" + target_idx);

            const now = body.getAttribute("class");
            
            if (now.indexOf("close") > -1) {
                body.setAttribute("class", now.replace("close", "open"));
            } else {
                console.log(now.replace("open", "close"));
                body.setAttribute("class", now.replace("open", "close"));
            }
        })
    }

}