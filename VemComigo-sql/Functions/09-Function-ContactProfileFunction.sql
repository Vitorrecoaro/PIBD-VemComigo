
-- Guilherme dos Santos Wisniewski
CREATE OR REPLACE FUNCTION contactProfileFunction(IN p_IDUsuario VARCHAR(50))
RETURNS TABLE (Nome VARCHAR, Genero VARCHAR, Idade INT, Avaliacao NUMERIC)
LANGUAGE plpgsql
AS $$
BEGIN
    IF EXISTS (SELECT 1 FROM Caronista WHERE IDUsuario = p_IDUsuario) THEN
        RETURN QUERY
        SELECT 
            u.Nome,
            u.Genero,
            calculate_age(u.DataNascimento) AS Idade,
            c.MediaNotaCaronista AS Avaliacao
        FROM 
            Usuario u
        JOIN 
            Caronista c ON u.IDUsuario = c.IDUsuario
        WHERE 
            u.IDUsuario = p_IDUsuario;
    ELSIF EXISTS (SELECT 1 FROM Caroneiro WHERE IDUsuario = p_IDUsuario) THEN
        RETURN QUERY
        SELECT 
            u.Nome,
            u.Genero,
            calculate_age(u.DataNascimento) AS Idade,
            c.MediaNotaCaroneiro AS Avaliacao
        FROM 
            Usuario u
        JOIN 
            Caroneiro c ON u.IDUsuario = c.IDUsuario
        WHERE 
            u.IDUsuario = p_IDUsuario;
    ELSE
    	RETURN QUERY
        SELECT NULL::VARCHAR, NULL::VARCHAR, NULL::INT, NULL::NUMERIC
        WHERE FALSE;
        RAISE NOTICE 'Usuario não encontrado ou não é Caronista/Caroneiro';
    END IF;
END;
$$;