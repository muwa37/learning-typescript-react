import React from 'react';
import Card, {CardVariant} from './components/Card';

const App = () => {
  return (
    <div className="App">
      <Card 
        variant={CardVariant.primary}
        width='250px'
        height='250px'
      >
        <button>
          btn
        </button>
      </Card>
    </div>
  );
}

export default App;
