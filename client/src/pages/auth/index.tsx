import {
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
  SignedIn,
  SignOutButton
} from "@clerk/clerk-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Auth.css"; // Custom CSS for additional styling similar to Hero.css

export const Auth = () => {
  return (
    <div className="hero">
      <div className="hero-content container text-center">
        <h1 className="hero-title">Welcome to your Finance Tracker</h1>
        <p className="hero-description">Manage your financial records easily and efficiently.</p>
        <SignedOut>
          <div className="d-flex justify-content-center mb-4">
            <div className="mx-2 auth-button">
              <SignUpButton mode="modal">
                <button className="btn btn-primary">Sign Up</button>
              </SignUpButton>
            </div>
            <div className="mx-2 auth-button">
              <SignInButton mode="modal">
                <button className="btn btn-secondary">Sign In</button>
              </SignInButton>
            </div>
          </div>
        </SignedOut>
        <SignedIn>
          <h1 className="hero-tagline">Signed In</h1>
          <UserButton />
          <div className="mt-3">
            <SignOutButton>
              <button className="btn btn-danger">Sign Out</button>
            </SignOutButton>
          </div>
        </SignedIn>
      </div>
    </div>
  );
};
