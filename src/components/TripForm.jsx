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
            placeholder="Exempel: Tokyo"
          />
        </label>
  
        <label>
          Världsdel
          <input
            type="text"
            name="region"
            value={formData.region}
            onChange={handleChange}
            placeholder="Exempel: Asia"
          />
        </label>
  
        <label>
          Flagga (URL)
          <input
            type="text"
            name="flag"
            value={formData.flag}
            onChange={handleChange}
            placeholder="Klistra in en bild-URL"
          />
        </label>
  
        <label>
          Status
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="Vill besöka">Vill besöka</option>
            <option value="Planerar att besöka">Planerar att besöka</option>
            <option value="Bokad resa">Bokad resa</option>
            <option value="Besökt">Besökt</option>
          </select>
        </label>
  
        <label>
          Budget
          <input
            type="number"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            placeholder="Exempel: 15000"
          />
        </label>
  
        <label>
          Anteckningar
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Skriv dina resenoteringar..."
          />
        </label>
  
        <button type="submit">{buttonText}</button>
      </form>
    );
  }
  
  export default TripForm;