import { RepositoryItem } from './RepositoryItem';

const repositoryName = 'unform';

const repository = {
  name: 'unform',
  description: 'Forms in react',
  link: 'http://github.com/unform/unform',
};

export function ReposityList() {
  return (
    <section className="repository-list">
      <h1>Lista de Reposistórios</h1>
      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}
