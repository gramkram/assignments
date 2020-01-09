const carrots = ["bright orange", "ripe", "rotten"]


function mapVegetables(arr) {
    return arr.map(function(carrot) {
        return { type: "carrot", name: carrot }
    })
}

