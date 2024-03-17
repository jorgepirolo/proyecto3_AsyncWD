import './button.css'
export const button = ({ texto, clase }) => {
  return `<button class="button ${clase}">${texto}</button>`
}
