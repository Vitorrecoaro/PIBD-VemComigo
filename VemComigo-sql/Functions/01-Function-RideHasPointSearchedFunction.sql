 -- This script creates a new function to 
-- verify if the ride, passed by paramter,
-- has some intermediary point that not exceeds
-- X kilometers from the intermediary point passed by parameter.
CREATE
OR REPLACE FUNCTION RideHasPointSearchedFunction (
  IN latitude NUMERIC(9, 6),
  IN longitude NUMERIC(9, 6),
  IN idCarona VARCHAR(50)
) RETURNS BOOL AS $$
DECLARE
    cursorPontosIntermediarios CURSOR FOR 
        SELECT geom FROM pontointermediario WHERE idcarona = idCarona;
    currentGeom geometry;
    maxDistance NUMERIC(9, 6) := 20000;
    distance NUMERIC(9,6);
BEGIN
    OPEN cursorPontosIntermediarios;

    LOOP
        FETCH NEXT FROM cursorPontosIntermediarios INTO currentGeom;
        EXIT WHEN NOT FOUND;

        distance := ST_Distance(ST_MakePoint(latitude, longitude)::geography, currentGeom);

        IF distance > maxDistance THEN
            RETURN TRUE;
        END IF;
    END LOOP;

    CLOSE cursorPontosIntermediarios;
    RETURN FALSE;
END;
$$ LANGUAGE plpgsql;