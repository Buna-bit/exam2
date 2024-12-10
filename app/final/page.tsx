export default function Page() {
    return (
      <>
      <h1 className="text-3xl">Final Exam</h1>
      <form>
        <label htmlFor="product">Product Description</label>
        <input type="text" name="product" id="product" className="m-5 text-black
        bg-yellow-400"/>
        <br />
        <label htmlFor="cars" className="m-5">Choose a car:</label>

        <select name="cars" id="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
       <option value="mercedes">Mercedes</option>
       <option value="audi">Audi</option>
      </select>

      <br />

      <div className="ml-5">
      <input type="radio" id="html" name="fav_language" value="HTML" />
      <label htmlFor="html">HTML</label><br />
      <input type="radio" id="css" name="fav_language" value="CSS" />
      <label htmlFor="css">CSS</label><br />
      <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
      <label htmlFor="javascript">JavaScript</label>
      </div>

      <div className="ml-5">
        <input type="checkbox" id='vehicle' name='vehicle1' value='Bike' />
        <label htmlFor="vehicle1"> I have a bike</label><br />
        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
        <label htmlFor="vehicle2"> I have a car</label><br />
        </div>
        
        <button className="ml-10 bg-blue-500 hover:bg-blue-400 text-white font-bold 
        py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" 
        type="submit">Save</button>
      </form>
      </>
    );
  }
  