import { Inter } from 'next/font/google'
import MainLayout from '@/components/layouts/MainLayout'
import Link from 'next/link'
import { DarkLayout } from '@/components/layouts/DarkLayout'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
    return (
        <>
            <h1>About Page</h1>
                <div className={'description'}>
                    <p>
                        Get started by editing&nbsp;
                        <code className={'code'}>pages/about.tsx</code>
                    </p>
                    <h1>
                        Ir a <Link href={'/contact'}>Contact</Link>
                    </h1>
                </div>
        </>
    )
}

About.getLayout = function getLayout(page:JSX.Element){
    return(
        <MainLayout>
            <DarkLayout>
                {page}
            </DarkLayout>
        </MainLayout>
    )
}