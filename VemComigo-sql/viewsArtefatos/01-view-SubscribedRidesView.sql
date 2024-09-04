--Definição da view SubscribedRidesView
CREATE VIEW CaronasComCaronista AS
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
    c.IDUsuario
    cv.IDUsuario AS IDCaronista,       -- Caronista responsável pelo veículo
    c.RENAVAM,
FROM 
    Carona c
JOIN 
    CaronistaVeiculo cv ON c.IDCaronistaVeiculo = cv.IDCaronistaVeiculo;

-- Consultando a view caso eu esteja pegando carona
SELECT * FROM SubscribedRidesView WHERE IDCarona = '1';

-- Consultando a view caso eu esteja oferecendo carona
SELECT * FROM CaronasComCaronista WHERE IDCaronista = '1';

-- Consultando a view em ambos casos
SELECT * FROM CaronasComCaronista WHERE IDCaronista = '1' OR IDUsuarioCriador = '1';