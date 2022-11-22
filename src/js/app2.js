/* eslint-disable */


async function depositar() {

  const url = `http://localhost:3000/api/v1/deposit`;
  const num_conta = document.getElementById('num-conta').value;
  const deposit_value = document.getElementById('value').value;

  console.log(num_conta, deposit_value);
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
        num_conta,
        deposit_value
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
