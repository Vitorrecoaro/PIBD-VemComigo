-- Guilherme dos Santos Wisniewski
Create TRIGGER EditMessageTrigger
  BEFORE UPDATE OR DELETE ON comunica FOR EACH ROW
  WHEN(OLD.TimeStampEnvio IS NOT NULL)
  EXECUTE FUNCTION PreventLateUpdate();