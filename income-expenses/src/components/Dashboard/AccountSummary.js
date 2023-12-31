import React from "react";

const AccountSummary = ({ profile: { accounts } }) => {
  console.log("accont Number", accounts?.length);
  const transactions = accounts?.map((account) => account.transactions);

  const TotalIncome = transactions?.reduce((acc, transaction) => {
    return (
      acc +
      transaction
        ?.filter((transaction) => transaction.transactionType === "Income")
        ?.reduce((acc, transaction) => {
          return acc + transaction.amount;
        }, 0)
    );
  }, 0);
  const TotalExpenses = transactions?.reduce((acc, transaction) => {
    return (
      acc +
      transaction
        ?.filter((transaction) => transaction.transactionType === "Expenses")
        ?.reduce((acc, transaction) => {
          return acc + transaction.amount;
        }, 0)
    );
  }, 0);

  return (
    <>
      {accounts?.length <= 0 ? (
        <h2 className="text-center text-lg mt-5">No Account Summary Found</h2>
      ) : (
        <section className="py-20">
          <h1 className="text-center text-3xl mb-5 text-indigo-500">
            Account Summary-for {accounts?.length} Accounts
          </h1>
          <div className="container mx-auto px-4">
            <div className="py-4 flex flex-wrap items-center text-center rounded-lg border">
              <div className="py-4 w-full md:w-1/2 lg:w-1/4 border-b md:border-b-0 lg:border-r">
                <h4 className="mb-2 text-gray-500">Total Income</h4>
                <span className="text-3xl lg:text-4xl font-bold text-green-600">
                  ${TotalIncome}
                </span>
              </div>
              <div className="py-4 w-full md:w-1/2 lg:w-1/4 border-b md:border-b-0 lg:border-r">
                <h4 className="mb-2 text-gray-500">Total Expenses</h4>
                <span className="text-3xl lg:text-4xl text-red-500 font-bold">
                  ${TotalExpenses}
                </span>
              </div>
              <div className="py-4 w-full md:w-1/2 lg:w-1/4 border-b md:border-b-0 lg:border-r">
                <h4 className="mb-2 text-gray-500">Total Balance</h4>
                <span className="text-3xl lg:text-4xl font-bold text-indigo-600">
                  643,533
                </span>
              </div>
              <div className="py-4 w-full md:w-1/2 lg:w-1/4">
                <h4 className="mb-2 text-gray-500">Total Transactions</h4>
                <span className="text-3xl lg:text-4xl font-bold">25%</span>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default AccountSummary;
