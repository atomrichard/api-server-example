# Api Server Example (without Schema Validation)
with:
- Node.js and Express.js
- MongoDb and Mongoose.js
- Environment Variables

You can send api requests from Postman.

Installation:

`npm init`
then add these packages to `package.json`:
```json
  "dependencies": {
    "bcrypt": "^5.0.1",
    "cors": "^2.8.5",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^6.0.8"
  },
  "devDependencies": {
    "nodemon": "^2.0.13"
  }
```
then
`npm install`

also, it's recommended to update scripts part in the  `package.json`
```json
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
```

You can customise the Port number, the DB and the Secret Key with env variables.
.env file example:
```
PORT=3000
DB_URL="mongodb://localhost/api-database"
SECRET_KEY="api@123"
```