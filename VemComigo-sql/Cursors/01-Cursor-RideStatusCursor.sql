DO $$
DECLARE
	carona_cursor CURSOR FOR
		SELECT IDCarona, DataCarona, HoraInicio, HoraFim
		FROM Carona;
	v_IDCarona VARCHAR(50);
	v_DataCarona VARCHAR(8);
	v_HoraInicio TIME;
	v_HoraFim TIME;
	v_Status VARCHAR(50);
BEGIN
	OPEN carona_cursor;
	FETCH NEXT FROM carona_cursor INTO v_IDCarona, v_DataCarona, v_HoraInicio, v_HoraFim;

	WHILE FOUND LOOP
		IF v_DataCarona::DATE > CURRENT_DATE THEN
			v_Status := 'Futura';
		ELSIF v_DataCarona::DATE = CURRENT_DATE AND v_HoraInicio > CURRENT_TIME THEN
			v_Status := 'Em breve';
		ELSIF v_DataCarona::DATE = CURRENT_DATE AND v_HoraInicio <= CURRENT_TIME AND v_HoraFim >= CURRENT_TIME THEN
			v_Status := 'Em andamento';
		ELSE
			v_Status := 'Concluída';
		END IF;

		-- Inserir os resultados em uma tabela de log para verificar depois
		INSERT INTO LogCaronaStatus (IDCarona, Status)
		VALUES (v_IDCarona, v_Status);
		FETCH NEXT FROM carona_cursor INTO v_IDCarona, v_DataCarona, v_HoraInicio, v_HoraFim;
	END LOOP;

	CLOSE carona_cursor;

END $$;
