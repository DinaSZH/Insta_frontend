<div className="modal-back">
      <div className="modal-backdrop" onClick={close}></div>
        <div className="modal">

        <div className='newUpload'>
          <div className='newPost' >
              <div>
                <h1>Create new post</h1>
              </div>
           <hr></hr>

            <div className='upload'>
                {selectedFilePhoto && (
                  <img src={selectedFilePhoto} alt="Selected File" className="uploaded-image" />
                )}

                <Image className='uploadImg' src={upload} alt="Upload Icon" />
                <h1>Drag photos and videos here</h1>

                <button className="button-dark" onClick={handleButtonClick}>
                  Select from computer
                </button>

                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                  onChange={handleFileUpload}
                />
            </div>
        </div>

      <div className='x'>
        <Image onClick={close} src={x}/>
      </div>
        </div>

        </div>
        

        
        
      

    {/* <div className='newUpload'>
    <div className='newPost' >
       <div>
         <h1>Create new post</h1>
       </div>
      <hr></hr>

       <div className='upload'>
           <Image className='uploadImg' src={upload}/>
           <h1>Drag photos and videos here</h1>
           <button className="button-dark">Select from computer</button>
       </div>
    </div>

   <div className='x'>
     <Image onClick={closeByButton} src={x}/>
   </div>
    </div> */}


<div className='newUpload'>
          <div className='newPost' >
              <div className="flex">
                <button>Back</button>
                <h1>Edit</h1>
                <button>Next</button>
              </div>
           <hr></hr>

            <div className='upload'>
                {selectedFilePhoto && (
                  <img src={selectedFilePhoto} alt="Selected File" className="uploaded-image" />
                )}

                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                  onChange={handleFileUpload}
                />
            </div>
        </div>

      <div className='x'>
        <Image onClick={close} src={x}/>
      </div>
        </div>
 </div>


