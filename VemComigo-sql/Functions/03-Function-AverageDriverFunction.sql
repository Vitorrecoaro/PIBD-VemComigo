CREATE OR REPLACE FUNCTION AverageDriverFunction(p_idusuario VARCHAR(50))
RETURNS NUMERIC AS $$
DECLARE
    media_avaliacao NUMERIC;
BEGIN
    -- Calcular a média das avaliações como motorista (caronista)
    SELECT AVG(Nota)
    INTO media_avaliacao
    FROM Avalia
    WHERE IDCaronista = p_idusuario;

    -- Retornar a média, ou NULL se não houver avaliações
    RETURN media_avaliacao;
END;
$$ LANGUAGE plpgsql;
