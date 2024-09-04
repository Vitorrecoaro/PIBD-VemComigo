-- Guilherme dos Santos Wisniewski
CREATE OR REPLACE FUNCTION PreventLateUpdate()
  RETURNS TRIGGER AS $BODY$
  BEGIN
    if (CURRENT_TIMESTAMP - TO_TIMESTAMP(OLD.TimeStampEnvio, 'YYYY-MM-DD HH24:MI:SS')) > INTERVAL '5 minutes' THEN
    RAISE EXCEPTION 'Não é possível atualisar';
    ELSE
    	OLD.TimeStampUltimaEdicao := CURRENT_TIMESTAMP;
    END IF;
  RETURN NEW;
  END;
$BODY$ LANGUAGE plpgsql;