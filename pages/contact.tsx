import { Inter } from 'next/font/google'
import Link from 'next/link'
import MainLayout from '@/components/layouts/MainLayout'


const inter = Inter({ subsets: ['latin'] })

export default function Contact() {
  return (
    <MainLayout>
       <h1>Contact Page</h1>
        <div className={'description'}>
          <p>
            Get started by editing&nbsp;
            <code className={'code'}>pages/contact.tsx</code>
          </p>
          <h1>
           Ir a <Link href={'/pricing'}>Home</Link>
          </h1>
        </div>
    </MainLayout>
  )
}
