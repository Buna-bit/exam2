export default function Page() {
    return (
      <>
      <h1 className="text-3xl">Final Exam</h1>
      <form>
        <label htmlFor="product">Product Description</label>
        <input type="text" name="product" id="product" className="m-5 text-black
        bg-yellow-400"/>
        <br />
        <label htmlFor="rec" className="m-5">Choose a recommendation:</label>

        <select name="rec" id="rec">
        <option value="any">Would try any</option>
        <option value="coop">The Coop</option>
       <option value="butcher">Butcher360</option>
       <option value="both">Would try both</option>
      </select>

      <br />

      <div className="ml-5">
      <input type="radio" id="yes" name="fav_language" value="YES" />
      <label htmlFor="yes">I have tried Korean food before</label><br />
      <input type="radio" id="no" name="fav_language" value="NO" />
      <label htmlFor="no">Never tried Korean food before</label><br />
      <input type="radio" id="idk" name="fav_language" value="IDK" />
      <label htmlFor="idk">Would not try Korean food ever</label>
      </div>

      <div className="ml-5">
        <input type="checkbox" id='like' name='opinion' value='Agree' />
        <label htmlFor="vehicle1"> I agree with your opinion</label><br />
        <input type="checkbox" id="dislike" name="opinion2" value="Disagree" />
        <label htmlFor="vehicle2"> I disagree with your opinion</label><br />
        </div>
        
        <button className="ml-10 bg-blue-500 hover:bg-blue-400 text-white font-bold 
        py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" 
        type="submit">Save</button>
      </form>
      </>
    );
  }
  