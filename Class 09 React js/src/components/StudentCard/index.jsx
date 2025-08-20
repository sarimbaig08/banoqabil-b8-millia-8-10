import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const StudentCard = () => {
  const [user, setUser] = useState();

  const params = useParams();
  //   console.log(params.id);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/users/${params.id}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.log("error", err));
  }, [params.id]);

  return (
    <div>
      <h1>Student Card</h1>
      <h3>{user?.name?.firstname}</h3>
    </div>
  );
};

export default StudentCard;
