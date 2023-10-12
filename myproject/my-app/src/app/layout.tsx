import Navbar from './components/Navbar'
import Providers from './components/Providers'
import './globals.css'
import  Header  from '@/app/components/Header'
import SearchBar from '@/app/components/SearchBar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <Providers>
        <Header />
        <Navbar/>
        <SearchBar/>
        {children}
        </Providers>
        </body>
    </html>
  )
}
