CREATE OR REPLACE VIEW ViewCaronas AS
SELECT 
    c.IDCarona,
    c.DataCarona,
    c.HoraInicio,
    c.HoraFim,
    c.PontoInicialLatitude,
    c.PontoInicialLongitude,
    c.PontoFinalLatitude,
    c.PontoFinalLongitude,
    c.DuracaoEstimada,
    c.VagasTotais,
    c.PrecoTotal,
    c.Pets,
    c.Fumantes,
    c.ArCondicionado,
    u.Nome AS NomeCaronista,
    v.Modelo AS ModeloVeiculo,
    v.Placa AS PlacaVeiculo,
    v.Cor AS CorVeiculo
FROM 
    Carona c
INNER JOIN 
    Usuario u ON c.IDUsuario = u.IDUsuario
INNER JOIN 
    Caronista ca ON u.IDUsuario = ca.IDUsuario
INNER JOIN 
    Veiculo v ON c.RENAVAM = v.RENAVAM;
