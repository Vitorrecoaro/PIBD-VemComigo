-- ARTEFATO: validCNHTrigger usada para impedir de inserir caronas com motoristas que estao com a cnh vencida
-- (Obs: Executar os exemplos do 01-Procedure-SendMessage antes para exemplificar o correto funcionamento do validCNHTrigger)

CREATE OR REPLACE FUNCTION validCNHTrigger()
RETURNS TRIGGER AS $$
BEGIN
    -- Verificar se a CNH é válida
    IF EXISTS (
        SELECT 1
        FROM Caronista
        WHERE IDUsuario = NEW.IDUsuario
        AND TO_DATE(ValidadeCNH, 'YYYY-MM-DD') < CURRENT_DATE
    ) THEN
        RAISE EXCEPTION 'Inserção inválida: A CNH do caronista está expirada';
    END IF;

    -- Se a CNH não está expirada, continuar com a inserção
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER validCNHTrigger_before_insert
BEFORE INSERT ON Carona
FOR EACH ROW
EXECUTE FUNCTION validCNHTrigger();

-- Exemplo para mostrar que se a CNH for valida ele consegue criar, mas se for invalida ele da erro:
--OBS: Os users 001 e 003 foram criados no 01-Procedure-SendMessage
-- Inserindo um caronista com CNH válida
INSERT INTO Caronista (IDUsuario, CNH, ValidadeCNH, QtdViagens, MediaNotaCaronista)
VALUES ('001', 'CNH123456', '2025-12-31', 10, 5);
-- Inserindo um caronista com CNH vencida
INSERT INTO Caronista (IDUsuario, CNH, ValidadeCNH, QtdViagens, MediaNotaCaronista)
VALUES ('003', 'CNH654321', '2022-01-01', 5, 4);
SELECT * FROM caronista;

-- Inserindo veículo para 001
INSERT INTO Veiculo (RENAVAM, Modelo, Tipo, Cor, TamanhoPortaMalas, Placa, Ano, Proprietario, RelacaoComProprietario)
VALUES ('RENAVAM123', 'Fiat Uno', 'Hatchback', 'Branco', 'Pequeno', 'ABC1234', 2018, 'user1', 'Proprietário');
-- Inserindo veículo para 003
INSERT INTO Veiculo (RENAVAM, Modelo, Tipo, Cor, TamanhoPortaMalas, Placa, Ano, Proprietario, RelacaoComProprietario)
VALUES ('RENAVAM456', 'Toyota Corolla', 'Sedan', 'Preto', 'Médio', 'XYZ5678', 2020, 'user2', 'Proprietário');
SELECT * FROM Veiculo;

-- Associando veículo RENAVAM123 ao caronista 001
INSERT INTO CaronistaVeiculo (IDUsuario, RENAVAM)
VALUES ('001', 'RENAVAM123');
-- Associando veículo RENAVAM456 ao caronista 003
INSERT INTO CaronistaVeiculo (IDUsuario, RENAVAM)
VALUES ('003', 'RENAVAM456');
SELECT * FROM caronistaveiculo;


-- Tentativa de inserção de carona para um caronista com CNH válida (001)
INSERT INTO Carona (IDCarona, DataCarona, HoraInicio, HoraFim, PontoInicialLatitude, PontoInicialLongitude,
                    PontoFinalLatitude, PontoFinalLongitude, DuracaoEstimada, VagasTotais, PrecoTotal,
                    Pets, Fumantes, ArCondicionado, IDUsuario, RENAVAM)
VALUES ('carona1', '20240901', '08:00:00', '09:00:00', -23.550520, -46.633308, -23.573052, -46.641550,
        '01:00:00', 4, 50, FALSE, FALSE, TRUE, '001', 'RENAVAM123');

SELECT * FROM Carona; -- Saída esperada: Sucesso na inserção porque a CNH é válida.

-- Tentativa de inserção de carona para um caronista com CNH vencida (003)
INSERT INTO Carona (IDCarona, DataCarona, HoraInicio, HoraFim, PontoInicialLatitude, PontoInicialLongitude,
                    PontoFinalLatitude, PontoFinalLongitude, DuracaoEstimada, VagasTotais, PrecoTotal,
                    Pets, Fumantes, ArCondicionado, IDUsuario, RENAVAM)
VALUES ('carona2', '20240901', '10:00:00', '11:00:00', -23.550520, -46.633308, -23.573052, -46.641550,
        '01:00:00', 3, 40, TRUE, TRUE, FALSE, '003', 'RENAVAM456');

SELECT * FROM Carona; -- Saída esperada: Erro na inserção com a mensagem:
--                       ERRO: Inserção inválida: A CNH do caronista está expirada

-- Caso precise deletar o trigger:
--DROP TRIGGER validCNHTrigger_before_insert ON Carona;