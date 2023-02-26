import { useEffect, useState } from "react"
import List from "./List"
import ShowMessage from "./ShowMessage"

function App() {
  const [newGrocery, setNewGrocery] = useState<String>("")
  const [groceries, setGroceries] = useState<any>([])
  const [showMessage, setShowMessage] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [messageToShow, setMessageToShow] = useState("")
  const [editingIndex, setEditingIndex] = useState(0)

  function handleFormSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!isEditing) {
      setGroceries([newGrocery, ...groceries])
      setNewGrocery("")
      setShowMessage(true)
      setMessageToShow("Item Added Successfully")
    } else if (isEditing) {
      let newState = [...groceries]
      console.log(groceries[editingIndex])
      newState.splice(editingIndex, 1, newGrocery)
      setGroceries([...newState])
      setNewGrocery("")
      setShowMessage(true)
      setMessageToShow("Item Updated Successfully")
      setIsEditing(false)
    }
  }

  useEffect(() => {
    if (isEditing) {
      setNewGrocery(groceries[editingIndex])
    }
  }, [isEditing])

  useEffect(() => {
    const showModel = setTimeout(() => {
      setShowMessage(false)
    }, 1500)

    return () => clearInterval(showModel)
  }, [showMessage])

  function deleteItem(index: number) {
    setGroceries(groceries.filter((item, idx) => idx !== index))
    setShowMessage(true)
    setMessageToShow("Item Deleted Successfully")
  }

  function clearList() {
    setGroceries([])
    setShowMessage(true)
    setMessageToShow("All Items Deleted Successfully")
  }

  return (
    <main className='grid place-content-center pt-[20vh]'>
      <div className='bg-white px-14 py-5'>
        {showMessage ? <ShowMessage messageToShow={messageToShow} /> : ""}
        <h1 className='text-2xl font-bold font-mono mb-4 text-center'>
          Grocery Bud
        </h1>
        <form className='flex align-center mb-4' onSubmit={handleFormSubmit}>
          <input
            type='text'
            required
            placeholder='E.g. eggs'
            className='px-3 py-1 border border-blue-700 focus:outline-pink-400 focus:ring-pink-400 w-96 font-mono font-bold'
            value={newGrocery}
            onChange={e => setNewGrocery(e.target.value)}
          />
          <button className='bg-blue-500 ml-1 px-3 py-1 text-white'>
            {isEditing ? "Edit" : "Add"}
          </button>
        </form>
        {groceries.length <= 0 ? (
          <p className='font-sans font-semibold text-[1.2rem] text-center'>
            No Groceries To Show
          </p>
        ) : (
          <List
            groceryList={groceries}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            newGrocery={newGrocery}
            setEditingIndex={setEditingIndex}
            deleteItem={deleteItem}
          />
        )}
        {groceries.length !== 0 && (
          <button
            className='mx-[40%] mt-2 text-red-500 font-semibold'
            onClick={clearList}>
            Clear ALL
          </button>
        )}
      </div>
    </main>
  )
}

export default App
