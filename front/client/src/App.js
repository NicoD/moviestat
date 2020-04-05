import React from 'react';
import './App.css';
import FileUploadComponent from './components/FileUploadComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          File to upload
        </p>
        <FileUploadComponent />
      </header>
    </div>
  );
}

export default App;
