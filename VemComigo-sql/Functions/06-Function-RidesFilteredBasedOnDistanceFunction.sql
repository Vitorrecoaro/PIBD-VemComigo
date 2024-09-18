 -- This script creates a function that select
-- a ride that satisfies the conditions specified
-- on the RideHasPointSearchedFunction and returns 
-- all entries of rides.
CREATE
OR REPLACE FUNCTION RidesFilteredBasedOnDistanceFunction (
  IN latitudeInicio NUMERIC(9, 6),
  IN longitudeInicio NUMERIC(9, 6),
  IN longitudeFim NUMERIC(9, 6),
  IN latitudeFim NUMERIC(9, 6)
) RETURNS carona AS $$
BEGIN
    SELECT 
    	* 
    FROM ridesavailableview AS r 
    WHERE (
      ridehaspointsearchedfunction(
        latitudeInicio,
        longitudeInicio,
        r.idcarona
      ) 
      AND 
      ridehaspointsearchedfunction(
        latitudeFim, 
        longitudeFim, 
        r.idcarona
      )
    ) ;
END;
$$ LANGUAGE plpgsql;