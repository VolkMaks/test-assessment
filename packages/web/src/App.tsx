import '@fontsource/outfit/300.css';
import '@fontsource/outfit/400.css';
import '@fontsource/outfit/500.css';
import '@fontsource/outfit/600.css';
import '@fontsource/outfit/700.css';
import { Providers } from './components/Providers';
import { Summary } from './components/Summary';

function App() {
  return (
    <Providers>
      <Summary />
    </Providers>
  );
}

export default App;
