import React, {useState} from 'react';
import '../styles/editor.scss';

function Editor() {

  return (
    <div id="editor">
      <h1>Pixel Editor</h1>
      <h2>Enter Panel Dimensions</h2>
      <div id='options'>
        <div className="option">
          <input 
          type="number" 
          className='panelInput' 
          defaultValue='16' 
          // onChange={ } 
          />
          <span>Width</span>
        </div>
        <div className="option">
          <input 
          type="number" 
          className='panelInput' 
          defaultValue='16' 
          // onChange={ } 
          />
          <span>Height</span>
        </div>
      </div>

      <button className='button'>Start Drawing</button>
    </div>
  );
}

export default Editor;
