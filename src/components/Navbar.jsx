import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <NavLink>Home</NavLink>
        <NavLink to={"country"}>Countries</NavLink>
        <NavLink to={"test"}>Test Api</NavLink>
    </div>
  )
}

export default Navbar