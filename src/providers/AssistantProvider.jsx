// src/providers/AssistantProvider.jsx
import {
  createAssistant,
  createSmartappDebugger,
} from "@sberdevices/assistant-client"
import { useEffect, useState } from "react"

export const AssistantContext = React.createContext(null)

export const AssistantProvider = ({ children }) => {
  const [assistant, setAssistant] = useState(null)
  const [currentPage, setCurrentPage] = useState("")

  const initializeAssistant = (getState) => {
    if (process.env.NODE_ENV === "development") {
      return createSmartappDebugger({
        token: process.env.REACT_APP_TOKEN ?? "",
        initPhrase: `Запусти ${process.env.REACT_APP_SMARTAPP}`,
        getState,
        nativePanel: {
          defaultText: "Покажи поздравления",
          screenshotMode: false,
          tabIndex: -1,
        },
      })
    }
    return createAssistant({ getState })
  }

  useEffect(() => {
    const assistant = initializeAssistant(() => ({
      currentPage,
      screen: currentPage ? "congratulations" : "main",
    }))

    setAssistant(assistant)

    assistant.on("data", (event) => {
      if (event.type === "navigation") {
        switch (event.navigation.command) {
          case "UP":
            window.scrollBy(0, -100)
            break
          case "DOWN":
            window.scrollBy(0, 100)
            break
          case "LEFT":
            // Назад
            if (currentPage) {
              window.location.href = "/"
            }
            break
        }
      } else if (event.action) {
        switch (event.action.type) {
          case "open_page":
            window.location.href = `/${event.action.page}`
            break
        }
      }
    })

    return () => {
      assistant.destroy()
    }
  }, [currentPage])

  return (
    <AssistantContext.Provider value={{ assistant, setCurrentPage }}>
      {children}
    </AssistantContext.Provider>
  )
}
