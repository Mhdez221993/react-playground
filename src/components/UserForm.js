import React from 'react';
import useInput from '../hooks/useInput';

const UserForm = () => {
  const [firstName, resetFirstName, bindFirstName] = useInput('')
  const [lastName, resetLastName, bindLastName] = useInput('')

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`)
    resetFirstName()
    resetLastName()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">User Name
          <input type="text" {...bindFirstName} />
        </label>
      </div>

      <div>
        <label htmlFor="">Last Name
          <input type="text" {...bindLastName} />
        </label>
      </div>

      <div>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default UserForm