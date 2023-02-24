import './globals.css'
import { Montserrat } from '@next/font/google'

const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head />
      <body className={`${montserrat.className} container mx-auto px-4 my-12`}>
        {children}
      </body>
    </html>
  )
}
