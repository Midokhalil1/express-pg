import express from "express";

import {
  getAllCustomers,
  getCustomerById,
  addNewCustomer,
} from "./src/customers.js";

const app = express();
app.use(express.json());

app.get("/customers", getAllCustomers);
app.get("/customers/:customersId", getCustomerById);
app.post("/customers/new", addNewCustomer);

app.listen(3030, () => console.log("Listening on http://localhost:3030...."));
