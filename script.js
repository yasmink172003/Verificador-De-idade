function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = window.document.getElementById('txtano')
  var res = window.document.getElementById('res')
  if (fano.value.length == 0 || Number(fano.value) > ano) {
      window.alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
      var fsex = window.document.getElementsByName('radsex')
      var idade = ano - Number(fano.value)
      var gênero = ''
      var img = document.createElement('img')
      img.setAttribute('id', 'foto')
      if (fsex[0].checked) {
          gênero = 'Homem'
          if (idade >= 0 && idade < 10) {
              img.setAttribute('src', 'bebemenino.jpg')
          } else if (idade < 21) {
              img.setAttribute('src', 'jovemmenino.jpg')
          } else if (idade < 50) {
              img.setAttribute('src', 'jovemadulto.jpg')
          } else {
              img.setAttribute('src', 'homemidoso.jpg')
          }
      } else if (fsex[1].checked) {
          gênero = 'Mulher'
          if (idade >= 0 && idade < 10) {
              img.setAttribute('src', 'bebemenina.jpg')
          } else if (idade < 21) {
              img.setAttribute('src', 'mulherjovem.jpg')
          } else if (idade < 50) {
              img.setAttribute('src', 'mulheradulta.jpg')
          } else {
              img.setAttribute('src', 'mulheridosa.jpg')
          }
      }
      res.style.textAlign = 'center'
      res.innerHTML = `Detectamos <strong>${gênero}</strong> com <strong>${idade}</strong> anos.`
      res.appendChild(img)
  }
}