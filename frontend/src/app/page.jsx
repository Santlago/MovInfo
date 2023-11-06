import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return(
      <div className='container'>
          <main>
              <h1>Home</h1>
              <Link href={'/cadastro/'}>Cadastre-se</Link>
              <Link href={'/login'}>Login</Link>
          </main>
      </div>
  )
}