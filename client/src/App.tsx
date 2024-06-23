import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Dashboard } from "./pages/dashboard";
import { Auth } from "./pages/auth";
import { FinancialRecordsProvider } from "./contexts/financial-record-context";
import { SignedIn, UserButton, useUser } from "@clerk/clerk-react";
import financeIcon from "./assets/finance.svg"; // Import the finance.svg image

function App() {
  const navigate = useNavigate();
  const { isSignedIn } = useUser();

  useEffect(() => {
    if (isSignedIn) {
      navigate("/dashboard");
    } else {
      navigate("/auth");
    }
  }, [isSignedIn, navigate]);

  return (
    <div className="app-container">
      <div className="navbar">
        <div className="nav-elements">
          <Link to="/dashboard">
            <img src={financeIcon} alt="Finance Icon" className="finance-icon" /> {/* Add the image here */}
            Finance Tracker
          </Link>
          <SignedIn>
            <UserButton showName/>
          </SignedIn>
        </div>
      </div>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <FinancialRecordsProvider>
              <Dashboard />
            </FinancialRecordsProvider>
          }
        />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
}

function Root() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default Root;
