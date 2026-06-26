import React from 'react';
import SignInForm from './SignInForm';

export const metadata = {
  title: "Sign In | TicketBari",
  description: "Sign in to your TicketBari account to book and manage your tickets.",
};

const SignInPage = () => {
  return (
    <div>
      <SignInForm />
    </div>
  );
};

export default SignInPage;