export default function Page() {
    return (
      <>
      <h1 className="text-3xl">Final Exam</h1>
      <form>
        <label htmlFor="product">Product Description</label>
        <input type="text" name="product" id="product" className="text-black
        bg-yellow-400"/>
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold 
        py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" 
        type="submit">Save</button>
      </form>
      </>
    );
  }
  