CREATE OR REPLACE FUNCTION AveragePassengerFunction(pIDCaroneiro VARCHAR)
RETURNS NUMERIC AS $$
DECLARE
    avg_rating NUMERIC;
BEGIN
    SELECT 
        AVG(Nota)
    INTO 
        avg_rating
    FROM 
        Avalia
    WHERE 
        IDCaroneiro = pIDCaroneiro;

    RETURN COALESCE(avg_rating, 0); -- Retorna 0 se não houver avaliações
END;
$$ LANGUAGE plpgsql;
