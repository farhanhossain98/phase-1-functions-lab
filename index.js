// Code your solution in this file!

function distanceFromHqInBlocks(distance) {
    if (distance > 42){
        return  distance - 42;
    }   else {
        return 42 - distance;
    } 
}

function distanceFromHqInFeet(distance){
    return distanceFromHqInBlocks(distance)*264
}

function distanceTravelledInFeet(distanceTravelled,start){
    if (distanceTravelled < start ) {
        return (start - distanceTravelled)*264
    } else {
        return (distanceTravelled-start)*264
    }
}

function calculatesFarePrice(start,destination){
    const distance = distanceTravelledInFeet(start,destination)
    if (distance <= 400){
        return (0)
    } else if (distance<2000 && distance > 400){
        return (distance - 400)*2/100
    } else if ((distance) > 2000 && (distance) <2500) {
        return (25)
    } else if (distance > 2500 ) {
        return 'cannot travel that far'
    }


}