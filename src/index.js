import app from "./app.js";
import 'dotenv/config';
import sequelize from "./config/database.js";

const PORT = process.env.PORT || 3000;

//DATABASE
try {
    await sequelize.authenticate();
    console.log('conectado a la base de datos')
} catch (err) {
    console.error(`error en db ${err}`)
}

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});