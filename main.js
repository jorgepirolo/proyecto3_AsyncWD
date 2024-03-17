import { button } from './src/components/button/button'
import { pintarfooter } from './src/components/footer/footer'
import { buscar, pintarheader } from './src/components/header/header'
import './style.css'
const AK = 'VlmnSIUC6ds2oank03DVbQHSczKhlcj2eyuizaChDoI'
let query = 'green and orange'

pintarheader()

const pintarpics = (query) => {
  fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${AK}`)
    .then((res) => res.json())
    .then((res) => {
      for (const pic of res.results) {
        const container = document.createElement('div')
        const divblur = document.createElement('div')
        const img = document.createElement('img')
        const div = document.querySelector('#results')

        divblur.innerHTML = `${button({ texto: 'Guardar', clase: 'saveblur' })}
        <div class="share">
        <img src="./assets/share.png" alt="share">
        </div>
        <div class="more">
        <img src="./assets/more.png" class="moreicn"  alt="more">
        </div>
        `
        divblur.classList = 'blur'
        container.classList = 'container'

        div.appendChild(container)
        container.appendChild(img)
        container.appendChild(divblur)
        img.src = pic.urls.full
        img.loading = 'lazy'
        img.classList = 'pics'
      }
      if (res.results.length < 1) {
        const p = document.createElement('p')
        p.innerText =
          'Lo siento, tu búsqueda no ha encontrado imágenes con ese criterio. Intenta revisar la ortografía o prueba con una nueva.'
        const div = document.querySelector('#results')
        div.appendChild(p)
      }
    })
    .catch((err) => console.log(err))
}

pintarpics(query)

const checkkey = (key) => {
  if (key.key === 'Enter') {
    query = buscar.value
    const div = document.querySelector('#results')
    div.innerHTML = ''
    pintarpics(query)
    console.log(query)
  }
}

buscar.addEventListener('keydown', (e) => checkkey(e))

const inicio = document.querySelector('.inicio')
inicio.addEventListener('click', () => {
  const div = document.querySelector('#results')
  div.innerHTML = ''
  query = 'random'
  console.log(query)
  pintarpics(query)
})

const explorar = document.querySelector('.explorar')
explorar.addEventListener('click', () => {
  const div = document.querySelector('#results')
  div.innerHTML = ''
  query = 'explore'
  console.log(query)
  pintarpics(query)
})

const crear = document.querySelector('.crear')
crear.addEventListener('click', () => {
  const div = document.querySelector('#results')
  div.innerHTML = ''
  query = 'ideas'
  console.log(query)
  pintarpics(query)
})

pintarfooter()
