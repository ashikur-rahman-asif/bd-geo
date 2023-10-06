import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BD Geo Api', 
  description: 'The data regarding Bangladeshs Divisions, Districts, Upazilla, Thana, Post Office etc., can be found in both Bangla and English via the designated access points.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <a href="/">Home</a>
        </nav>
        
        {children}
        <footer>Footer</footer>
        </body>
    </html>
  )
}
