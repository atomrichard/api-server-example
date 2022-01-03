const mongoose = require('mongoose');

module.exports = async () => {
    try {
        await mongoose.connect(process.env.DB_URL || "mongodb://localhost/api-database", {useNewUrlParser: true})
        console.log("DB Connected");
    } catch (error) {
        console.log("DB Connect error", error)
        throw new Error(error);
    }

}