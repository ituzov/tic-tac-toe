import React from 'react';
import ReactDOM from 'react-dom/client';
import Board from './components/Board/Board.jsx';
import './App.module.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Board />
	</React.StrictMode>,
);
