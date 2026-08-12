// ==================================================
// VARIABLES
// ==================================================

const imgArea = document.querySelector(".img_area");

const imgLike = document.querySelector(".img_like");

const svg = document.querySelector(".img_like svg");

const heartLike = document.querySelector(".like-heart");

const likeCount = document.querySelector(".like_count");

const commentArea = document.querySelector(".comment_area");


// ==================================================
// LIKE VARIABLES
// ==================================================

let value = 0;

let count = 0;

likeCount.textContent = count;


// ==================================================
// DOUBLE CLICK LIKE
// ==================================================

imgArea.addEventListener("dblclick", function () {

    svg.style.fill = "red";

    svg.style.opacity = "1";

    imgLike.setAttribute("class", "img_like animate");

    heartLike.style.fill = "red";

    count = count + 1;

    likeCount.textContent = count;


    setTimeout(function () {

        imgLike.setAttribute("class", "img_like");

        svg.style.fill = "transparent";

        svg.style.opacity = "0";

    }, 1000);

});


// ==================================================
// SINGLE CLICK LIKE / UNLIKE
// ==================================================

heartLike.addEventListener("click", function () {

    // LIKE
    if (value === 0) {

        heartLike.style.fill = "red";

        value = 1;

        count = count + 1;

        likeCount.textContent = count;

    }

    // UNLIKE
    else {

        heartLike.style.fill = "transparent";

        value = 0;

        count = count - 1;

        likeCount.textContent = count;

    }

});


// ==================================================
// COMMENT SYSTEM
// ==================================================


// Main function
// New textarea + button create karega

function createCommentBox() {

    // ==============================================
    // COMMENT BOX
    // ==============================================

    const commentBox = document.createElement("div");

    commentBox.setAttribute("class", "comment_box");


    // ==============================================
    // TEXTAREA
    // ==============================================

    const textarea = document.createElement("textarea");

    textarea.setAttribute("class", "comment_textarea");

    textarea.setAttribute(
        "placeholder",
        "Post your comment"
    );


    // TEXTAREA CSS

    textarea.style.width = "100%";

    textarea.style.height = "40px";

    textarea.style.padding = "10px";

    textarea.style.fontSize = "15px";

    textarea.style.border = "1px solid #ccc";

    textarea.style.borderRadius = "8px";

    textarea.style.resize = "none";

    textarea.style.outline = "none";

    textarea.style.boxSizing = "border-box";


    // ==============================================
    // POST BUTTON
    // ==============================================

    const postButton = document.createElement("button");

    postButton.textContent = "Post";

    postButton.setAttribute(
        "class",
        "post_button"
    );

    postButton.setAttribute(
        "type",
        "button"
    );


    // BUTTON CSS

    postButton.style.marginTop = "8px";

    postButton.style.padding = "9px 20px";

    postButton.style.background = "royalblue";

    postButton.style.color = "white";

    postButton.style.border = "none";

    postButton.style.borderRadius = "6px";

    postButton.style.cursor = "pointer";

    postButton.style.fontSize = "14px";


    // ==============================================
    // COMMENT LIST
    // ==============================================

    const commentList = document.createElement("div");

    commentList.setAttribute(
        "class",
        "comment_list"
    );


    // ==============================================
    // APPEND
    // ==============================================

    commentBox.appendChild(textarea);

    commentBox.appendChild(postButton);

    commentBox.appendChild(commentList);

    commentArea.appendChild(commentBox);


    // ==============================================
    // POST COMMENT
    // ==============================================

    postButton.addEventListener("click", function () {

        const commentText = textarea.value.trim();


        // Empty check

        if (commentText === "") {

            alert("Please write a comment.");

            return;

        }


        // ==========================================
        // CREATE COMMENT
        // ==========================================

        const comment = document.createElement("div");

        comment.setAttribute(
            "class",
            "posted_comment"
        );


        comment.textContent = commentText;


        // COMMENT CSS

        comment.style.padding = "10px";

        comment.style.marginTop = "10px";

        comment.style.background = "#f2f2f2";

        comment.style.borderRadius = "8px";

        comment.style.fontSize = "15px";

        comment.style.lineHeight = "22px";


        // ==========================================
        // SHOW COMMENT
        // ==========================================

        commentList.appendChild(comment);


        // ==========================================
        // CLEAR TEXTAREA
        // ==========================================

        textarea.value = "";


    });

}


// ==================================================
// FIRST COMMENT BOX
// ==================================================

createCommentBox();