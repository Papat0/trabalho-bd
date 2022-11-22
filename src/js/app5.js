/* eslint-disable */


async function criarAgencia() {

  const url = `http://localhost:3000/api/v1/create-agency`;
  const agencia = document.getElementById('num-agencia').value;
  const telefone = document.getElementById('phone').value;
  const endereço = document.getElementById('endereço').value;
  const Login_agencia_num = document.getElementById('lgn-agn');


  console.log(agencia, telefone, endereço, Login_agencia_num);
  const response = await fetch(url,
    {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({
        agencia,
        telefone,
        endereço,
        Login_agencia_num: "4"
      }) // body data type must match "Content-Type" header
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
}