async function get_summary(text: string) {
  const req = await fetch("http://127.0.0.1:8080/api/summarizetext", {
    method: "POST",
  });
  if (!req.ok) throw new Error("Failed to fetch data");
  const message = req.json();
  return message;
}
export default get_summary;
