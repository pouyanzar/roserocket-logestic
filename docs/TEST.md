### Test Cases

#### 1. Retrieve drivers

- connect to server
- "/drivers" should return an array of drivers

#### 2. Retrieve orders

- connect to server
- "/orders" should return an array of orders

#### 3. Assign an order to a driver

- driver id = 1
- order id = 1
- orders.find(order id) 
- update driver_id = 1 for the order 
- orders.find(order id)
- should return the order with driver_id = 1

#### 3.1 Assign an order not to more than one driver

- driver id1 = 1
- driver id2 = 2
- order id = 1
- find the order inside orders table(array)
- update driver_id = 1 for the order
- orders.find(order id)
- should return the order with driver_id = 1
- update driver_id = 2 for the order
- should returns an error


#### 3.2 Unassign an order

- order id = 1
- find the order inside orders table(array)
- Update order.driver_id = NULL
- orders.find(order id = 1)
- should return order id = 1 with dirver_id = NULL

#### 4 Edit cost value

- order id = 1
- orders.find(order id)
- edit(cost to 2000)
- orders.find(order id)
- should return order id with cost = 2000

#### 5 Edit revenue value

- order id = 1
- orders.find(order id)
- edit(revenue to 1000)
- orders.find(order id)
- should return order id with revenue = 1000

