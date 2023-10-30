import Link from 'next/link'
import './Header.scss'

export default function Header() {
    return(
        <div className="container">
            <header>
                <h1>Header</h1>
                <Link href={'/'}>Home</Link>
                <span>|</span>
                <Link href={'/cadastro'}>Cadastro</Link>
            </header>
        </div>
    )
}