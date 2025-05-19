window.Change = window.Change || {
    changeElement: function (classs, color) {
        var idk  = document.querySelectorAll(classs);
        for (const node of idk) {
                node.style.visibility = "visible";
        }
        if(classs === ".bord"){
            var idk2 = document.querySelectorAll(".intersec")
            for(node of idk2) {
                node.style.visibility = "visible";
            }
            for (const node of idk) {
                if (!Place.canPlace(node.id, color)) {
                    if (node.classList.contains("active")) {
                        node.style.visibility = "hidden";
                    }
                }
            }
            for (const node of idk2) {
                if (node.classList.contains("active")) {
                    node.backgroundColor = "rgb(255,255,255)";
                    node.style.visibility = "hidden"; //hidden
                    node.backgroundColor = "rgb(0, 160, 255)";

                }
            }
            
        } else{
            var idk2 = document.querySelectorAll(".bord")
            for(node of idk2) {
                if(node.classList.contains("active")) {
                node.style.visibility = "hidden";
                }
            }
        }
        
    },

}

window.Place = window.Place || {
    placeBuilding: function (location,building, color, FirstPicValue) {
        var element = document.getElementById(location);
        var firstpics = FirstPicValue > 0
        if(this.canPlace(location,color, firstpics)) {
            canContinue = false
            if(firstpics && building.id === 1){
                canContinue = true
            } else{
                if(element.classList.contains("active") && !firstpics && true){
                    canContinue = true
                }
            }
        if(canContinue) {
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
            element.style.backgroundColor = color;
            element.classList.add(color);
        

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
    },
    canPlace: function (location, color, firstpics, resourceCards) {
        const pairs = {
            "top_grid_line_0": ["top_grid_1", "top_grid_4"],
            "top_grid_line_1": ["top_grid_2", "top_grid_5"],
            "top_grid_line_2": ["top_grid_3", "top_grid_7"],
            "top_grid_line_3": ["top_grid_4", "top_grid_7"],
            "top_grid_line_4": ["top_grid_4", "top_grid_8"],
            "top_grid_line_5": ["top_grid_5", "top_grid_8"],
            "top_grid_line_6": ["top_grid_5", "top_grid_9"],
            "top_grid_line_7": ["top_grid_6", "top_grid_9"],
            "top_grid_line_8": ["top_grid_7", "top_grid_11"],
            "top_grid_line_9": ["top_grid_8", "top_grid_12"],
            "top_grid_line_10": ["top_grid_9", "top_grid_13"],
            "top_grid_line_11": ["top_grid_10", "top_grid_15"],
            "top_grid_line_12": ["top_grid_11", "top_grid_15"],
            "top_grid_line_13": ["top_grid_11", "top_grid_16"],
            "top_grid_line_14": ["top_grid_12", "top_grid_16"],
            "top_grid_line_15": ["top_grid_12", "top_grid_17"],
            "top_grid_line_16": ["top_grid_13", "top_grid_17"],
            "top_grid_line_17": ["top_grid_13", "top_grid_18"],
            "top_grid_line_18": ["top_grid_14", "top_grid_18"],
            "top_grid_line_19": ["top_grid_15", "top_grid_19"],
            "top_grid_line_20": ["top_grid_16", "top_grid_20"],
            "top_grid_line_21": ["top_grid_17", "top_grid_21"],
            "top_grid_line_22": ["top_grid_18", "top_grid_22"],
            "top_grid_line_23": ["top_grid_19", "top_grid_23"],
            "top_grid_line_24": ["top_grid_19", "top_grid_24"],
            "top_grid_line_25": ["top_grid_20", "top_grid_24"],
            "top_grid_line_26": ["top_grid_20", "top_grid_25"],
            "top_grid_line_27": ["top_grid_21", "top_grid_25"],
            "top_grid_line_28": ["top_grid_21", "top_grid_26"],
            "top_grid_line_29": ["top_grid_22", "top_grid_26"],
            "top_grid_line_30": ["top_grid_22", "top_grid_27"],
            "top_grid_line_31": ["top_grid_24", "top_grid_28"],
            "top_grid_line_32": ["top_grid_25", "top_grid_29"],
            "top_grid_line_33": ["top_grid_26", "top_grid_30"],
            "top_grid_line_34": ["top_grid_28", "top_grid_31"],
            "top_grid_line_35": ["top_grid_28", "top_grid_32"],
            "top_grid_line_36": ["top_grid_29", "top_grid_32"],
            "top_grid_line_37": ["top_grid_29", "top_grid_33"],
            "top_grid_line_38": ["top_grid_30", "top_grid_33"],
            "top_grid_line_39": ["top_grid_30", "top_grid_34"],
            "top_grid_line_40": ["top_grid_32", "top_grid_35"],
            "top_grid_line_41": ["top_grid_33", "top_grid_36"]
        };

        const neighbors = {};
        for (const [line, nodes] of Object.entries(pairs)) {
            for (const node of nodes) {
                for (const [otherLine, otherNodes] of Object.entries(pairs)) {
                    if (line !== otherLine && otherNodes.includes(node)) {
                        if (!neighbors[line]) neighbors[line] = new Set();
                        neighbors[line].add(otherLine);
                    }
                }
            }
        }
        for (const line in neighbors) {
            neighbors[line] = Array.from(neighbors[line]);
        }

        if(pairs[location] !== undefined) {
            const currentNodes = pairs[location];

            const [node1, node2] = currentNodes.map(id => document.getElementById(id));
            if (!node1 || !node2) return false;

            const ownedInactive = [node1, node2].some(node => !node.classList.contains("active") && node.classList.contains(color));
            const enemyInactive = [node1, node2].some(node => !node.classList.contains("active") && !node.classList.contains(color));
            const neighborLines = neighbors[location];
            const connectedToOwnRoad = neighborLines.some(lineId => {
                const lineElement = document.getElementById(lineId);
                return lineElement && !lineElement.classList.contains("active") && lineElement.classList.contains(color);
            })
            
            if (resourceCards.filter(f => f.Id == "Wheat").length >= 0 && resourceCards.filter(f => f.Id == "Clay").length >= 0){
                return (ownedInactive || connectedToOwnRoad) && !enemyInactive;
            }
            else{
                return false;
            }

        } else{
            const currentLines = Object.keys(pairs).filter(pair => pairs[pair].includes(location));
            
            let hasOwnRoad = false;
            for (const line of currentLines) {
                const lineEl = document.getElementById(line);
                if(firstpics && !(!lineEl.classList.contains("active") && !lineEl.classList.contains(color))){
                    return true
                }
                if (!lineEl.classList.contains("active") && lineEl.classList.contains(color)) {
                    hasOwnRoad = true;
                } else if (!lineEl.classList.contains("active") && !lineEl.classList.contains(color)) {
                    return false;
                }
            }
            if (resourceCards.filter(f => f.Id == "Wheat").length > 0 && resourceCards.filter(f => f.Id == "Clay").length > 0){
                return hasOwnRoad;
            }
            else{
                return false;
            }

        }        
    },
    
    placeStreet: function (location, color, FirstPicValue, resourceCards) {
        var element = document.getElementById(location);
        var firstpics = FirstPicValue > 0
        console.log(firstpics);
        if (this.canPlace(location, color, firstpics, resourceCards)) {
            canContinue = false
            if (firstpics) {
                canContinue = true
            } else {
                if (element.classList.contains("active") && true) {
                    canContinue = true
                }
            }
            if (canContinue) {
                if (Place.canPlace(location, color, resourceCards)) {
                    if (element.classList.contains("active")) {
                        element.classList.remove("active");
                        document.getElementById(location).style.backgroundColor = color;
                        element.classList.add(color);
                    }
                    

                    var idk = document.querySelectorAll(".bord")
                    for (const node of idk) {
                        if (node.classList.contains("active")) {
                            node.backgroundColor = "rgb(255,255,255)";
                            node.style.visibility = "hidden"; //hidden
                            node.backgroundColor = "rgb(0, 160, 255)";

                        }
                    }

                }
            }
        }
    }
}


window.Butn = window.Butn || {
    butnn: function () {
        let buttons = document.getElementsByClassName("buildingbutn");
        function removeBackgroundColor() {
            for (const button of buttons) {
                button.style.backgroundColor = "#83634A"
            }
        }
        
        for (const button of buttons) {
            button.addEventListener("click", function () {
                let buttons = document.getElementsByClassName("buildingbutn");
                removeBackgroundColor();
                button.style.backgroundColor = "#af7e69";
            })
            
            
        let actives = document.getElementsByClassName("active")
        for (const active of actives) {
             active.addEventListener("click", function () {
                removeBackgroundColor();
             })
            }
        }
    }
}

window.Ertrag = window.Ertrag || {
    erwirtschaftung: function (roll) {
        const tilePairs = {
            0: ["top_grid_1","top_grid_3","top_grid_4","top_grid_7"],
            1: ["top_grid_1","top_grid_2","top_grid_4","top_grid_5","top_grid_8"],
            2: ["top_grid_2","top_grid_5","top_grid_6","top_grid_9"],
            3: ["top_grid_3","top_grid_7","top_grid_10","top_grid_11","top_grid_15"],
            4: ["top_grid_4","top_grid_7","top_grid_8","top_grid_11","top_grid_12","top_grid_16"],
            5: ["top_grid_5","top_grid_8","top_grid_9","top_grid_12","top_grid_13","top_grid_17"],
            6: ["top_grid_6","top_grid_9","top_grid_13","top_grid_14","top_grid_18"],
            7: ["top_grid_10","top_grid_15","top_grid_19","top_grid_23"],
            8: [],
            9: [],
            10: [],
            11: [],
            12: [],
            13: [],
            14: [],
            15: [],
            16: [],
            17: [],
            18: [],
            19: [],
            20: [],
            21: [],
            22: [],
            23: [],
            24: [],
            25: [],
            26: [],
            27: [],
            28: [],
            29: [],
            30: [],
            31: [],
            32: [],
            33: [],
            34: [],
            35: [],
            36: [],
            37: [],
            38: [],
            39: [],
            40: [],
            41: []
        };

        tiles = [...document.getElementsByClassName("tile")];
        tiles.splice(9,1);
        tilesFiltered = tiles.filter(t => t.children[0].textContent == roll);
        tiles.forEach(t => console.log(t.children[0].textContent));
        console.log(tiles.indexOf(tilesFiltered[0]));
        console.log(tiles.indexOf(tilesFiltered[1]));
    }
}