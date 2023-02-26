type TMessage = {
  messageToShow: String
}

export default function ShowMessage({ messageToShow }: TMessage) {
  let safe
  if (messageToShow.includes("Updated") || messageToShow.includes("Added")) {
    safe = true
  } else {
    safe = false
  }

  return (
    <>
      {safe ? (
        <section className={`text-center font-bold text-1xl bg-green-300`}>
          {messageToShow}
        </section>
      ) : (
        <section className={`text-center font-bold text-1xl bg-red-400`}>
          {messageToShow}
        </section>
      )}
    </>
  )
}
