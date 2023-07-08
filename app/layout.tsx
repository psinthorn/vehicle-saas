import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata = {
  title: 'My Samui Island Tour',
  description: 'Quick & Easy Speed Boat Ticket.',
}

export default function RootLayout({
  children,
}: {
 
  children: React.ReactNode
  
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  )
}
