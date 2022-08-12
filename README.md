# Projeto App de Receitas

## Foram desenvolvidas as habilidades de:

- Utilizar _Redux_ para gerenciar estado;
- Utilizar a biblioteca _React-Redux_;
- Utilizar a Context API do _React_ para gerenciar estado;
- Utilizar o _React Hook useState_;
- Utilizar o _React Hook useContext_;
- Utilizar o _React Hook useEffect_;
- Criar Hooks customizados;

## O que foi desenvolvido:

Um app de receitas, utilizando o que há de mais moderno dentro do ecossistema React: Hooks e Context API!

Nele é possível ver, buscar, filtrar, favoritar e acompanhar o progresso de preparação de receitas e drinks!

A base de dados são 2 APIs distintas, uma para comidas e outra para bebidas.

O layout tem como foco dispositivos móveis, então o protótipo está desenvolvido em telas menores.


## APIs utilizadas:

### TheMealDB API

O [TheMealDB](https://www.themealdb.com/) é um banco de dados aberto, mantido pela comunidade, com receitas e ingredientes de todo o mundo.

Os end-points são bastante ricos, você pode [vê-los aqui](https://www.themealdb.com/api.php)

É possível listar todas as `categorias`, `nacionalidades` (vindas da API como "areas") e `ingredientes`:

```
categorias: https://www.themealdb.com/api/json/v1/1/list.php?c=list
nacionalidades: https://www.themealdb.com/api/json/v1/1/list.php?a=list
ingredientes: https://www.themealdb.com/api/json/v1/1/list.php?i=list
```

As fotos dos ingredientes vêm de um end-point padronizado com a seguinte lógica:

```
https://www.themealdb.com/images/ingredients/{nome-do-ingrediente}-Small.png
// exemplo com "Lime"
https://www.themealdb.com/images/ingredients/Lime-Small.png
```

### The CockTailDB API

Bem similar (inclusive mantida pela mesma entidade) a TheMealDB API, só que focado em bebidas.

Os end-points também são bastante ricos, você pode [vê-los aqui](https://www.thecocktaildb.com/api.php)



## Como visualizar:

* Utiliza-se a resolução de tela de `360 x 640` (360 pixels de largura por 640 pixels de altura).


## Como rodar a aplicação:

1. Clone o repositório
```
git clone git@github.com:gab0403/app-de-receitas.git
```

2. Instale as dependências
```
npm install
```

3. Inicialize o projeto
```
npm start
```

## Tecnologias utilizadas:
![REACT](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)