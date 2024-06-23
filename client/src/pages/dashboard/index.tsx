import { useUser } from "@clerk/clerk-react";
import { FinancialRecordForm } from "./financial-record-form";
import { FinancialRecordList } from "./financial-record-list";
import "./financial-record.css";
import { useFinancialRecords } from "../../contexts/financial-record-context";
import { useMemo } from "react";

export const Dashboard = () => {
  const { user } = useUser();
  const { records } = useFinancialRecords();

  const totalMonthly = useMemo(() => {
    let totalAmount = 0;
    records.forEach((record) => {
      totalAmount += record.amount;
    });

    return totalAmount;
  }, [records]);

  return (
    <div className="dashboard-container">
      <h1>Welcome, <strong>{user?.firstName}</strong>!</h1>
      <h1>Here Are Your Finances:</h1>
      <div className="financial-box">
        <FinancialRecordList />
        <div className="total-monthly">Total Monthly Expense: Rs.{totalMonthly}</div>
        <h4>Add New Transactions-</h4>
        
        <FinancialRecordForm />
      </div>
    </div>
  );
};
