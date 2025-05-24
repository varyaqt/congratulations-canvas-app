// src/index.jsx
import { AssistantProvider } from "@/providers/AssistantProvider"
import Header from "@/layouts/Header"
import Menu from "@/components/Menu"

export const metadata = {
  title: "Главная",
}

export default function Home() {
  return (
    <AssistantProvider>
      <Header />
      <Menu />
    </AssistantProvider>
  )
}
