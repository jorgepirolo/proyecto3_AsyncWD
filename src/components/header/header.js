import { button } from '../button/button'
import { icono } from '../icono/icono'
import './header.css'

export const buscar = document.createElement('input')

export const pintarheader = () => {
  const nav = document.createElement('nav')
  const header = document.querySelector('header')
  header.appendChild(nav)

  const divlogo = document.createElement('div')
  const divexp = document.createElement('div')
  const logo = document.createElement('img')
  logo.src =
    'https://static.vecteezy.com/system/resources/previews/023/986/660/original/pinterest-logo-pinterest-logo-transparent-pinterest-icon-transparent-free-free-png.png'
  logo.className = 'logo'
  divlogo.appendChild(logo)
  divlogo.appendChild(divexp)

  divexp.innerHTML = `
    ${button({ texto: 'Inicio', clase: 'inicio' })}
    ${button({ texto: 'Explorar', clase: 'explorar' })}
    ${button({ texto: 'Crear', clase: 'crear' })}
  `

  divexp.className = 'flex gap'
  divlogo.className = 'flex gap'

  const divinput = document.createElement('div')
  const lupa = document.createElement('img')
  lupa.src = 'assets/lupa.png'
  lupa.className = 'icono lupa'

  buscar.placeholder = 'Buscar'
  divinput.appendChild(buscar)
  divinput.appendChild(lupa)
  divinput.className = 'flex grow'

  const divaccs = document.createElement('div')
  divaccs.innerHTML = `
    ${icono({ source: './assets/notification.png', clase: 'icono' })}
    ${icono({ source: './assets/chat.png', clase: 'icono' })}
    ${icono({ source: './assets/user.png', clase: 'icono' })}
    ${icono({ source: './assets/arrow.png', clase: 'icono arrow' })}
  `
  divaccs.classList = 'flex gap'

  nav.appendChild(divlogo)
  nav.appendChild(divinput)
  nav.appendChild(divaccs)
  nav.classList = 'flex'
}
