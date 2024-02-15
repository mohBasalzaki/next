import Navbar from '@/components/Navbar/Navbar'
import { Inter, Cairo } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })
const cairo = Cairo({ subsets: ['arabic'] })

export const metadata = {
  title: 'تطبيق نكست',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html dir="rtl" lang="ar">
      <body className={cairo.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
