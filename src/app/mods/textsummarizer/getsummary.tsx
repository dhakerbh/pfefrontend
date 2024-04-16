async function get_summary(text: string) {
  const req = await fetch("http://127.0.0.1:8080/api/summarizetext", {
    method: "POST",
    headers: { 
      'Content-Type': 'application/json',
  },
    body: JSON.stringify({ "text": text })
  }).then((response) => response.json())
  .then((data) => {const {message} = data ; return message})}
export default get_summary;
