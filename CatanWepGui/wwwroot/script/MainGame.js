﻿window.Change = window.Change || {
    changeElement: function (classId, color, firstPics, resourceCards) {
        var firstPicsSettlementBool = firstPics[0] > 0
        var firstPicsRoadBool = firstPics[1] > 0
        var elements = document.querySelectorAll(classId)
        var otherElements
        var pressedButton = document.getElementsByClassName("pressed")
        if(pressedButton[0]){
            var building = pressedButton[0].id
        } else{
            var building = ""
        }
        if (pressedButton.length == 0) {
            for (const node of elements) {
                if (node.classList.contains("active")) {
                    node.style.visibility = "hidden"
                }
            }
            for (const node of document.getElementById("top_grid").children) {
                for(const crown of node.children) {
                    if (crown.classList.contains("crownTemp")) {
                        crown.remove()
                    }
                }
            }
        } else {
            if (classId == ".intersec") {
                otherElements = document.querySelectorAll(".bord")
            } else {
                otherElements = document.querySelectorAll(".intersec")
            }


            if (classId == ".intersec") {
                if (building == "Settlement") {
                    for (const node of elements) {
                        if (Place.canPlaceSettlement(building, node.id, color, firstPicsSettlementBool, resourceCards) && node.classList.contains("active")) {
                            node.style.visibility = "visible"
                        } else {
                            if (node.classList.contains("active")) {
                                node.style.visibility = "hidden"
                            }
                        }
                        for (const node of otherElements) {
                            if (node.classList.contains("active")) {
                                node.style.visibility = "hidden"
                            }
                        }
                    }
                    for (const crown of node.children) {
                        if (crown.classList.contains("crownTemp")) {
                            crown.remove()
                        }
                    }
        } else {
                    for (const node of elements) {
                        if (Place.canPlaceSettlement(building, node.id, color, firstPicsSettlementBool, resourceCards) && !node.classList.contains("active")) {
                            this.createCrown(node, "#00A0FF80", false)

                        } else {
                            for (const crown of node.children) {
                                if (crown.classList.contains("crownTemp")) {
                                    crown.remove()
                                }
                            }
                        }
                    }
                }
            } else {
                for (const node of elements) {
                    if (Place.canPlace(node.id, color, firstPicsRoadBool, resourceCards) && node.classList.contains("active")) {
                        node.style.visibility = "visible"
                    } else {
                        if (node.classList.contains("active")) {
                            node.style.visibility = "hidden"
                        }
                    }
                }
                for (const node of otherElements) {
                    if (node.classList.contains("active")) {
                        node.style.visibility = "hidden"
                    }
                }
            for (const crown of node.children) {
                if (crown.classList.contains("crownTemp")) {
                    crown.remove()
                }
            }
            }
        }
    },
    createCrown: function (node,color, real) {
        const crown = document.createElement('div');
        if(real) {
            crown.classList.add("crown")
        } else{
            crown.classList.add("crownTemp")
            crown.classList.add("active")
        }
        crown.style.position = 'relative';
        //crown.style.top = (node.style.top).toString().split("px")[0] - (8) + "px";
        //crown.style.left = parseInt((node.style.left).toString().split("px")[0].split(".")[0]) - 9 + "px";
        crown.style.top = "-7px";
        crown.style.left = "1px";
        for (let i = node.id.split("_")[2] - 1 + 1; i > 0; i--) {
            //crown.style.left = parseInt((crown.style.left).toString().split("px")[0].split(".")[0]) +  10 + "px";
        }
        if(real) {
            //crown.style.left = parseInt((crown.style.left).toString().split("px")[0].split(".")[0]) + 10 * document.getElementsByClassName("crown").length + "px";
        } else {
            //crown.style.left = parseInt((crown.style.left).toString().split("px")[0].split(".")[0]) + 10 * document.getElementsByClassName("crownTemp").length + "px";
        }
        crown.style.width = '18px';
        crown.style.height = '12px';
        crown.style.backgroundColor = color;
        crown.style.clipPath = `polygon(0% 100%, 0% 60%, 16% 0%, 33% 60%, 50% 0%, 66% 60%, 83% 0%, 100% 60%, 100% 100%)`;
        node.appendChild(crown)        
    }

    }

window.Place = window.Place || {
    placeBuilding: function (location,building, color, FirstPicValue, resourceCards) {
        var element = document.getElementById(location);
        var firstpics = FirstPicValue > 0
        if(building.id == 1){
            building = "Settlement"
            element.classList.remove("active");
            element.classList.add(building);
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
        } else{
            element.classList.remove("Settlement")
            element.classList.add("City")
            building = "City"
            Change.createCrown(element,"gold",true)

        }
    },

    canPlaceSettlement: function (building, location, color, firstpics, resourceCards) {
        // Wenn settlement -> soll auf firstpics hören und weiter machen egal ob resourcen da sind aber er soll immernoch auf Kollisionen aufpassen
        // Wenn city && firstpics -> immer nein
        // In PlaceBuilding einfügen mit building und so 
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
        if(building == "Settlement"){
        // Alle Linien, die mit diesem Knoten verbunden sind
        const connectedLines = Object.entries(pairs)
            .filter(([_, nodes]) => nodes.includes(location))
            .map(([lineId]) => lineId);

        if (connectedLines.length === 0 && !firstpics) return false;
        // Startphase: nur sicherstellen, dass keine fremden Gebäude nebenan
        // Normale Phase: prüfen, ob eine verbundene Linie der eigenen Farbe ist
        let hasOwnRoad = false;
        for (const line of connectedLines) {
            const lineEl = document.getElementById(line);
            if (!lineEl.classList.contains("active") && lineEl.classList.contains(color)) {
                hasOwnRoad = true;
            } else if (!lineEl.classList.contains("active") && !lineEl.classList.contains(color)) {
                return false;
            }
        }
        if (!hasOwnRoad && !firstpics) return false;
        if(!firstpics) {
            const hasResources = resourceCards.filter(f => f == "Wheat").length > 0 &&
                resourceCards.filter(f => f == "Clay").length > 0;
            return hasResources;
        } else{
            return true
            }
        } else{
            if(firstpics) return false
            var origin = document.getElementById(location)
            const hasResources = resourceCards.filter(f => f == "Stone").length > 2 &&
                resourceCards.filter(f => f == "Wheat").length > 1;
            return !origin.classList.contains("active") && origin.classList.contains("Settlement") && origin.classList.contains(color) && hasResources;
            
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
            if(firstpics){
                return (ownedInactive || connectedToOwnRoad) && !enemyInactive; 
            } else{
                if (resourceCards.filter(f => f == "Wheat").length > 0 && resourceCards.filter(f => f == "Clay").length > 0){
                    return (ownedInactive || connectedToOwnRoad) && !enemyInactive;
                }
                else{
                    return false;
                }
            }
    },
    
    placeStreet: function (location, color, FirstPicValue, resourceCards) {
        var element = document.getElementById(location);
        var firstpics = FirstPicValue > 0
        resourceCards.push("Wheat","Wood","Stone","Sheep","Clay")
                if (this.canPlace(location, color,firstpics,resourceCards)) {
                    if (element.classList.contains("active")) {
                        element.classList.remove("active");
                        document.getElementById(location).style.backgroundColor = color;
                        element.classList.add(color);
                    }

                }
            }
}


window.Butn = window.Butn || {
    butnn: function () {
        let buttons = document.getElementsByClassName("butn");
        function removeBackgroundColor() {
            for (const button of buttons) {
                button.style.backgroundColor = "#83634A"
                button.classList.remove("pressed")
            }
        }
        
        for (const button of buttons) {
            button.addEventListener("click", function () {
                let buttons = document.getElementsByClassName("butn");
                if(!button.classList.contains("pressed")){
                    removeBackgroundColor()
                    button.style.backgroundColor = "#af7e69";
                    button.classList.add("pressed")
                } else{
                    button.style.backgroundColor = "#83634A"
                    button.classList.remove("pressed")
                }
            })
        }
        document.getElementById("nextPlayerButton").children[0].addEventListener("click", function () {

            for (const node of document.getElementsByClassName("active")) {
                if (true && node.classList.contains("active")) { // anstatt true halt Place.CanPlaceSettlements mabye ka
                    node.style.visibility = "hidden"
                }
            }
            for (const node of document.getElementsByClassName("top_grid")) {
            }
            let button = document.getElementsByClassName("pressed")[0];
            if(button) {
                button.style.backgroundColor = "#83634A"
                button.classList.remove("pressed")
            }

        })
    },
    blockButnn: function(phase){
        var buttons = document.getElementsByClassName("butn")
        for(var button of buttons) {
        }
        if(phase == 2){
            for(var button of buttons) {
                button.disabled = true
            }
        } else{
            for(var button of buttons) {
                button.disabled = false
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
            8: ["top_grid_11","top_grid_15","top_grid_16","top_grid_19","top_grid_20","top_grid_24"],
            9: [],
            10: ["top_grid_13","top_grid_17","top_grid_18","top_grid_21","top_grid_22","top_grid_26"],
            11: ["top_grid_14","top_grid_18","top_grid_22","top_grid_27"],
            12: ["top_grid_19","top_grid_23","top_grid_24","top_grid_28","top_grid_31"],
            13: ["top_grid_20","top_grid_24","top_grid_25","top_grid_28","top_grid_29","top_grid_32"],
            14: ["top_grid_21","top_grid_25","top_grid_26","top_grid_29","top_grid_30","top_grid_33"],
            15: ["top_grid_22","top_grid_26","top_grid_27","top_grid_30","top_grid_34"],
            16: ["top_grid_28","top_grid_31","top_grid_32","top_grid_35"],
            17: ["top_grid_29","top_grid_32","top_grid_33","top_grid_35","top_grid_36"],
            18: ["top_grid_30","top_grid_33","top_grid_34","top_grid_36"]
        };

        tiles = [...document.getElementsByClassName("tile")];
        tilesDesertless = [...document.getElementsByClassName("tile")];
        tilesDesertless.splice(9,1);
        tilesFiltered = tilesDesertless.filter(t => t.children[0].textContent == roll);
        
        ernte = {
            Wood : [],
            Sheep : [],
            Stone : [],
            Wheat : [],
            Clay : []
        }
        tilesFiltered.forEach(tile => {
            if(!tile.childNodes[1]) {
                resource = tile.style.backgroundImage.split("/")[2].split(".")[0]

                nodes = tilePairs[tiles.indexOf(tile)]
                nodesSettlement = nodes.filter(node => !document.getElementById(node).classList.contains("active") && document.getElementById(node).classList.contains("Settlement"))
                nodesCity = nodes.filter(node => !document.getElementById(node).classList.contains("active") && document.getElementById(node).classList.contains("City"))

                nodesSettlement.forEach(node => {
                    ernte[resource].push(document.getElementById(node).classList.toString().split("#")[1].split(" ")[0])
                })
                nodesCity.forEach(node => {
                    ernte[resource].push(document.getElementById(node).classList.toString().split("#")[1].split(" ")[0])
                    ernte[resource].push(document.getElementById(node).classList.toString().split("#")[1].split(" ")[0])
                })
            }
        })
        console.log(ernte)
        return ernte
    }
}
window.Win = window.Win || {
    hasWon:function(winnerName, playerColor){
        document.getElementById("winnerOverlay").style.display = "flex";
        document.getElementById("winnerName").textContent = winnerName + " has Won";
        console.log(playerColor)
        
        placedStreets = Array.from(document.getElementsByClassName("bord"))
            .filter(s => !s.classList.contains("active"))
            .filter(s => s.classList.toString().split("#")[1] === playerColor).length;

        placedSettlements = Array.from(document.getElementsByClassName("Settlement"))
            .filter(s => !s.classList.contains("active"))
            .filter(s => s.classList.toString().split("#")[1] === playerColor).length;

        placedCities = Array.from(document.getElementsByClassName("City"))
            .filter(s => !s.classList.contains("active"))
            .filter(s => s.classList.toString().split("#")[1] === playerColor).length;
        
        document.getElementById("streetsPlaced").textContent = "Streets Placed: " + placedStreets;
        document.getElementById("settlementsPlaced").textContent = "Settlements Placed: " + placedStreets;
        document.getElementById("citiesPlaced").textContent = "Cities Placed: " + placedCities;
        
    }
}
window.Thief = window.Thief || {
    move: function (phase){
        var raiderButton = document.getElementById("Raider")
        var nextPlayerButton = document.getElementById("nextPlayerButton").childNodes[0]
        var developmentBuy = document.getElementById("developmentBuy")
        if(phase === "init"){
            for (const tile of document.getElementsByClassName("tile")) {
                    tile.addEventListener("click", function(){
                    Thief.createThief(tile)
                        for (let tile of document.getElementsByClassName("tile")) {
                            tile.style.pointerEvents = "none"
                        }
                        const button = document.getElementById("Raider");
                        button.style.backgroundColor = "#83634A"
                        button.classList.remove("pressed")
                        raiderButton.disabled = false
                        for (const button of document.getElementsByClassName("butn")) {
                            button.disabled = false
                        }
                        nextPlayerButton.disabled = false
                        developmentBuy.disabled = false
                })
                
            }
            this.createThief(document.getElementsByClassName("tile")[9])
        } else{
            if(phase == "check"){
                raiderButton.classList.add("pressed")
                raiderButton.style.backgroundColor = "#af7e69";
                raiderButton.disabled = true
                for (const button of document.getElementsByClassName("butn")) {
                    button.disabled = true
                }
                nextPlayerButton.disabled = true
                developmentBuy.disabled = true
                var tiles = document.getElementsByClassName("tile")
                for (let tile of tiles) {
                    tile.style.pointerEvents = "auto"
                }
            }
        }
    },
    createThief: function (location){
        for (const tile of document.getElementsByClassName("tile")) {
            if(tile.style.backgroundImage.split("/")[2].split(".")[0] !== "Desert") {
                if (tile.childNodes.length >= 2) {
                    tile.childNodes[1].remove()
                }
            } else{
                if (tile.childNodes.length >= 1) {
                    tile.childNodes[0].remove()
                }
            }
        }
        var thief = document.createElement("div")
        thief.style.position = "absolute" // muss noch geöndert werden weil ist zu niedrig
        thief.style.top = "49px"
        thief.style.left = "40px"
        thief.style.height = "50px"
        thief.style.width = "50px"
        thief.style.borderRadius = "50%"
        thief.style.backgroundColor = "black"
        thief.style.zIndex = "1"
        thief.classList.add("thief")
        location.appendChild(thief)

    }
}