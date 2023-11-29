import BlackNavbar from '@/components/BlackNavbar'
import Footer from '@/components/Footer'

interface ILayoutProps {
    children: React.ReactNode
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <body>
      <BlackNavbar />
            
      {children}
      <Footer />
    </body>
  )
}

export default Layout