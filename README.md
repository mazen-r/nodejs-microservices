# NodeJS Microservices

## Tech
- NodeJS
- Express
- MongoDB/Mongoose
- Bcryptjs
- Winston
- RabbitMQ
- Nginx
- Docker 

## System Architecture  
![microservices acrchitucre](https://user-images.githubusercontent.com/73492002/212571055-7e86de58-41ad-4caf-bc5b-e49569228820.png)

## Overview
Online shop app that's divided into 3 microservices.  
### Authentication and Authorization
- Users are authenticated using JWTs, where a token is created when a customer logs-in with valid credentials. Passwords are also encrypted using Bcrypt.
- Authorization is managed using a middleware with the following role:
  - Logged-in customer:
    - This permission allows customer to interact with Product and Shopping services.  
### Customer Service
- This service responsible of the main customer operations.
  - Authentication
    - Customers can signup and login through this service.
  - Retrieve customer actions that's passed from other services.
    - Profile
    - Whishlist
    - Cart
    - Orders
### Product Service
- This service is responsible of the Product operations.
  - Create new products.
  - View products by category.
  - View products in details.
  - Customer realted operations.
    - Add/Remove products to whishlist.
    - Add/Remove products to cart.
    - Communicate with the customer service to update .whishlist and cart state.
>Currently, any logged-in customer can create products but additional permession should be added to authorize this endpoint.
### Shopping Service
- This service is responsible of the order operations.
  - Create order.
    - Communicate with the customer service to get the current cart.
    - Create order based on current cart data.
  - Communicate with the customer serviceto update the current order details.
### Reverse Proxy
- Nginx is used as a reverse proxy to send requests to each microservice. It routes incoming requests from `/servicename` the service's port `servicename:port`.
### Communication
- Microservices commuincates with each other using RabbitMQ via publisher and subscriber.
- Each microservice is deployed into a docker container.
### Docker
- Each service has a Docker image. All images are deployed into containers managed through the docker-compose file, which contains MongoDB and RabbitMQ.
## How to run the app
- Make sure to add a .env file to each serive folder, you can check the .env_template file for a reference.
- You can spin up all services used by running/building the docker-compose file:  
`docker-compose up --build`