function trafficLight(color) {
    if (color == "red" || color == "RED") {
        console.log("stop")
    } else if (color == "yellow" || color == "YELLOW") {
        console.log("ready")
    } else if (color == "green" || color == "GREEN") {
        console.log("go")
    } else {
        console.log("hmm")
    }


}
trafficLight("red")