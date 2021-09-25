import { RepositoryItem } from './RepositoryItem';
import '../styles/repository.scss';
import { useEffect, useState } from 'react';

const repositoryName = 'unform';

export function ReposityList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/Rocketseat/repos').then((response) =>
      response.json().then((data) => setRepositories(data))
    );
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de Reposistórios</h1>
      <ul>
        {repositories.map((repository) => {
          return (
            <RepositoryItem repository={repository} key={repository.name} />
          );
        })}
      </ul>
    </section>
  );
}
