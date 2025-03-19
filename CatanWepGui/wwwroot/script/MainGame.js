window.Change = window.Change || {
    changeElement: function (classs) {
        var idk = document.querySelectorAll(classs);
        for (const node of idk) {
                node.style.visibility = "visible";
        }
    }
}

window.Place = window.Place || {
    placeBuilding: function (location,building, color) {
        var element = document.getElementById(location);
        if(element.classList.contains("active")) {
            element.classList.remove("active");
            element.classList.add(building.id);
            element.style.height = "20px";
            element.style.width = "20px";

            element.style.top = (element.style.top).toString().split("px")[0] - (0) + "px";
            element.style.left = (element.style.left).toString().split("px")[0] - 5 + "px";
            for (let i = element.id.split("_")[2] - 1 + 1; i < document.querySelectorAll(".intersec").length; i++) {
                elementPlus = document.querySelectorAll(".intersec")[i]
                elementPlus.style.left = (elementPlus.style.left).toString().split("px")[0] - 10 + "px";
            }
        }
        element.style.backgroundColor = color;
        var idk = document.querySelectorAll(".intersec")
        for (const node of idk) {
            if(node.classList.contains("active")) {
                node.backgroundColor = "rgb(255,255,255)";
                node.style.visibility = "hidden"; //hidden
                node.backgroundColor = "rgb(0, 160, 255)";

            }
        }

    }
}