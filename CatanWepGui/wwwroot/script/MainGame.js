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
        element.classList.remove("active");
        element.classList.add(building.id);
        element.style.height = "20px";
        element.style.width = "20px";
        
        element.style.top = (element.style.top).toString().split("px")[0] - 5 +"px";
        element.style.left = (element.style.left).toString().split("px")[0] - 5 +"px";
        elementPlus = document.querySelectorAll(".intersec")[element.id.split("_")[2] -1 + 1]
        document.querySelectorAll(".intersec")[element.id.split("_")[2] -1 + 1].style.left = 
        
        element.style.backgroundColor = color;
        console.log("asdf")
        var idk = document.querySelectorAll(".intersec")
        for (const node of idk) {
            if(node.classList.contains("active")) {
                node.style.visibility = "hidden";
            } else {
                node.style.visibility = "visible";
            }
        }
    }
}