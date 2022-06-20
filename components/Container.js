import Head from 'next/head'
import Footer from './Footer'
import NavBar from './NavBar'

export default function Container({ children }) {
    return (
        <div className="bg-gray-50 dark:bg-gray-900">
            <Head />
            <NavBar />
            <main className="flex flex-col justify-center px-8">
                {children}
            </main>
            <Footer />
        </div>
    )
}
