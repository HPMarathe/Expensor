import React from "react";
import TransactionForm from "../components/TransactionForm";
import TransactionsList from "../components/TransactionsList";
import Container from "@mui/material/Container";
import { useEffect, useState } from "react";

const Home = () => {
  const [transactions, setTransactions] = useState([]);
  const [editTransaction, setEditTransaction] = useState({});

  useEffect(() => {
    fetchTransactions();
  }, []);

  async function fetchTransactions() {
    const res = await fetch("http://localhost:4000/transaction");
    const { data } = await res.json();
    setTransactions(data);
  }

  return (
    <div>
      <Container>
        <TransactionForm
          fetchTransactions={fetchTransactions}
          editTransaction={editTransaction}
        />
        <TransactionsList
          transactions={transactions}
          fetchTransactions={fetchTransactions}
          setEditTransaction={setEditTransaction}
        />
      </Container>
    </div>
  );
};

export default Home;
