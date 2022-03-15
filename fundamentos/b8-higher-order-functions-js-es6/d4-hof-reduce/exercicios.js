//1 Dada uma matriz, transforme em um array.
const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  const flatten = (array) => arrays.reduce((acc, curr) => acc.concat(curr),[])


  //Para os exercícios 2, 3 e 4 considere o seguinte template:
  const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
// 2 - Crie uma string com os nomes de todas as pessoas autoras.
// o que eu fiz:
  const authors = () => books.reduce((acc, curr) => acc.concat(`${curr.author.name}, `), '');
//   console.log(authors(books))

// gabarito:
// a diferença do gabarito é que foi possível adicionar a formatação correta da msg, adicionando
// "," enquanto ainda existem nomes a serem adicionados e ao chegar ao último nome encerrar com "."
  const authors2 = () => {
      const authors = books.reduce ((acc, book, index, array) =>  {
      if (index === array.length - 1) return `${acc} ${book.author.name}.`;
      return `${acc} ${book.author.name},`;
  },'');
  return authors;
  }
//   console.log(authors2())
  

//3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
// meu desenvolvimento:
const avarageAge = () => books.reduce((acc,curr) => acc + Math.round((curr.releaseYear - curr.author.birthYear) / books.length),0);
console.log(avarageAge())


// gabarito
const expectedResult = 43;

function averageAge2() {
  const numberOfBooks = books.length;
  const sumOfAges = books.reduce((sum, book) => (
    sum + (book.releaseYear - book.author.birthYear)
  ), 0);
  return sumOfAges / numberOfBooks;
}
console.log(averageAge2())

