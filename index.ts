type Pizza = {
  name: string
  price: number
}

type Order = {
  id: number
  pizza: Pizza
  status: 'ordered' | 'completed'
}

const menu = [
  { name: 'Margherita', price: 8 },
  { name: 'Pepperoni', price: 10 },
  { name: 'Hawaiian', price: 10 },
  { name: 'Veggie', price: 9 },
]

let cashInRegister = 100
let nextOrderId = 0
const orderQueue: Order[] = []

function addNewPizza(pizzaObj: Pizza) {
  menu.push(pizzaObj)
}

function placeOrder(pizzaName: string) {
  const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
  if (!selectedPizza) {
    console.log(`${pizzaName} does not exist in the menu`)
    return
  }

  cashInRegister += selectedPizza.price
  const newOrder: Order = {
    id: nextOrderId += 1,
    pizza: {
      name: selectedPizza.name,
      price: selectedPizza.price
    },
    status: 'ordered',
  }

  orderQueue.push(newOrder)
  console.log(`Order: ${selectedPizza.name} Status: ${newOrder.status}`)
  return newOrder
}

function completeOrder(orderId: number) {
  const order = orderQueue.find(order => order.id === orderId)
  if (!order) {
    console.log(`${orderId} was not found in the order queue`)
    throw new Error()
  }
  order.status = 'completed'
  return order
}

addNewPizza({ name: 'BBQ Chicken', price: 12 })

placeOrder('BBQ')
placeOrder('Margherita')
console.log(orderQueue)

completeOrder(1)
