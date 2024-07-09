

const Link = ({label}) => {
   return (
    <li className="nav-item">
      <a className="nav-link text-light" href="#">
        {label}
      </a>
    </li>
  )
}

export default Link
