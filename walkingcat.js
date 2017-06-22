

var script = '<script>document.body.append(<img id="cat" src="purrfectCat.gif" style="position: fixed;bottom: 0px;left: 0px"/>)</script>';

setInterval(function() {
    chrome.tabs.executeScript(script)
}, 800);

