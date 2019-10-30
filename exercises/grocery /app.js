const shopping = {
    "store": "walmart",
    "is-open": true,
    "items-needed": ['donuts', 'apples', 'milk', 'steak'],
    "cost": 23,
    "total": function() {
        return this.store + this["is-open"] + this["items-needed"] + this.cost;
    }
}
console.log(shopping)