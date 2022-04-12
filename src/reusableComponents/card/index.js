import './card.css';
import user from '../../assets/user.png';
import group from '../../assets/group.png';

function Card(props) {
  const { heading, content, type, setUserType, userType, setError } = props;

  function handleCardClick () {
    setUserType(type);
    setError(false);
  }
  return(
    <div onClick={handleCardClick} className={`card ${userType === type ? 'active' : ''}`}>
      <img src={type === 'user' ? user : group} alt='user'/>
      <h5>{heading}</h5>
      <span>{content}</span>
    </div>
  )
}

export default Card