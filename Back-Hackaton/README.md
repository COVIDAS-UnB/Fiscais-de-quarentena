# Adote um aluno (Back-End)

[Node.js](https://nodejs.org/en/) - **12.10.0**

[Npm](https://www.npmjs.com/) - **6.11.3**

[Docker](https://docs.docker.com/engine/release-notes/#version-1903) - **19.03.11**

## Sobre o projeto

- Plataforma colaborativa onde alunos podem ajudar outros alunos em situações
adversas como a pandemia de COVID. A ferramenta é embasada na
funcionalidade “adoção de alunos” que promove o compartilhamento de
materiais, mentorias, etc a fim de minimizar os problemas de acessibilidade à
recursos acadêmicos que a pandemia gera para a comunidade acadêmica.

## Instalação do Projeto

- Crie um `.env` com o seguinte corpo:
```
SECRET=mysecret
```
- Rode `make build`
- Rode `make db-migrate`
- Rode `make db-seeders`

## Como rodar o Projeto
- Rode `make run`
- Aplicação Back-End desenvolvida para ser a parte transacional do sistema Adote um Aluno.

## Instalação do Projeto

- Para instalar as dependências do projeto, execute o seguinte comando:

```
make build
```
## Como rodar o Projeto

### Em modo de desenvolvimento

- Para rodar o projeto neste modo, utilize o comando abaixo:

```
make run
```

## Schema Banco de Dados

- Schema do modelo relacional do Banco de dados implementado no sitema 
- [Link](https://app.diagrams.net/#G1Rmp54LHY3WK8k9ZLoN9lEBRxlkgY2BnK)

## Web scraping

- Scrap desenvolvido em Python para baixar materias da UnB a fim de popular o banco de dados.
- [Link](https://github.com/Yuri-Castro/scrap-materia-unb)

