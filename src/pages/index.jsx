// src/index.jsx
import Header from "@/layouts/Header"
import Menu from "@/components/Menu"

export const metadata = {
  title: "Главная",
}

export default function Home() {
  return (
      <Header />
      <Menu />
  )
}
