import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const DeerForm = () => {
  const [deer, setDeer] = useState({
    userId: 0,
    name: "",
    description: "",
    dateFirstSeen: new Date().toISOString(),
    food: "",
    handFeed: false,
  });

  const localDeerUser = localStorage.getItem("deeruser")
  const deerUserObject = JSON.parse(localDeerUser)

  const navigate = useNavigate();

  const handleSaveButtonClick = (event) => {
    event.preventDefault();

    const deerToSendToApi = {
      userId: deerUserObject.id,
      name: deer.name,
      description: deer.description,
      dateFirstSeen: deer.dateFirstSeen,
      food: deer.food,
      handFeed: deer.handFeed,
    };

    fetch("http://localhost:8088/deer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(deerToSendToApi),
    })
      .then((response) => response.json())
      .then((savedDeer) => {
        console.log("Saved deer:", savedDeer);
        navigate("/deer");
      });
  };

  return (
    <form className="deerForm">
      <h2 className="deerForm__title">Add a New Deer Profile</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Deer Name:</label>
          <input
            required
            autoFocus
            type="text"
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
            required
            className="form-control"
            placeholder="Description"
            value={deer.description}
            onChange={(evt) => {
              const copy = { ...deer };
              copy.description = evt.target.value;
              setDeer(copy);
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="dateFirstSeen">Date First Seen:</label>
          <input
            required
            type="date"
            className="form-control"
            placeholder="Date First Seen"
            value={deer.dateFirstSeen}
            onChange={(evt) => {
              const copy = { ...deer };
              copy.dateFirstSeen = evt.target.value;
              setDeer(copy);
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="food">Food:</label>
          <input
            required
            type="text"
            className="form-control"
            placeholder="Food"
            value={deer.food}
            onChange={(evt) => {
              const copy = { ...deer };
              copy.food = evt.target.value;
              setDeer(copy);
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="handFeed">Hand Feed:</label>
          <input
            type="checkbox"
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
>
  Save
</button>
</form>
  )
          }