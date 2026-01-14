import '@fontsource/outfit/300.css';
import '@fontsource/outfit/400.css';
import '@fontsource/outfit/500.css';
import '@fontsource/outfit/600.css';
import '@fontsource/outfit/700.css';
import { Providers } from './components/shared/Providers';
import { Summary } from './features/candidate/components/Summary';

function App() {
  return (
    <Providers>
      <Summary />
    </Providers>
  );
}

export default App;
