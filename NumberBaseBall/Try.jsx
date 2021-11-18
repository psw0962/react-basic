import React from 'react';

const Try = ({ tryInfo }) => {
  return (
    <li>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.value}</div>
    </li>
  );
};

export default Try;
