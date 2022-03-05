// 1 - Crie um erro personalizado que será chamado se a pessoa usuária digitar apenas um número.
// Tente executar a aplicação com um dos valores em branco. Notou que o retorno não é muito descritivo?
// Utilize o throw new Error e o bloco try/catch .
// Imprima o erro no parágrafo com id result , para que a pessoa usuária saiba o que aconteceu. Lembre-se de usar erros descritivos!
// Evite funções que tenham muitas responsabilidades distintas.

// 2 - Agora adicione uma outra exceção, caso a pessoa usuária digite um valor que não seja numérico.
// Você pode fazer essa verificação utilizando a função isNan() .

// 3 - Você se lembrou de limpar os inputs após o clique do botão? Teve que repetir código para isso? Que tal refatorar sua função utilizando o finally ?

const checkError = (value1, value2) => {
    if (value1 == '' || value2 == '' || isNaN(value1) || isNaN(value2)) {
        throw new Error('Insira um valor válido no "valor 1" e no "valor 2" (apenas números) ')
    }
  }
  function sum() {
      try{
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    checkError(value1, value2)
    const result = parseInt(value1) + parseInt(value2);
    document.getElementById('result').innerHTML = `Resultado: ${result}`;
  } catch (error) {
    document.getElementById('result').innerHTML = `${error}`;
  }
    finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
    }
  }
  window.onload = () => {
    const button = document.getElementById('button');
    button.addEventListener('click', sum);
  }