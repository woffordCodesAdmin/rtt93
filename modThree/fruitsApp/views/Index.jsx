import React from "react";

function Index(props) {
  const fruits= props.fruits;
  return (
    <div>
      <nav>
        <a href="/fruits/new">Create a New Fruit</a>
      </nav>

      {fruits.map((fruit, i) => {
        return (
          <div key={i}>
            <a href={`/fruits/${fruit._id}`}>
              <h2>{fruit.name}</h2>
            </a>

{/* {/* ------------------------- */}
<a href={`/fruits/${fruit._id}/edit`}>Edit This Fruit</a>

{/* ------------------------- */} 



{/* ------------------------- */}
            <form action={`/fruits/${fruit._id}?_method=DELETE`} method="POST"  >
            <input type="submit" value="DELETE"/>

            </form>
{/* ------------------------- */}
          </div>
        );
      })}
    </div>
  );
}

export default Index;
