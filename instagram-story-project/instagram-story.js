// ==================================================
// VARIABLES
// ==================================================

const imgArea = document.querySelector(".img_area");

const imgLike = document.querySelector(".img_like");

const svg = document.querySelector(".img_like svg");

const heartLike = document.querySelector(".like-heart");

const likeCount = document.querySelector(".like_count");

const commentArea = document.querySelector(".comment_area");

const main = document.querySelector("main");



// ==================================================
// COMMENT ICON
// ==================================================

const commentIcon = document.querySelector(".comment svg");


// ==================================================
// CURRENT TEXTAREA
// ==================================================

let currentTextarea = null;


// ==================================================
// LIKE VARIABLES
// ==================================================

let value = 0;

let count = 0;


// Starting Like Counter

likeCount.textContent = "Like Counter " + count;


// ==================================================
// LIKE FUNCTION
// ==================================================

function likePost() {

    heartLike.style.fill = "red";

    value = 1;

    count = count + 1;

    likeCount.textContent = "Like Counter " + count;

}


// ==================================================
// UNLIKE FUNCTION
// ==================================================

function unlikePost() {

    heartLike.style.fill = "transparent";

    value = 0;

    count = count - 1;

    likeCount.textContent = "Like Counter " + count;

}


// ==================================================
// SINGLE CLICK / DOUBLE CLICK CONTROL
// ==================================================

let clickTimer;


// ==================================================
// SINGLE CLICK LIKE / UNLIKE
// ==================================================

heartLike.addEventListener("click", function () {

    clickTimer = setTimeout(function () {

        // LIKE

        if (value === 0) {

            likePost();

        }

        // UNLIKE

        else {

            unlikePost();

        }

    }, 250);

});


// ==================================================
// DOUBLE CLICK LIKE
// ==================================================

imgArea.addEventListener("dblclick", function () {

    // Single click cancel

    clearTimeout(clickTimer);


    // Like only if not already liked

    if (value === 0) {

        likePost();

    }


    // Big Heart Animation

    svg.style.fill = "red";

    svg.style.opacity = "1";

    imgLike.setAttribute(
        "class",
        "img_like animate"
    );


    setTimeout(function () {

        imgLike.setAttribute(
            "class",
            "img_like"
        );

        svg.style.fill = "transparent";

        svg.style.opacity = "0";

    }, 1000);

});


// ==================================================
// COMMENT SYSTEM
// ==================================================


// ==================================================
// CREATE COMMENT BOX FUNCTION
// ==================================================

function createCommentBox() {


    // ==============================================
    // COMMENT BOX
    // ==============================================

    const commentBox = document.createElement("div");

    commentBox.setAttribute(
        "class",
        "comment_box"
    );


    // ==============================================
    // TEXTAREA
    // ==============================================

    const textarea = document.createElement("textarea");

    textarea.setAttribute(
        "class",
        "comment_textarea"
    );

    textarea.setAttribute(
        "placeholder",
        "Post your comment"
    );


    // ==============================================
    // CURRENT TEXTAREA SET
    // ==============================================

    currentTextarea = textarea;


    // ==============================================
    // TEXTAREA CSS
    // ==============================================

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


    // ==============================================
    // BUTTON CSS
    // ==============================================

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

    postButton.addEventListener(
        "click",
        function () {

            // Get textarea value

            const commentText =
                textarea.value.trim();


            // ==========================================
            // EMPTY CHECK
            // ==========================================

            if (commentText === "") {

                alert("Please write a comment.");

                return;

            }


            // ==========================================
            // CREATE COMMENT
            // ==========================================

            const comment =
                document.createElement("div");


            comment.setAttribute(
                "class",
                "posted_comment"
            );


            comment.textContent =
                commentText;


            // ==========================================
            // COMMENT CSS
            // ==========================================

            comment.style.padding = "10px";

            comment.style.marginTop = "10px";

            comment.style.background = "#f2f2f2";

            comment.style.borderRadius = "8px";

            comment.style.fontSize = "15px";

            comment.style.lineHeight = "22px";

            comment.style.color = "#222";


            // ==========================================
            // SHOW COMMENT
            // ==========================================

            commentList.appendChild(comment);


            // ==========================================
            // CLEAR TEXTAREA
            // ==========================================

            textarea.value = "";

        }
    );

}


// ==================================================
// COMMENT ICON CLICK
// ==================================================

// Jab comment SVG par click hoga
// textarea automatically focus hoga

commentIcon.addEventListener("click", function () {

    if (currentTextarea) {

        currentTextarea.focus();

        currentTextarea.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }

});


// ==================================================
// FIRST COMMENT BOX
// ==================================================

createCommentBox();



// ==================================================
// CREATE MOUSE CIRCLE
// ==================================================

const mouseCircle = document.createElement("div");

mouseCircle.setAttribute(
    "class",
    "mouse_circle"
);


// ==================================================
// CIRCLE CSS
// ==================================================

mouseCircle.style.width = "30px";

mouseCircle.style.height = "30px";

mouseCircle.style.background = "black";

mouseCircle.style.border = "2px solid white";

mouseCircle.style.borderRadius = "50%";

mouseCircle.style.position = "fixed";

mouseCircle.style.pointerEvents = "none";

mouseCircle.style.zIndex = "9999";

mouseCircle.style.transform = "translate(-50%, -50%)";

mouseCircle.style.display = "none";


// ==================================================
// ADD CIRCLE TO BODY
// ==================================================

