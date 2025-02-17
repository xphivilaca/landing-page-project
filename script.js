// script.js
const root = document.getElementById('root');

// Componente simples para testar
const App = () => {
  return (
    <div>
      <h1>Olá, mundo!</h1>
      <p>Esta é uma landing page com React.</p>
    </div>
  );
};

// Renderizar o App
ReactDOM.render(<App />, root);
