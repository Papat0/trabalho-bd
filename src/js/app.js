/* eslint-disable */
(function (window, document) {
  const url = `http://localhost:3000/api/v1/find-all-agency`;
  console.log('aqui')
  const postsContainer = document.querySelector('#post-container');
  async function getAllPosts() {
    const allAgency = [];
    const response = await fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        allAgency.push(...data.payload);
      });

    const jsonData = allAgency;

    console.log(jsonData);

    jsonData.map((agency) => {
      const div = document.createElement('div');

      const agencia = document.createElement('agn');
      const endereço = document.createElement('ende');
      const link = document.createElement('a');

      agencia.innerText = 'Agencia: ' + agency.agencia + ', ';
      endereço.innerText = 'Endereço: ' + agency.endereço + '.';



      div.appendChild(agencia);
      div.appendChild(endereço);
      div.appendChild(link);

      postsContainer.appendChild(div);
    });
  }
  getAllPosts();
})(window, document);

(function (window, document) {
  const url = `http://localhost:3000/api/v1/find-all-account`;

  const postContainer = document.querySelector('#posts-container');
  async function getAllCounts() {
    const allAgency = [];
    const response = await fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        allAgency.push(...data.payload);
      });

    const jsonData = allAgency;

    console.log(jsonData);

    jsonData.map((account) => {

      const div = document.createElement('div');
      const Agencia_agencia = document.createElement('ag');
      const saldo = document.createElement('saldo');
      const num_conta = document.createElement('nconta');

      Agencia_agencia.innerText = 'Agencia: ' + account.Agencia_agencia + ', ';
      saldo.innerText = 'Saldo: R$ ' + account.saldo + ', ';
      num_conta.innerText = 'Conta: ' + account.num_conta + '.';




      div.appendChild(Agencia_agencia);
      div.appendChild(saldo);
      div.appendChild(num_conta);

      postContainer.appendChild(div);
    });
  }
  getAllCounts();
})(window, document);


const postPage = document.querySelector('#agency')
const saqueContain = document.querySelector('#saque-contain')
const depositContain = document.querySelector('#deposit-contain')

const inputFinal = document.querySelector('#final-input')
const conta = document.querySelector('#num-conta')
const val = document.querySelector('#value')

// Load post
const urlSearchParams = new URLSearchParams(window.location.search);
const postId = urlSearchParams.get("id");
//post Saque
