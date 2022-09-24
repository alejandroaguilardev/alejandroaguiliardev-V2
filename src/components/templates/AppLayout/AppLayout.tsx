import { NextSeo } from 'next-seo';
import Script from 'next/script';
import { AppTheme } from '../../../theme';
import { ContainerSocialNetworks, Footer, Navbar } from '../../organisms';
import { IAppLayout } from "./IAppLayout"

export const AppLayout = ({ children, title, description, page }: IAppLayout) => {
    return (
        <>
            <NextSeo
                title={title}
                description={description}
                canonical="https://www.canonical.ie/"
                openGraph={{
                    url: `${process.env.NEXT_PUBLIC_URL}${page}`,
                    title,
                    description,
                    images: [
                        {
                            url: `${process.env.NEXT_PUBLIC_LOGO}`,
                            width: 300,
                            height: 300,
                            alt: 'Logo Alejandro Aguilar ',
                            type: 'image/jpeg',
                        },
                    ],
                    site_name: process.env.NEXT_PUBLIC_NAME,
                }}
                twitter={{
                    handle: '@Alejandro Aguilar',
                    site: `@${process.env.NEXT_PUBLIC_NAME}`,
                    cardType: process.env.NEXT_PUBLIC_LOGO,
                }}
            />

            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-7EXZSPTPNQ"
                strategy="afterInteractive"
            />
            <AppTheme>
                <Navbar />
                {children}
                <Footer />
                <ContainerSocialNetworks />
            </AppTheme>


        </>
    )
}
