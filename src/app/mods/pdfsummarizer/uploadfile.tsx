async function upload(pdf: any) {
  const formData = new FormData();
  formData.append("pdf", pdf);
  const req = await fetch("http://127.0.0.1:8080/api/pdfsummarizer", {
    method: "POST",
    body: formData,
  });
  if (!req.ok) throw new Error("Failed to fetch data");
  if (req.body) {
    const message = req.json();
    return message;
  } else return JSON.stringify({ text: "ERROR" });
}
export default upload;
