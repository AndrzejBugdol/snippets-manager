import { AppContainer } from './components/AppContainer';
import { Header } from './components/Header';
import { SnippetsSection } from './components/Sections/SnippetsSection';

const App = () => {
  return (
    <AppContainer>
      <Header />
      <SnippetsSection />
    </AppContainer>
  );
};

export default App;
