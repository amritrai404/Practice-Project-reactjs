"use client";
import React from "react";
import Card from "./Card";

const Foreground = () => {
  return (
    <div className="absolute p-2 flex flex-col sm:flex-row gap-8 sm:gap-4">
      <Card />

      <Card
        text="Success demands discipline, consistent effort, clear goals, smart strategies, positive mindset, and the courage to face every challenge boldly."
        showButton={true}
        buttonColor="bg-blue-600"
      />

      <Card
        text="Le succès exige de la discipline, des efforts constants, des objectifs clairs, une stratégie précise et du courage face aux défis."
        showButton={false}
      />

      <Card
        text="Успех требует дисциплины, постоянных усилий, чётких целей, умной стратегии, позитивного мышления и смелости перед лицом трудностей."
        showButton={true}
        buttonColor="bg-red-700"
      />
    </div>
  );
};

export default Foreground;
