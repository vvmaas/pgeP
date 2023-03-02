import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Cursos from './pages/App/Cursos';
import Alunos from './pages/App/Alunos';
import AppPage from './pages/App';

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route index path="*" element={<Navigate to="/app/cursos" />} />
          <Route
            path="/app"
            element={
                <AppPage/>
             }
            >
            <Route path="cursos" element={<Cursos/>} />
            <Route path="alunos" element={<Alunos/>} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
