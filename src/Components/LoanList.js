import React from 'react';
import Loan from './Loan';

const LoanList = props => {

  const results = props.data;
  let loans = results.map(loans =>
    <loan key={loans.id} />
  );

  return(
    <ul className="loans-list">
      {loan}
    </ul>
  );
}

export default loanList;
