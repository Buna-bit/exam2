export default function Page() {
    return (
      <>
      <h1 className="text-5xl ml-6">Final Exam</h1>
      <form>
        <label htmlFor="product" className="m-6">Leave nice comments here</label>
        <input type="text" name="product" id="product" className="m-5 text-black
        bg-blue-100"/>
        <br />
        <label htmlFor="rec" className="m-6">Choose a recommendation:</label>

        <select name="rec" id="rec">
        <option value="coop">The Coop</option>
       <option value="butcher">Butcher360</option>
       <option value="any">Would try any</option>
       <option value="all">Would try all</option>
       <option value="ew">Would not try any</option>
      </select>

      <br />

      <div className="m-6">
      <input type="radio" id="yes" name="fav_language" value="YES" />
      <label htmlFor="yes">I like Korean food</label><br />
      <input type="radio" id="no" name="fav_language" value="NO" />
      <label htmlFor="no">I do not like Korean food</label><br />
      <input type="radio" id="idk" name="fav_language" value="IDK" />
      <label htmlFor="idk">I do not know I never tried</label>
      </div>

      <div className="m-6">
        <input type="checkbox" id='like' name='opinion' value='Agree' />
        <label htmlFor="vehicle1"> I agree with your opinions</label><br />
        <input type="checkbox" id="dislike" name="opinion2" value="Disagree" />
        <label htmlFor="vehicle2"> I disagree with your opinions</label><br />
        </div>
        
        <button className="m-6 bg-blue-500 hover:bg-blue-400 text-white font-bold 
        py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" 
        type="submit">Save</button>
      </form>
      </>
    );
  }
  