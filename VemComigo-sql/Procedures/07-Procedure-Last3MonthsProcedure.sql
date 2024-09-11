CREATE OR REPLACE PROCEDURE Last3MonthsProcedure(pIDUsuario VARCHAR)
RETURNS TABLE (
    IDCarona VARCHAR,
    DataCarona DATE,
    HoraInicio TIME,
    HoraFim TIME,
    PontoInicialLatitude NUMERIC,
    PontoInicialLongitude NUMERIC,
    PontoFinalLatitude NUMERIC,
    PontoFinalLongitude NUMERIC,
    DuracaoEstimada TIME,
    VagasTotais INTEGER,
    PrecoTotal INTEGER,
    Pets BOOLEAN,
    Fumantes BOOLEAN,
    ArCondicionado BOOLEAN
) AS $$
BEGIN
    RETURN QUERY
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
        c.ArCondicionado
    FROM 
        Carona c
    WHERE 
        c.IDUsuario = pIDUsuario
        AND c.DataCarona >= CURRENT_DATE - INTERVAL '3 MONTH'
    ORDER BY 
        c.DataCarona DESC;
END;
$$ LANGUAGE plpgsql;
