import { useState } from 'react';

import './App.css';

function App() {
  // const [file, setFile] = useState(null);
  const [files, setFiles] = useState([]);
  console.log('🚀 ~ file: App.jsx:8 ~ files:', files);

  const handleUpload = (e) => {
    // setFile(e.target.files[0]);
    setFiles(e.target.files);
  };

  // Upload one file
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const formData = new FormData();

  //   formData.append('file', file);

  //   try {
  //     const payload = {
  //       method: 'POST',
  //       body: formData,
  //     };

  //     const response = await fetch(
  //       'http://localhost:8080/api/upload/file',
  //       payload,
  //     );
  //     const data = await response.json();
  //     console.log('🚀 ~ file: App.jsx:27 ~ handleSubmit ~ data:', data.url);

  //     const dataToSend = {
  //       name: 'test',
  //       email: '',
  //       password: '',
  //       avatar: data.url,
  //     };

  //     // await fetch('http://localhost:8080/api/users', {
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // Upload multiple files
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i]);
    }

    const payload = {
      method: 'POST',
      body: formData,
    };

    try {
      const response = await fetch(
        'http://localhost:8080/api/upload/files',
        payload,
      );
      const data = await response.json();
      console.log('🚀 ~ file: App.jsx:27 ~ handleSubmit ~ data:', data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Image upload</h1>
      <form className="upload-container" onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          name="file"
          multiple
          onChange={handleUpload}
        />

        <button type="submit">Upload</button>
      </form>

      <hr />

      <div className="image-container">
        {/* <img src={file ? URL.createObjectURL(file) : ''} alt="" /> */}

        {/* files -> FileList */}
        {Array.from(files).map((file, index) => (
          <img key={index} src={file ? URL.createObjectURL(file) : ''} alt="" />
        ))}
      </div>
    </div>
  );
}

export default App;
