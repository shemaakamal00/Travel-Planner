function TripForm({ formData, handleChange, handleSubmit, buttonText }) {
    return (
      <form onSubmit={handleSubmit} className="trip-form">
        <label>
          Destination
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Example: Tokyo"
          />
        </label>
  
        <label>
          Region
          <input
            type="text"
            name="region"
            value={formData.region}
            onChange={handleChange}
            placeholder="Example: Asia"
          />
        </label>
  
        <label>
          Image URL
          <input
            type="text"
            name="flag"
            value={formData.flag}
            onChange={handleChange}
            placeholder="Paste an image URL"
          />
        </label>
  
        <label>
          Status
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="Want to go">Want to go</option>
            <option value="Planning">Planning</option>
            <option value="Booked">Booked</option>
            <option value="Visited">Visited</option>
          </select>
        </label>
  
        <label>
          Budget
          <input
            type="number"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            placeholder="Example: 15000"
          />
        </label>
  
        <label>
          Notes
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Write your travel notes..."
          />
        </label>
  
        <button type="submit">{buttonText}</button>
      </form>
    );
  }
  
  export default TripForm;