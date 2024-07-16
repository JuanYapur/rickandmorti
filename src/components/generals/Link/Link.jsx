import {Link as RouterLink} from "react-router-dom"

const Link = ({label,url}) => {
   return (
    <li className="nav-item">
      <RouterLink to={url} className="nav-link text-light">
        {label}
      </RouterLink>
    </li>
  )
}

export default Link
