onload = function () {
    function setRem() {
        let uiWidth = 1366;
        let htmlWidth = document.documentElement.clientWidth;
        let rate = htmlWidth / uiWidth * 100 + "px";
        document.getElementsByTagName("html")[0].style.fontSize = rate;
    }

    onresize = function () {
        setRem();
    }
};