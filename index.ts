const menu = [
  { name: 'Margherita', price: 8 },
  { name: 'Pepperoni', price: 10 },
  { name: 'Hawaiian', price: 10 },
  { name: 'Veggie', price: 9 },
]

let cashInRegister = 100
const orderQueue = []
let nextOrderId = 0

function addNewPizza(name, price) {
  const newPizza = {
    name: name,
    price: price
  }

  const exists = menu.find(pizza => pizza.name === newPizza.name)

  if (!exists) {
    menu.push(newPizza)
    console.log(`${newPizza.name} pizza added succesfsfully to the menu!`)
  } else {
    console.error(`${newPizza.name} piza is already on the menu.`)
  }
}

function placeOrder(pizzaName) {
  const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
  if (!selectedPizza) {
    console.log(`${pizzaName} does not exist in the menu`)
    return
  }

  cashInRegister += selectedPizza.price
  const newOrder = { pizza: selectedPizza, status: 'ordered', id: nextOrderId += 1 }
  orderQueue.push(newOrder)

  console.log(`Order: ${selectedPizza.name} Status: ${newOrder.status}`)

  return newOrder
}

function completeOrder(orderId) {
  const order = orderQueue.find(orderObj => orderObj.id === orderId)

  order.status = 'completed'

  console.log(order)
  return order
}

addNewPizza('BBQ', 10)

placeOrder('BBQ')
placeOrder('Margherita')
console.log(orderQueue)

completeOrder(1)
