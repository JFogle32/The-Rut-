import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./DeerForm.css";

export const DeerEdit = () => {
  const [deer, setDeer] = useState({
    id: "",
    name: "",
    description: "",
    dateFirstSeen: "",
    handFeed: false,
    foodPreferred: "",
    userId: JSON.parse(localStorage.getItem("deeruser"))?.id,
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8088/deer/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setDeer(data);
      });
  }, [id]);

  const handleSaveButtonClick = (event) => {
    event.preventDefault();

    return fetch(`http://localhost:8088/deer/${deer.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(deer),
    })
      .then((response) => response.json())
      .then(() => {
        navigate("/deer");
      });
  };

  return (
    <>
    <form className="deerEditForm">
      <h2 className="deerEditForm__title">Edit Deer</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Deer Name:</label>
          <input
            type="text"
            id="name"
            required
            autoFocus
            className="form-control"
            placeholder="Deer Name"
            value={deer.name}
            onChange={(evt) => {
              const copy = { ...deer };
              copy.name = evt.target.value;
              setDeer(copy);
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            required
            className="form-control"
            placeholder="Description"
            value={deer.description}
            onChange={(evt) => {
              const copy = { ...deer };
              copy.description = evt.target.value;
              setDeer(copy);
            }}
          ></textarea>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="dateFirstSeen">Date First Seen:</label>
          <input
            type="date"
            id="dateFirstSeen"
            required
            className="form-control"
            placeholder="Date First Seen"
            value={deer.dateFirstSeen}
            onChange={(evt) => {
              const copy = { ...deer };
              copy.dateFirstSeen = evt.target.value;
              setDeer(copy);}}
/>
</div>
</fieldset>
<fieldset>
              <div className="form-group">
          <label htmlFor="handFeed">Hand Feed:</label>
          <input
            type="checkbox"
            id="handFeed"
            className="form-control"
            value={deer.handFeed}
            onChange={(evt) => {
              const copy = { ...deer };
              copy.handFeed = evt.target.checked;
              setDeer(copy);
            }}
          />
      
          
        </div>
      </fieldset>
      <button
        onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
        className="btn btn-primary"
      >
        Save Edits
      </button>
    </form>
    </>
  );
}
