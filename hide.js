var lrem = document.getElementById("lrem");
lrem.style.display = "none";

var gstats = document.getElementById("gstats");
gstats.style.display = "none";

const config = { childList: true };

const callback = function(mutationsList) {
    for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            if (parseInt(lrem.textContent) <= 4) {
                lrem.style.display = "block";
            }
        }
    }
};

const observer = new MutationObserver(callback);

observer.observe(lrem, config);
