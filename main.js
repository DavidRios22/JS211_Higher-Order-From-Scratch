//.map()

const boringItems = ["burger", "bike", "pencil", "watch" ]

const coolMachine = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        const coolItems = "cool " + arr[i]
        console.log(coolItems);
    }
}

coolMachine(boringItems)

//.reduce()

const foodOrders = [{burger : 10.95}, {fries: 7.00}, {chicken: 5.95}, {milk: 11.25}]

const totalAmount = (arr) => {
    let prices = 0
    for (let i = 0; i < arr.length; i++) {
        prices += parseFloat(Object.values(arr[i]))
    }
    console.log(prices);
}

totalAmount(foodOrders)

//.filter()

const filter = (arr) => {
    filteredArray = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].charAt(0) === "b") {
            filteredArray += arr[i] + " "
        } 
    }
    console.log(filteredArray);
}

filter(boringItems)


