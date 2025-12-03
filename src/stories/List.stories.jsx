import React from "react";
import List from "../components/List";
import peliculas from "../data/peliculas";

export default {
title: "Components/List",
component: List,
parameters: {
    layout: 'centered',
  },
  // tags:['autodocs'],
};

export const Default = {
  args: {
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Gerard_Butler_%2829681162176%29.jpg/330px-Gerard_Butler_%2829681162176%29.jpg",
    nombre: "Fernando Rodríguez",
    esNota10: false,
    children: <div>Descripción del actor desconocido.</div>,
  },
};  


export const BruceWillis = () => {
const pelicula = peliculas[0];
const actor = pelicula.actores[0];

return ( <List foto={actor.imagen} nombre={actor.nombre} esNota10={pelicula.nota >= 9}> <div> <p><strong>Fecha de nacimiento:</strong> {actor.fechaNacimiento}</p> <p>{actor.biografia}</p> </div>

  <div className="mt-4">
    <p><strong>Película destacada:</strong> {pelicula.nombre} ({pelicula.clasificacion})</p>
    <p><strong>Recaudación:</strong> {pelicula.recaudacion}</p>
    <img
      src={pelicula.cartelera}
      alt={`Cartel de ${pelicula.nombre}`}
      className="w-full mt-2 rounded-md shadow-sm"
    />
  </div>
</List>

);
};

export const TomHanks = () => {
const pelicula = peliculas[4];
const actor = pelicula.actores[0];

return ( <List foto={actor.imagen} nombre={actor.nombre} esNota10={pelicula.nota >= 9}> <div> <p><strong>Fecha de nacimiento:</strong> {actor.fechaNacimiento}</p> <p>{actor.biografia}</p> </div>

  <div className="mt-4">
    <p><strong>Película destacada:</strong> {pelicula.nombre} ({pelicula.clasificacion})</p>
    <p><strong>Recaudación:</strong> {pelicula.recaudacion}</p>
    <img
      src={pelicula.cartelera}
      alt={`Cartel de ${pelicula.nombre}`}
      className="w-full mt-2 rounded-md shadow-sm"
    />
  </div>
</List>

);
};

export const JodieFoster = () => {
const pelicula = peliculas[3];
const actor = pelicula.actores[0];

return ( <List foto={actor.imagen} nombre={actor.nombre} esNota10={pelicula.nota >= 9}> <div> <p><strong>Fecha de nacimiento:</strong> {actor.fechaNacimiento}</p> <p>{actor.biografia}</p> </div>

  <div className="mt-4">
    <p><strong>Película destacada:</strong> {pelicula.nombre} ({pelicula.clasificacion})</p>
    <p><strong>Recaudación:</strong> {pelicula.recaudacion}</p>
    <img
      src={pelicula.cartelera}
      alt={`Cartel de ${pelicula.nombre}`}
      className="w-full mt-2 rounded-md shadow-sm"
    />
  </div>
</List>

);
};
