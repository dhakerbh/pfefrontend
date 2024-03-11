async function upload(image: any) {
  const formData = new FormData();
  formData.append("image", image);
  const req = await fetch("http://127.0.0.1:8080/api/imtotxt", {
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
