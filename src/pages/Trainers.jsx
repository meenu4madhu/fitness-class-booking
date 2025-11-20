import React from "react";

function Trainers() {
  const trainers = [
    { name: "John Michael", img: "https://via.placeholder.com/400" },
    { name: "Angelina Cruz", img: "https://via.placeholder.com/400" },
    { name: "Michael Ray", img: "https://via.placeholder.com/400" },
    { name: "Sara Lena", img: "https://via.placeholder.com/400" },
  ];

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

      {trainers.map((trainer, index) => (
        <div className="mt-5"
          key={index}
          style={{
            width: "250px",
            height: "250px",
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
            src={trainer.img}
            alt={trainer.name}
            className="trainer-img"
            style={{
              width: "100%",
              height: "70%",
              objectFit: "cover",
              transition: "0.4s",
            }}
          />
          <h4 style={{ marginTop: 10 }}>{trainer.name}</h4>
          <h5>Experience : </h5>
          <p>Speciality : </p>
        </div>
      ))}
    </div>
  );
}

export default Trainers;
