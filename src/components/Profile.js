import PropTypes from 'prop-types';

export default function Profile(props) {
  return (
  <div>
    <div>
      <img
        src={props.avatar}
        alt="Аватар пользователя"
      />
      <p>{props.name}</p>
      <p>@{props.tag}</p>
      <p>{props.location}</p>
    </div>

    <ul>
      <li>
        <span>Followers</span>
        <span>{props.stats.followers}</span>
      </li>
      <li>
        <span>Views</span>
        <span>{props.stats.views}</span>
      </li>
      <li>
        <span>Likes</span>
        <span>{props.stats.likes}</span>
      </li>
    </ul>
  </div >
  );
}

Profile.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
};