"use client";
const mod1 = () => {
  async function HandleOnSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    console.log("name ", e.target);
  }
  function HandleOnChange(e: React.FormEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement & {
      files: FileList;
    };
    console.log(target.files);
  }
  return (
    <div className="wrappermod1">
      <div className="container">
        <h1>Summarizing your PDFs has never been easier ! </h1>
        <div className="upload">
          <input type="file" name="file" onChange={HandleOnChange} />
        </div>
      </div>
    </div>
  );
};
export default mod1;
