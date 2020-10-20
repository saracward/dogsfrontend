import React from "react";

const Display = (props) => {
  const { dogs } = props;
  const loaded = () => (
    <div style={{ textAlign: "center" }}>
      {dogs.map((dog) => (
        <article>
          <img src={dog.img} />
          <h1>{dog.name}</h1>
          <h3>{dog.age}</h3>
          <button
            onClick={() => {
              props.selectDog(dog);
              props.history.push("/edit");
            }}
          >
            Edit
          </button>
          <br />
          <button
            onClick={() => {
              props.deleteDog(dog);
            }}
          >
            Delete
          </button>
        </article>
      ))}
    </div>
  );

  //display loaded if there are dogs, show loading if there isn't
  return dogs.length > 0 ? loaded() : <h1>loading</h1>;
};

export default Display;
