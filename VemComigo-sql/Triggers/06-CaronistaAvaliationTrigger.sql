CREATE OR REPLACE FUNCTION AtualizarMediaCaronista()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
	-- Atualiza a média de notas do Caronista
	UPDATE Caronista
	SET MediaNotaCaronista = (
		SELECT AVG(Nota)
		FROM Avalia
		WHERE IDCaronista = NEW.IDCaronista
	)
	WHERE IDUsuario = NEW.IDCaronista;
	RETURN NEW;
END;
$$;

CREATE TRIGGER Trg_AtualizarMediaCaronista
AFTER INSERT ON Avalia
FOR EACH ROW
WHEN (NEW.IDCaronista IS NOT NULL)
EXECUTE FUNCTION AtualizarMediaCaronista();

