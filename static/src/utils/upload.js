import UtilType from './type'

function requestEvent( options ) {
  try {
    let formData = options['formData']
    let xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function() {

      if ( xhr.readyState === 4 && xhr.status === 200 ) {
        options.success(JSON.parse(xhr.responseText))
      }
    }

    xhr.upload.onprogress = function(evt) {
      let loaded = evt.loaded
      let tot = evt.total
      let per = Math.floor(100 * loaded / tot)
      options.progress(per)
    }
    xhr.open('post', '/api/article/fileupload.json')
    console.log('requestEvent:',formData.get('files'));
    xhr.send(formData.get('files'))
    // xhr.send(formData)
  } catch ( err ) {
    options.fail(err)
  }
}

function emitEvent ( options ){
  let file
  let formData = new FormData()
  // let input = document.createElement('input')
  // input.setAttribute('type', 'file')
  // input.setAttribute('name', 'files')
  //
  // input.click()
  formData.append('files', options.file)
  requestEvent({
    formData,
    success: options.success,
    fail: options.fail,
    progress: options.progress
  })
  // input.onchange = function () {
  //   file = input.files[0]
  // }

}

function upload( options ) {
  // if ( !UtilType.isJSON( options ) ) {
  //   console.log( 'upload options is null' )
  //   return
  // }
  let _options = options
  _options.success = options.success ? options.success : function() {}
  _options.fail = options.fail ? options.fail : function() {}
  _options.progress = options.progress ? options.progress : function() {}

  emitEvent(_options)
}

export default upload
