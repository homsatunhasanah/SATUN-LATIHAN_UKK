document.querySelectorAll('a[href^="#]').forEach(anchor =>{
    anchor.addEventListenner('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute()).scrollIntoview({
            behavior:'smooth'

    });
  });
});
