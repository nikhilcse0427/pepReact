import {Link, Outlet} from 'react-router-dom'

const Root = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><Link to = '/'>Home</Link></li>
            <li><Link to = '/about'>About Us</Link></li>
            <li><Link to = '/contact'>Contact Us</Link></li>
            <li><Link to = '/product'>Products</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        copyright@2025
      </footer>
    </div>
  )
}

export default Root
