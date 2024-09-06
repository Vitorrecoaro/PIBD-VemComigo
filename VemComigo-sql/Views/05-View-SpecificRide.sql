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
    s.IDCaronista AS IDPassageiro -- ID do caronista passageiro
FROM
    Carona c
LEFT JOIN
    CaronistaVeiculo cv ON c.IDUsuario = cv.IDUsuario
LEFT JOIN
    Solicitacao s ON c.IDCarona = s.IDSolicitacao
WHERE
    (c.IDUsuario = s.IDCaronista OR s.IDCaroneiro = c.IDUsuario)
    AND c.IDCarona = 'especifico-id-da-carona'; -- Filtra a carona específica