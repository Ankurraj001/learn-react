import React from 'react'
import ReactFileReader from 'react-file-reader';

function ReadFile() {

    const onChange = e => {
        console.log('running');
        let files= e.target.files;
        console.log(files);
    }
  return (
      <div>
        <input type="file" name="file" onChange={(e)=> onChange(e)} />
      </div>
  )
}

export default ReadFile