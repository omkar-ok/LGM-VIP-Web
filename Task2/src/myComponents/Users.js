import React from "react";
import { UserCard } from "./UserCard";
import Loader from "react-loader-spinner";

export const Users = (params) => {
  
  return (
    <>
      {params.isLoading ? ( //Checkif if is loading
        <div style={{width:"100%", textAlign:'center', marginTop: "35vh"}}>
          <Loader type="TailSpin" color="#00BFFF" height={120} width={120} />
        </div>
      ) : (
        <div className="row text-center justify-content-evenly" style={{width:"100%"}}>
          {params.data.map((user) => {
            return <UserCard key={user.id} useralld={user} />;
          })}
        </div>
      )}
    </>
  );
};
