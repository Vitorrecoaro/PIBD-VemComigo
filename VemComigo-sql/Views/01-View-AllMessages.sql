-- ARTEFATO: AllMessagesView usada para visualizar de modo generico as mensagens registradas, executar o 01-Procedure antes para ver melhor
-- (Obs: Executar os exemplos do 01-Procedure-SendMessage antes para exemplificar o correto funcionamento da view das mensagens)

-- View
CREATE OR REPLACE VIEW AllMessagesView AS
SELECT 
    c.IDRemetente,
    ur.Nome AS NomeRemetente,
    c.IDDestinatario,
    ud.Nome AS NomeDestinatario,
    c.TimeStampEnvio,
    c.TimeStampUltimaEdicao,
    c.TextoMensagem
FROM 
    Comunica c
JOIN 
    Usuario ur ON c.IDRemetente = ur.IDUsuario
JOIN 
    Usuario ud ON c.IDDestinatario = ud.IDUsuario;
    
-- Usando a View para pegar todas as mensagens
SELECT * FROM allmessagesview ORDER BY TimeStampEnvio DESC;

-- Usando a View para pegar uma mensagem especifica, (isso eh feito de modo mais elegante com o 02-Function-LastMessages)
SELECT * 
FROM AllMessagesView
WHERE idRemetente = '001'
AND idDestinatario = '002';