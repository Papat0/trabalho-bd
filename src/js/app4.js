/* eslint-disable */


async function criarConta() {

  const url = `http://localhost:3000/api/v1/create-account`;
  const agency = document.getElementById('agencia').value;
  const senha_conta = document.getElementById('senha').value;

  console.log(agency, senha_conta);
  const response = await fetch(
    url,
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
        agency,
        senha_conta
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