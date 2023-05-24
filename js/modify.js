!function modify() {
    let condition_1 = document.getElementsByClassName("is-center").item(0);
    let condition_2 = document.getElementsByClassName("page-title").item(0);
    let condition_3 = document.getElementById("tag");
    let condition_4 = document.getElementById("flink-banners")
    if (condition_1 != null, condition_2 != null, condition_3 != null) {
        page.style.background='none';
        page.style.boxShadow='none';
        page.style.border='none';
        tag.style.background='none';
    };
    if (condition_4 != null) {
        var twikooSubmit = document.getElementsByClassName("tk-submit")[0];
        if (twikooSubmit) {
        twikooSubmit.style.opacity = "0";
        }
    }
}(window);