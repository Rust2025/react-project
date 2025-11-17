import { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import './App.css';

function App() {
  // Состояние для счетчика
  const [count, setCount] = useState(0);
  // Состояние для текстового поля
  const [name, setName] = useState('');

  // Заголовок для карточки
  const cardTitle = (
    <h1 style={{ margin: 0 }}>Vite + React + PrimeReact</h1>
  );

  return (
    // 'App' - это наш главный контейнер, мы его отцентрируем в App.css
    <div className="App">
      
      <Card title={cardTitle} subTitle="Пример использования компонентов" style={{ width: '450px' }}>
        
        <div className="p-fluid"> {/* 'p-fluid' растягивает инпуты на всю ширину */}
          <div className="p-field" style={{ marginBottom: '1rem' }}>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem' }}>Введите ваше имя:</label>
            {/* Это компонент InputText из PrimeReact */}
            <InputText 
              id="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="Например, Иван"
            />
          </div>
        </div>

        {/* Показываем приветствие, если что-то введено */}
        {name && (
          <p>Привет, <strong>{name}</strong>!</p>
        )}

        <hr style={{ margin: '1.5rem 0' }} />

        <p>А вот и счетчик из шаблона, но на компоненте Button:</p>
        
        {/* Это компонент Button из PrimeReact */}
        <Button 
          label={`На меня нажали ${count} раз`}
          icon="pi pi-plus" // Иконка из 'primeicons'
          className="p-button-rounded p-button-success" // Вспомогательные классы
          onClick={() => setCount((count) => count + 1)} 
        />
        
      </Card>

    </div>
  );
}

export default App;