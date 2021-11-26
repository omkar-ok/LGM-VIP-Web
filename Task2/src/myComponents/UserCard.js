import { React } from "react";

export const UserCard = (props) => {
  let style = {
    width: "fit-content",
    minWidth: "200px",
    height: "fit-content"
  }
  return (
      <div className="col-2 container border border-primary m-4" style={style}>
        <hr />
        <img src={props.useralld.avatar} alt="img" />
        <p>
          <strong>{props.useralld.first_name} {props.useralld.last_name}</strong>
        </p>
        <p>{props.useralld.email}</p>
        <hr />
      </div>
  );
};
