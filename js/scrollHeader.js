// function main(){ 
//   var block = document.querySelector('.blockScroll');
//   var nav = document.querySelector('.navBar');
//   window.addEventListener('scroll', raz, false);
//   window.addEventListener('resize', raz, false);
//   function raz() {
//     var rect = block.getBoundingClientRect();
//     var rectnav = nav.getBoundingClientRect();

//     if (rect.top <= 0) {
//       if (block.className != 'sticky') {
//         block.className = 'sticky'
//       } 
//     } 
//     if (rectnav.top > 0 ){
//         block.className = ''
        
//     } 

//   }
// }

// main();

function main(){ 
  var block = document.querySelector('#navBar');
  var nav = document.querySelector('.checkPoint');
  window.addEventListener('scroll', raz, false);
  window.addEventListener('resize', raz, false);
  function raz() {
    var rect = block.getBoundingClientRect();
    var rectnav = nav.getBoundingClientRect();

    if (rect.top <= 0) {
      if (block.className != 'sticky') {
        block.className = 'sticky';
        if(document.querySelector('.blockScroll').classList.contains('active')) {
          document.querySelector('.downContainer').style.marginBottom = 431 + 'px';
        } else {
          document.querySelector('.downContainer').style.marginBottom = 80 + 'px';
        }
        
      } 
    } 
    if (rectnav.top > 0 ){
        block.className = '';
        if(document.querySelector('.blockScroll').classList.contains('active')) {
          document.querySelector('.downContainer').style.marginBottom = 0 + 'px';
        } else {
          document.querySelector('.downContainer').style.marginBottom = 0 + 'px';
        }
    } 
    window.status = document.body.clientWidth;
    if(status > 1079) {
      document.querySelector('.blockScroll').style.display = 'flex';
    } 

    if (status <= 1079 && !document.querySelector('.blockScroll').classList.contains('active')){
      document.querySelector('.blockScroll').style.display = 'none';
    }
  }
}

main();