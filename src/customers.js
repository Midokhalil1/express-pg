import pg from "pg";
import creds from "../creds.js";
const { Pool } = pg;

export async function getAllCustomers(req, res) {
  const pool = new Pool(creds);
  const customers = await pool
    .query("SELECT * FROM customers")
    .catch((err) => res.status(500).send(err));
  res.send(customers.rows);
  pool.end();
}

export async function getCustomerById(req, res) {
  const { customersId } = req.params;
  const pool = new Pool(creds);
  const customers = await pool
    .query(`SELECT * FROM customers WHERE customer_id= ${customersId}`)

    .catch((err) => res.status(500).send(err));
  res.send(customers.rows);
  pool.end();
}

export async function addNewCustomer(req, res) {
  const { first_name, last_name, email, phone } = req.body;
  // const { customersId } = req.params;

  const pool = new Pool(creds);
  const query = `INSERT INTO customers (first_name, last_name, phone,email)
    VALUES ('${first_name}', '${last_name}', '${phone}','${email}')`;
  //   console.log(query);
  const customers = await pool
    .query(query)
    .catch((err) => res.status(500).send(err));
  res.send({ message: "Customer successfly created" });

  // .catch((err) => res.status(500).send(err));

  pool.end();
}
