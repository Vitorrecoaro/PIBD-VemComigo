 -- Script to update PontoIntermediario table.
ALTER TABLE
  pontointermediario
ADD COLUMN IF NOT EXISTS
  Logradouro VARCHAR(255),
ADD COLUMN IF NOT EXISTS
  TipoPonto INT;