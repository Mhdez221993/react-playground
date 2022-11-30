import { ChannelContext, UserContext } from '../App';

import React from 'react';

const ContexComponentF = () => {
  return (
    <div>
      <UserContext.Consumer>
        {
          user => {
            return (
              <ChannelContext.Consumer>
                {
                  channel => <h1>ContexComponentF user {user}, channel {channel}</h1>
                }
              </ChannelContext.Consumer>
            )
          }
        }
      </UserContext.Consumer>
    </div>
  );
};

export default ContexComponentF;