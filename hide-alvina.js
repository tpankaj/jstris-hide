var lrem = document.getElementById("lrem");
lrem.style.display = "none";

var gstats = document.getElementById("gstats");
gstats.style.display = "none";

var chatBox = document.getElementById("chatBox");
chatBox.style.display = "none";

var chatInputArea = document.getElementById("chatInputArea");
chatInputArea.style.display = "none";

const config = { childList: true };

const callback = function(mutationsList) {
    for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            if (parseInt(lrem.textContent) <= 0) {
                lrem.style.display = null;
                gstats.style.display = "none";
                chatBox.style.display = "none";
                chatInputArea.style.display = "none";
            }
            else if (parseInt(lrem.textContent) <= 4) {
                lrem.style.display = null;
                gstats.style.display = "none";
                chatBox.style.display = "none";
                chatInputArea.style.display = "none";
            } else {
                lrem.style.display = "none";
                gstats.style.display = "none";
                chatBox.style.display = "none";
                chatInputArea.style.display = "none";
            }
        }
    }
};

const observer = new MutationObserver(callback);

observer.observe(lrem, config);
