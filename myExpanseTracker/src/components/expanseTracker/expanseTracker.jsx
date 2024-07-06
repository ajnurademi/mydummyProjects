import ExpanseTable from "../expanseTable/expanseTable.jsx"
import './expandeTracker.css'
function expanseTracker() {

  return (
    <>
      <div className="window">
        <div className="container mx-auto p-4 bg-white rounded shadow-lg">
          <div className="mb-4">
            <label className="text-2xl font-bold tracking-wide text-green-600">Expanse Tracker</label>
          </div>
          <div className="formular flex flex-col sm:flex-row items-center mb-4 space-y-4 sm:space-y-0 sm:space-x-4">
            <p className="font-medium ">Add a New Item:</p>
            <div className="flex flex-col ">
              <label className="mb-1">Name:</label>
              <input
                type="text"
                placeholder="Where was the expanse made?"
                className="p-2 border rounded min-w-80"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1">Date:</label>
              <input type="date" className="p-2 border rounded" />
            </div>
            <div className="flex flex-col">
              <label className="mb-1">Amount:</label>
              <input type="number" className="p-2 border rounded" />
            </div>
          </div>
          <div className="btn mb-4">
            <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 ">
              Add
            </button>
          </div>
          <div className="table">
            <ExpanseTable />
          </div>
        </div>
      </div>
    </>
  )
}

export default expanseTracker
