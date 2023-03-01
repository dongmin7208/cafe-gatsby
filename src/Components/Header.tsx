import { Link, useHistory } from 'react-router-dom';
function Header() {
  const history = useHistory();
  const onAboutClick = () => {
    history.push('/about');
  };
  return (
    <header>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <button onClick={onAboutClick}>About</button>
        </li>
      </ul>
    </header>
  );
}
export default Header;
