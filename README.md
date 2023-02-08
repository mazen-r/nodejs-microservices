# NodeJS Microservices

### Stack: NodeJS, Express, Docker, RabbitMQ, MongoDB.  

----------------------  

Online shop app that's divided into 3 microservices:  

- Customer Service  
Contains logic of the customer service for user:  
  - Authentication: POST `/signup` `/signin` 
  - Wishlist: POST GET DEL `/wishlist/id`
  - Address: POST PUT DELETE `/address/id`
  
- Product service  
 Contais logic of the product:  
  - Listing products: GET `/category`
  - Find product: GET `/id`
  - Add product: POST GET DEL `/id`
 
- Shopping service
Contains logic of shopping:
  - Cart: POST GET PUT DEL `/id`
  - Order: POST GET `/id`
  - Payment: POST GET `/id`
   
  
----------------------

### Communication between microservies
- Nginx is used as a reverse proxy to send requests to each microservice.
- Each microservice is deployed into a docker container.
- Microservices commuincates with each other using RabbitMQ via publisher and subscriber.

![microservices acrchitucre](https://user-images.githubusercontent.com/73492002/212571055-7e86de58-41ad-4caf-bc5b-e49569228820.png)

