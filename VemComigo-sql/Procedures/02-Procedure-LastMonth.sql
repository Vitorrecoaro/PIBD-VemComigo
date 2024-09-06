CREATE OR REPLACE PROCEDURE LastMonthProcedure()
LANGUAGE plpgsql
AS $$
BEGIN
    -- Filtrar caronas da view para o último mês
    SELECT *
    FROM AllRidesView
    WHERE TO_DATE(DataCarona, 'YYYYMMDD') >= (CURRENT_DATE - INTERVAL '1 month')
    AND TO_DATE(DataCarona, 'YYYYMMDD') < CURRENT_DATE;
END;
$$;