export function postMissingPrinter(make, model) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      "make": make,
      "model": model
    })
  };
  fetch('http://localhost:3001/reportMissing', requestOptions)
    .then(response => {console.log(response)});
}