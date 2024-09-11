CREATE OR REPLACE FUNCTION trg_validate_email_func()
RETURNS TRIGGER AS $$
BEGIN
	-- Verifica se o e-mail contém o símbilo "@"
	IF POSITION('@' IN NEW.Email) = 0 THEN RAISE EXCEPTION 'Email inválido: %', NEW.Email;
	END IF;

	-- Verica formato do e-mail
	IF NOT NEW.Email ~ '^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$' THEN
		RAISE EXCEPTION 'Formato de e-mail inválido. Use apenas letras minúsculas, números, ponto, hífen e sublinhado.';

	END IF;

	IF EXISTS (SELECT 1 FROM usuario WHERE email = NEW.Email) THEN
		RAIZE EXCEPTION 'E-mail já cadastrado!';
	END IF;

	RETURN NEW;
END;
$$ LANGUAGE plqgsql;

CREATE TRIGGER trg_validate_email
BEFORE INSERT OR UPDATE ON usuario
FOR EACH ROW EXECUTE FUNCTION trg_validate_email_func();
