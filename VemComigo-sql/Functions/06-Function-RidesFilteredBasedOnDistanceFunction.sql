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
        r.pontoiniciallatitude,
        r.pontoiniciallongitude,
        r.idcarona
      ) 
      AND 
      ridehaspointsearchedfunction(
        r.pontofinallatitude, 
        r.pontofinallongitude, 
        r.idcarona
      )
    ) ;
END;
$$ LANGUAGE plpgsql;