'use client';

import React, { useState } from 'react';
import Signup from './Signup';
import Api from './Api';

const Page = () => {
  const [showApi, setShowApi] = useState(false);

  const handleSignupSuccess = () => {
    setShowApi(true);
  };

  return (
    <>
      {!showApi && <Signup onSuccess={handleSignupSuccess} />}
      {showApi && <Api />}
    </>
  );
};

export default Page;
