//MODULO 1 ES6

//EXERCICIO 1

class Usuario {
    constructor(email, senha) {
      this.email = email;
      this.senha = senha;
    }
  
    isAdmin() {
      return this.admin === true;
    }
}
  
  class Admin extends Usuario {
        constructor(email, senha) {
        super(email, senha);
    
        this.admin = true;
        }
  }
  
  const User1 = new Usuario("email@teste.com", "senha123");
  const Adm1 = new Admin("email@teste.com", "senha123");
  
  console.log(User1.isAdmin()); // false
  console.log(Adm1.isAdmin()); // true

  //FIM EXERCICIO 1

  //EXERCICIO 2

  const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

   //2.1 
   const idades = usuarios.map(usuario => usuario.idade);
    console.log(idades);

    //2.2
    const rocketseat18 = usuarios.filter(usuario => usuario.idade > 18 && usuario.empresa === 'Rocketseat');
    console.log(rocketseat18);

    //2.3
    const google = usuarios.find(usuario => usuario.empresa === 'google' || usuario.empresa === 'Google');
    console.log(google);

    //2.4
    const calculo = usuarios.map(usuario => ({...usuario, idade: usuario.idade * 2 }))
                    .filter(usuario => usuario.idade <= 50);
                    console.log(calculo);
    //FIM EXERCICIO 2

    //EXERCICIO 3
    //3.1
    const arr = [1, 2, 3, 4, 5];
    arr.map(item => item + 10);
   

    //3.2
    //Dica: Utilize uma constante para function

    const usuario = {nome: 'Diego', idade: 23};

    const mostraIdade = (usuario) => usuario.idade;

    console.log(mostraIdade(usuario));

    //3.3 
    //const nome = 'Diego';
    const idade = 23;

    const mostraUsuario = (nome = 'Diego', idade = 18) => ({nome,idade});

    //console.log(mostraUsuario(nome,idade));
    //console.log(mostraUsuario(nome));

    //3.4
    const promise = () => new Promise((resolve, reject) => resolve());

    //4.1 Desestruturação Simples
    const empresa5 = {
        nome5: "Rocketseat",
        endereco5: {
        cidade5: "Rio do Sul",
        estado5: "SC",
        }
    };

    const{
        nome5,
        endereco5:{cidade5,estado5}
    } = empresa5;

    console.log(nome5);
    console.log(cidade5);
    console.log(estado5);

    //4.2 Desestruturação de parametros

    function mostraInfo({ nome, idade }) {
        return `${nome} tem ${idade} anos.`;
    }
      
    mostraInfo({ nome: "Diego", idade: 23 });

    console.log(mostraInfo({ nome: "Diego", idade: 23 }));

    // 5.1 A 'REST'

    const arr3 = [1, 2, 3, 4, 5, 6];

    const [x, ...y] = arr3;

    console.log(x); // 1
    console.log(y); // [2, 3, 4, 5, 6]

    // 5.1 B

    function soma(...nums) {
    return nums.reduce((a, b) => a + b);
    }

    console.log(soma(1, 2, 3, 4, 5, 6)); // 21
    console.log(soma(1, 2)); // 3

    // 5.2 SPREAD

    const usuario6 = {
    nome6: "Diego",
    idade6: 23,
    endereco6: {
        cidade6: "Rio do Sul",
        uf6: "SC",
        pais6: "Brasil"
    }
    };

    const usuario6 = { ...usuario6, nome6: "Gabriel" };
    const usuario6 = {
    ...usuario6,
    endereco6: { ...usuario6.endereco6, cidade6: "Lontras" }
    };

    //6.1  console.log('O usuário ' + usuario + ' possui ' + idade + ' anos');  Template Literals  

    const usuario3 = "Diego";
    const idade3 = 23;

    console.log(`O usuário ${usuario3} possui ${idade3} anos`);

    //7   (Object Short Syntax)

    const nome4 = 'Diego';
    const idade4 = 23;
    const usuario4 = {
        nome4,
        idade4,
        cidade4: 'Rio do Sul',
    };

    console.log(usuario4);