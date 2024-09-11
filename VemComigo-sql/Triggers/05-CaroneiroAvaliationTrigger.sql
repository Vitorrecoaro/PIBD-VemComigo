CREATE OR REPLACE FUNCTION AtualizarMediaCaroneiro()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
	-- Atualiza a média de notas do Caroneiro
	UPDATE Caroneiro
	SET MediaNotaCaroneiro = (
		SELECT AVG(Nota)
		FROM Avalia
		WHERE IDCaroneiro = NEW.IDCaroneiro
	)
	WHERE IDUsuario = NEW.IDCaroneiro;
	RETURN NEW;
END;
$$;

CREATE TRIGGER Trg_AtualizarMediaCaroneiro
AFTER INSERT ON Avalia
FOR EACH ROW
WHEN (NEW.IDCaroneiro IS NOT NULL)
EXECUTE FUNCTION AtualizarMediaCaroneiro();
