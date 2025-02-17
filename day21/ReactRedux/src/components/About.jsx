import ThemeToggle from "../ThemeToggle";
import { useSelector } from 'react-redux';

const About = () => {
  const theme = useSelector(state => state.theme.mode);
  return (
    <div style={{
      backgroundColor: theme === 'light' ? 'white' : 'black',
      color: theme === 'light' ? 'black' : 'white',
      height: '88vh',
      textAlign: 'center',
    }}>
      <h1>About page</h1>
      <ThemeToggle />
    </div>
  );
};

export default About;
