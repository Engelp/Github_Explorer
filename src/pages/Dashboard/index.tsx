import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './syles';

const Dasboard: React.FC = () => {
  return (
    <>
      <img src={logImg} alt="Github Explorer" />
      <Title> Explore repositório no Github </Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/16818032?s=460&v=4"
            alt="Elson Pinheiro"
          />
          <div>
            <strong>RocketSeat/urnform</strong>
            <p>TEstTEstTEstTEstTEstTEstTEstTEst</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dasboard;
