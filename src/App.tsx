import { AppContainer } from './components/AppContainer';
import { Header } from './components/Header';
import { ROUTES } from './context/ROUTES';
import { useRouterContext } from './context/UseRouterContext';

const App = () => {
  const { selectedTab } = useRouterContext();

  const Section = ROUTES[selectedTab];
  return (
    <AppContainer>
      <Header />
      <Section />
    </AppContainer>
  );
};

export default App;
