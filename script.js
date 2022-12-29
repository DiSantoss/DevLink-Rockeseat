function toggleMode() {
  const html = document.documentElement

  // o toggle mode pode ser feito de 2 formas
  // primeira
    html.classList.toggle("light")
    // segunda abaixo.

    /*
  if(html.classList.contains('light')) {
    html.classList.remove('light') }
    else {
      html.classList.add('light')
    } */

    

    // selecionar a tag img e substituir a imagem
    
    //temos que selecionar a imagem criando uma variavel para ela
    const img = document.querySelector('#profile img')

    if(html.classList.contains('light')) {
      //se tiver light mode, adicionar a imagem light
      img.setAttribute('src', './assets/avatar-light.jpg')
    } else {
      // se tiver sem light mode, manter a imagem normal
      img.setAttribute('src', './assets/avatar.jpg')
    }


  }
  
