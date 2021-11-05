import React, { useEffect, useState }  from 'react';
import Notes from './Components/Notes';
import api from './services/api';
import './CSS/App.css'
import './CSS/global.css';
import './CSS/sidebar.css';
import './CSS/main.css';



function App() {
  const [ title, setTitle ] = useState('');
  const [ notes, setNotes ] = useState('');
  const [ allNotes, setAllNotes ] = useState([]);
  
  useEffect(() => {
    async function getAllNotes() {
      const response = await api.get('/annotations');

      setAllNotes(response.data)
    }

    getAllNotes();
  }, [])

  async function handleSubmit(e) {
    e.preventDefault();


    const response =  await api.post('/annotations', {
      title,
      notes
    });

    setTitle('');
    setNotes('');
    setAllNotes([...allNotes, response.data]);

    console.log('aqui', response)

  };
  
  return (
    <div id="app">
      <aside>
        <strong>Caderno de Tarefas</strong>
        <form onSubmit={ handleSubmit }>
          <div className="input-block">
            <label htmlFor="title">Título da anotação</label>
            <input
              required
              value={title}
              onChange={ e => setTitle(e.target.value) }
            />
          </div>
          <div className="input-block">
            <label htmlFor="nota">Anotações</label>
            <textarea className="textareatest"
              required
              value={notes}
              onChange={ e => setNotes(e.target.value) }
            />
            <button type="submit" className="btn1">Salvar</button>
          </div>
        </form>
      </aside>
      <main>
        <ul>
          { allNotes.map(data => (
            <Notes data={ data } />
          )) }
        </ul>
      </main>
    </div>
  );
}

export default App;
