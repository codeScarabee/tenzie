import React from "react";

export default function Die(props) {
  const styles = {
    color: props.isHeld ? "rgb(4, 164, 68)" : "#000",
  };
  return (
    <div className="die" onClick={props.handleclick}>
      <i className={`fa-solid fa-dice-${props.value}`} style={styles}></i>
    </div>
  );
}
