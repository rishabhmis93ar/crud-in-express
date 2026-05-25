import express from "express";
const app = express();
import ContactRoutes from "./routes/contacts.routes.js"
import { connectDB } from "./config/database.js";

// Database Connection
connectDB();

// Middleware
app.set('view engine', 'ejs'); 
app.use(express.urlencoded({extended:false})); // We can accept HTML form data at this page
app.use(express.static('public'));


// Routes
app.use(ContactRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})