 -- Create a procedure for create car and the owner is the current user.
CREATE
OR REPLACE PROCEDURE CreateCarProcedure (
  Renavam varchar(50),
  CarModel varchar(50),
  CarType varchar(50),
  Color varchar(50),
  TrunkSize varchar(50),
  CarSign varchar(50),
  CarYear INT
) LANGUAGE SQL AS $$
INSERT INTO
  veiculo (
    renavam,
    modelo,
    tipo,
    cor,
    tamanhoportamalas,
    placa,
    ano )
VALUES
  (
    Renavam,
    CarModel,
    CarType,
    Color,
    TrunkSize,
    CarSign,
    CarYear
  );$$;