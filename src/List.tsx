import { FaTrash } from "react-icons/fa"
import { MdEdit } from "react-icons/md"

export default function List({
  groceryList,
  setIsEditing,
  setEditingIndex,
  deleteItem,
}: any) {
  console.log(groceryList)
  if (groceryList.length == 0) {
    return <p>No Items to Show</p>
  }
  return (
    <section>
      {groceryList.map((item: String, idx: number) => {
        return (
          <div key={idx}>
            {idx % 2 != 0 ? (
              <div className='flex justify-between items-center mb-2 px-1'>
                <p className='font-sans font-semibold text-[1.2rem] ml-1'>
                  {item[0].toUpperCase() + item.slice(1)}
                </p>
                <div className='flex gap-6 mr-2'>
                  <MdEdit
                    onClick={() => {
                      setIsEditing(true)
                      setEditingIndex(idx)
                    }}
                  />
                  <FaTrash onClick={() => deleteItem(idx)} />
                </div>
              </div>
            ) : (
              <div className='flex justify-between items-center mb-2  bg-slate-100 py-2 px-1'>
                <p className='font-sans font-semibold text-[1.2rem] ml-1'>
                  {item[0].toUpperCase() + item.slice(1)}
                </p>
                <div className='flex gap-6 mr-2'>
                  <MdEdit
                    onClick={() => {
                      setIsEditing(true)
                      setEditingIndex(idx)
                    }}
                  />
                  <FaTrash onClick={() => deleteItem(idx)} />
                </div>
              </div>
            )}
          </div>
        )
      })}
    </section>
  )
}
