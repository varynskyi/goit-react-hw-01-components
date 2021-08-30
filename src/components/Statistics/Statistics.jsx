import PropTypes from 'prop-types';
import './Statistics.css';
import { Item, Label } from './Statistics-style';

export const Statistics = ({ title, stats }) => {
    return (
        <section className="statistics">
            <h2 className="title">{title}</h2>

            <ul className="stat-list">
                {stats.map(stat => (
                    <Item evtType={stat.percentage} key={stat.id}>
                        <Label>{stat.label}</Label>
                        <Label className="percentage">{stat.percentage}%</Label>
                    </Item>
                ))}
            </ul>
        </section>
    );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};