import React, { useEffect, useState } from "react";
import {getAlltrainers}from "../services/allAPI.js"
import { yellow } from "@mui/material/colors";

function Trainers() {
 const [trainer,setTrainer]= useState([])
 useEffect(()=>{
  const loadTrainers=async()=>{
    const result=await getAlltrainers()
    // console.log(result);
    setTrainer(result.data)
    
  }
  loadTrainers()

 },[])
  return (
    <div
      style={{
        padding: "40px",
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <style>
        {`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .trainer-img:hover {
            transform: scale(1.08);
          }
        `}
      </style>

      {trainer.map((trainer, index) => (
        <div className="mt-5"
          key={index}
          style={{
            width: "300px",
            height: "550px",
            backgroundColor: "#111",
            borderRadius: "12px",
            overflow: "hidden",
            color: "white",
            textAlign: "center",
            opacity: 0,
            animation: `fadeUp 0.7s ${index * 0.2}s forwards`,
            boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
          }}
        >
          <img
            src={trainer?.image}
            alt={trainer?.name}
            className="trainer-img"
            style={{
              width: "100%",
              height: "50%",
              objectFit: "cover",
              transition: "0.4s",
            }}
          />
          <h4 className="text-warning" style={{ marginTop: 10}}>{trainer?.name}</h4>
          <h5>Experience : {trainer?.experience}</h5>
          <p className="p-3">Specialization : {trainer?.specialization}</p>
          <p style={{textAlign:'justify'}} className="mx-5 text-warning test-justify">{trainer?.about}</p>

        </div>
      ))}
    </div>
  );
}

export default Trainers;
