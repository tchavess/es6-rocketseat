//Desafio async/await

//A
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

async function umPorSegundo(){
    await delay();
    console.log('1s');

    await delay();
    console.log('2s');

    await delay();
    console.log('3s');
}

umPorSegundo();

//B

import axios from 'axios';

async function getuserFromGithub(user){
 try{
    const response = await axios.get(`https://api.github.com/users/${user}`);
    console.log(response.data);
 }catch(err){
     console.log('Erro na API')
 }
}

getuserFromGithub('tchavess');

//C

class Github{
    static async getRepositories(repo){
        try{
            const response = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(response.data);
        }catch(erro){
            console.log('Repositório não existe');
        }
    }
}

Github.getRepositories("rocketseat/rocketseat.com.br");
Github.getRepositories("tchavess");

//C

const buscaUsuario = async usuario => {

    try{
        const response = await axios.get(`https://api.github.com/users/${usuario}`);
        console.log(response.data);
    }catch(err){
        console.log('Usuario nao ecciste');
    }
}

buscaUsuario('tchavess');
