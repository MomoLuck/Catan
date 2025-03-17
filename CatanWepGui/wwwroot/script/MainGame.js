window.Change = window.Change || {
    changeElement: function (classs) {
        var idk = document.querySelectorAll(classs);
        for (const node of idk) {
            if(node.classList.contains("active")) {
                node.style.visibility = "visible";
            }
        }
    }
}

window.Place = window.Place || {
    placeBuilding: function (location,building) {
        var element = document.getElementById(location);
        element.classList.remove("active");
        element.classList.add(building.id);
        var idk = document.querySelectorAll(".intersec")
        for (const node of idk) {
            node.style.visibility = "hidden";
        }
    }
}