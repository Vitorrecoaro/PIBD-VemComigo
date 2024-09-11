CREATE OR REPLACE PROCEDURE AvaliarCaroneiro(
	p_IDCaronista VARCHAR(50),
	p_IDCaroneiro VARCHAR(50),
	p_IDCarona VARCHAR(255),
	p_Descricao VARCHAR(255),
	p_Nota INT
)
LANGUAGE plpgsql
AS $$
BEGIN
	-- Insere a avaliação na tabela Avalia
	INSERT INTO Avalia (IDCaroneiro, IDCaronista, IDCarona, DataAvalia, Hora, Descricao, Nota)

	VALUES (p_IDCaroneiro, p_IDCaronista, p_IDCarona, CURRENT_DATE, CURRENT_TIME, p_Descricao, p_Nota);

END;
$$;

