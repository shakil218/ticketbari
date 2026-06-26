import React from 'react';
import SignUpForm from './SignUpForm';

export const metadata = {
  title: "Sign Up | TicketBari",
  description: "Create a TicketBari account to book bus, train, and launch tickets online.",
};

const SignUpPage = () => {
  return (
    <div>
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;