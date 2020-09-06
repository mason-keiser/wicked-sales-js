# wicked-sales-js
A full stack Node.js and React shopping cart app.

* Link: https://wicked-sales.masonkeiser.com/
# Technologies Used
* React.js
* Node.js
* Express
* PostgreSQL
* Webpack 4
* HTML 5
* CSS 3
* Bootstrap 4
* AWS EC2
# Features
* User can view a catalog of products
* User can view the details of an individual product
* User can add a product to their cart
* User can view a synopsis of their cart
* User can place an order to the database
* User can clear all items out of their cart
# Development
## System Requirements
* Node.js 10 or higher
* NPM 6 or higher
* PostgreSQL 10 or higher
# Getting Started
1. Clone this repository:
```
git clone https://github.com/mason-keiser/wicked-sales-js.git
```
2. Locate cloned repository: 
```
cd wicked-sales-js
```
3. Install all dependencies with NPM:
```
npm install
```
4. Start postgreSQL server in terminal:
```
sudo service posgresql start
``` 
5. Create database that you will be using for the site:
```
createdb wickedSales
```
6. Import database to PostgreSQL:
```
npm run db:import
```
7. Open a second terminal; navigate to project directory, start pgweb:
```
pgweb --db=wickedSales
```
8. Start the project (in another terminal). You can view the application by opening http://localhost:3000 in your browser:
```
npm run dev
```
# Preview
![](server/public/images/ws.png)
