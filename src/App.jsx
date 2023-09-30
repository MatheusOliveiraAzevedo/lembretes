import { LembretesProvider } from './common/context/lembretes'
import AdicionarLembrete from './componentes/AdicionarLembrete'
import EstilosGlobais from './componentes/EstilosGlobais'
import Cabecalho from './componentes/Cabecalho'
import Lembretes from './componentes/Lembretes'

function App() {

  return (
    <LembretesProvider>
      <EstilosGlobais/>
      <Cabecalho/>
      <AdicionarLembrete/>
      <Lembretes/>
    </LembretesProvider>
  )
}

export default App
