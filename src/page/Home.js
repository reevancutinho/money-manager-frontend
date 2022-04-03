import React from 'react';

import { Header } from '../components/Header';
import { Balance } from '../components/Balance';
import { IncomeExpenses } from '../components/IncomeExpenses';
import { TransactionList } from '../components/TransactionList';
import { AddTransaction } from '../components/AddTransaction';

import { GlobalProvider } from '../context/GlobalState';

import "./home.css";

const Home = () => {
    return (
        // <div className='home'>
        //     <h2>Expense Tracker</h2>
        // </div>
        <GlobalProvider>
            <div class="header"><Header /></div>
        <div className="container">
            <div class="left">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          </div>
          <div class="right">
          <AddTransaction />
          </div>
        </div>
      </GlobalProvider>
    )
}

export default Home