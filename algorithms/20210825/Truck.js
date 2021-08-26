let bridge_length = 2;
let weight = 10;
let truck_weights = [7, 4, 5, 6]; // 8

function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    let goingTrucks = [];
    let weights = 0;
    const sumTruck = (truck) => {
        let sum = 0;
        truck.forEach(element => {
            sum += element;
        });
        return sum;
    }
    while (truck_weights.length > 0) {

    }
    truck_weights.forEach((truck, index) => {
        weights += truck;
        if (weights > weight) {

        }
    })
    return answer;
}