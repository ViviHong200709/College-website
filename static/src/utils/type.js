
const options={
  success:function(){
    console.log('upload success!');
  },
  fail:function(){
    console.log('upload err!');
  },
  progress:function(){
    console.log('uploading');
  }
}

export default options
