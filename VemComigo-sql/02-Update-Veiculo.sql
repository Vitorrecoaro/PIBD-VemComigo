-- Update Veiculo table to remove tracking about who is the owner
-- and relation of the user with the owner.
ALTER TABLE
  veiculo
DROP COLUMN IF EXISTS
  proprietario,
DROP COLUMN IF EXISTS
  relacaocomproprietario;