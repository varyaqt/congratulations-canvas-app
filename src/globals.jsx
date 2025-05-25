import "@/styles"
import { Head } from "minista"
import Header from "@/layouts/Header"
import Content from "@/layouts/Content"

export default function Layout(props) {
  const { children, title = "" } = props

  return (
    <>
      <Head htmlAttributes={{ lang: "ru" }}>
        <title>{`Поздравлю | ${title}`}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Приложение с поздравлениями" />

        {/* Favicon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <Header />
      <Content>{children}</Content>
    </>
  )
}
