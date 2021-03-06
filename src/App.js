import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';

import Header from './components/Header';

function App() {
  const [projects, setProjects] = useState([]);

  // list all repositories from api
  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    })
  }, []);

  // add new repository to api
  async function handleAddProject() {
    const response = await api.post('projects', {
      "title": `Novo projeto ${Date.now()}`,
	    "owner": "Bruno" 
    });

    const project = response.data;

    setProjects([...projects, project]);
  }

  return(
    <>
      <Header title="Projects" />

      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </>
  );
}

export default App;
