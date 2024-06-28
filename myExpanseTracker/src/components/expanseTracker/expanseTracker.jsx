import ExpanseTable from "../expanseTable/expanseTable.jsx"
function expanseTracker() {

  return (
    <>
      <div className="container">
        <div className="text-3xl font-bold underline">
          <label className="text-3xl font-bold underline">Expanse Tracker</label>
        </div>
        <div className="formular">
          <p>Add a New Item:</p>
          <label className="text-3xl font-bold underline">Name:</label>
          <input type="text" placeholder="Where was the expanse made?" />
          <label>Date</label>
          <input type="date" />
          <label>Amount:</label>
          <input type="number"/>
        </div>
        <div className="btn">
          <button type="submit">Add</button>
        </div>
        <div className="table">
          <ExpanseTable/>
        </div>
      </div>

    </>
  )
}

export default expanseTracker
