CREATE OR REPLACE VIEW RideView AS
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
    c.IDUsuario AS IDMotorista,
    cv.IDUsuario AS IDPassageiro
FROM
    Carona c
LEFT JOIN
    CaronistaVeiculo cv ON c.IDUsuario = cv.IDUsuario
LEFT JOIN
    Solicitacao s ON c.IDCarona = s.IDSolicitacao
WHERE
    c.IDUsuario = s.IDCaronista -- O usuário é o motorista
    OR c.IDUsuario = s.IDCaroneiro; -- O usuário é o passageiro
