 -- View get available rides.
CREATE OR REPLACE VIEW
  RidesAvailableView AS
SELECT
  *
FROM
  carona
WHERE
  TO_DATE(carona.datacarona, 'YYYYMMDD') >= CURRENT_DATE;