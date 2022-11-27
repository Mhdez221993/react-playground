import { ChannelContext, UserContext } from '../App';
import React, { useContext } from 'react';

import ContexComponentF from './ContexComponentF';

const ContexComponentE = () => {
  const user = useContext(UserContext)
  const channel = useContext(ChannelContext)

  return (
    <div>
      <h1>ContexComponentE {user} - {channel}</h1>
      <ContexComponentF />
    </div>
  );
};

export default ContexComponentE;