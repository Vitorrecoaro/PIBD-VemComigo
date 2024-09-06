CREATE OR REPLACE VIEW VeiculoView AS
SELECT 
    u.IDUsuario AS MotoristaID,
    u.Nome AS NomeMotorista,
    v.RENAVAM,
    v.Modelo,
    v.Tipo,
    v.Cor,
    v.TamanhoPortaMalas,
    v.Placa,
    v.Ano,
    cv.RelacaoComProprietario
FROM 
    Usuario u
INNER JOIN 
    Caronista c ON u.IDUsuario = c.IDUsuario
INNER JOIN 
    CaronistaVeiculo cv ON c.IDUsuario = cv.IDUsuario
INNER JOIN 
    Veiculo v ON cv.RENAVAM = v.RENAVAM;
