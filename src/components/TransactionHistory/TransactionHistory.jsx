import PropTypes from 'prop-types';
import './TransactionHistory.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className="transactionHistory">
      <thead>
        <tr>
          <th className="th">Type</th>
          <th className="th">Amount</th>
          <th className="th">Currency</th>
        </tr>
      </thead>

      <tbody>
       {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className="td">{type}</td>
            <td className="td">{amount}</td>
            <td className="td">{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};