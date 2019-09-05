-- ¿Cuál es el jugador más viejo de cada equipo?
SELECT *
FROM (SELECT J.nombre AS Nombre,
      E.nombre AS Club,
      TIMESTAMPDIFF(YEAR, J.fecha_nacimiento, CURDATE()) AS Edad
	  FROM jugadores AS J
	  INNER JOIN equipos E on J.fk_equipos = E.id_equipos
	  ORDER BY J.fecha_nacimiento ASC) AS A
GROUP BY A.Club

-- ¿Cuántos partidos jugó de visitante cada equipo? (nota: hay equipos no jugaron ningún partido)
SELECT E.nombre AS Nombre,
       (SELECT COUNT(P.fk_equipo_visitante) FROM partidos P WHERE P.fk_equipo_visitante = E.id_equipos) AS Visitante_Jugados
FROM equipos E