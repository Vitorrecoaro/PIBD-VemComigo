CREATE TABLE
  Usuario (
    IDUsuario VARCHAR(50) PRIMARY KEY NOT NULL,
    DataNascimento DATE NOT NULL,
    Nome VARCHAR(50) NOT NULL,
    Foto BYTEA NOT NULL,
    Genero VARCHAR(30) NOT NULL,
    Email VARCHAR(255) UNIQUE NOT NULL,
    Nacionalidade BOOLEAN NOT NULL
  );

CREATE TABLE
  Telefone (
    IDUsuario VARCHAR(50) PRIMARY KEY NOT NULL,
    DDI VARCHAR(5),
    DDD VARCHAR(5),
    Prefixo VARCHAR(5),
    Numero VARCHAR(10),
    FOREIGN KEY (IDUsuario) REFERENCES Usuario (IDUsuario) ON DELETE CASCADE
  );

CREATE TABLE
  EnderecoUsuario (
    IDUsuario VARCHAR(50) PRIMARY KEY NOT NULL,
    Logradouro VARCHAR(255),
    Numero VARCHAR(10),
    Bairro VARCHAR(100),
    CEP VARCHAR(20),
    Complemento VARCHAR(255),
    FOREIGN KEY (IDUsuario) REFERENCES Usuario (IDUsuario) ON DELETE CASCADE
  );

CREATE TABLE
  Brasileiro (
    CPF VARCHAR(14) PRIMARY KEY NOT NULL,
    IDUsuario VARCHAR(50) NOT NULL,
    FOREIGN KEY (IDUsuario) REFERENCES Usuario (IDUsuario) ON DELETE CASCADE
  );

CREATE TABLE
  Estrangeiro (
    IDEstrangeiro VARCHAR(50) PRIMARY KEY NOT NULL,
    IDUsuario VARCHAR(50) NOT NULL,
    Codigo VARCHAR(50) NOT NULL,
    Validade DATE NOT NULL,
    FOREIGN KEY (IDUsuario) REFERENCES Usuario (IDUsuario) ON DELETE CASCADE
  );

CREATE TABLE
  Caronista (
    IDUsuario VARCHAR(50) PRIMARY KEY NOT NULL,
    CNH varchar(50) NOT NULL,
    QtdViagens INT NOT NULL,
    MediaNotaCaronista INT,
    FOREIGN KEY (IDUsuario) REFERENCES Usuario (IDUsuario) ON DELETE CASCADE
  );

CREATE TABLE
  Caroneiro (
    IDUsuario VARCHAR(50) PRIMARY KEY NOT NULL,
    QtdViagens INT NOT NULL,
    MediaNotaCaroneiro INT,
    FOREIGN KEY (IDUsuario) REFERENCES Usuario (IDUsuario) ON DELETE CASCADE
  );

CREATE TABLE
  Veiculo (
    RENAVAM VARCHAR(50) PRIMARY KEY NOT NULL,
    Modelo VARCHAR(50) NOT NULL,
    Tipo VARCHAR(50) NOT NULL,
    Cor VARCHAR(50) NOT NULL,
    TamanhoPortaMalas VARCHAR(50) NOT NULL,
    Placa VARCHAR(50) NOT NULL,
    Ano INT NOT NULL,
    Proprietario VARCHAR(50),
    RelacaoComProprietario VARCHAR(50)
  );

CREATE TABLE
  CaronistaVeiculo (
    IDUsuario VARCHAR(50) NOT NULL,
    RENAVAM VARCHAR(50) NOT NULL,
    CONSTRAINT IDCaronistaVeiculo PRIMARY KEY (IDUsuario, RENAVAM),
    FOREIGN KEY (IDUsuario) REFERENCES Usuario (IDUsuario) ON DELETE CASCADE,
    FOREIGN KEY (RENAVAM) REFERENCES Veiculo (RENAVAM) ON DELETE CASCADE
  );

CREATE TABLE
  Carona (
    IDCarona VARCHAR(50) PRIMARY KEY NOT NULL, -- Surrogate
    DataCarona VARCHAR(8) NOT NULL,
    HoraInicio TIME NOT NULL,
    HoraFim TIME NOT NULL,
    PontoInicialLatitude NUMERIC(9, 6) NOT NULL,
    PontoInicialLongitude NUMERIC(9, 6) NOT NULL,
    PontoFinalLatitude NUMERIC(9, 6) NOT NULL,
    PontoFinalLongitude NUMERIC(9, 6) NOT NULL,
    DuracaoEstimada TIME NOT NULL,
    VagasTotais INTEGER NOT NULL,
    PrecoTotal INTEGER NOT NULL,
    Pets BOOLEAN NOT NULL,
    Fumantes BOOLEAN NOT NULL,
    ArCondicionado BOOLEAN NOT NULL,
    IDUsuario VARCHAR(50) NOT NULL,
    RENAVAM VARCHAR(50) NOT NULL,
    IDCaronistaVeiculo VARCHAR(100) GENERATED ALWAYS AS (IDUsuario || '-' || RENAVAM) STORED,
    FOREIGN KEY (IDUsuario, RENAVAM) REFERENCES CaronistaVeiculo (IDUsuario, RENAVAM) ON DELETE CASCADE
  );

CREATE TABLE
  PontoIntermediario (
    IDCarona VARCHAR(255) NOT NULL,
    Latitude NUMERIC(9, 6) NOT NULL,
    Longitude NUMERIC(9, 6) NOT NULL,
    HoraEncontroEstimado TIME NOT NULL,
    CEP VARCHAR(50) NOT NULL,
    Pais VARCHAR(50) NOT NULL,
    Complemento VARCHAR(100),
    Cidade VARCHAR(50) NOT NULL,
    Bairro VARCHAR(50) NOT NULL,
    Numero INTEGER NOT NULL,
    IDPonto TEXT GENERATED ALWAYS AS (
      IDCarona || '' || Latitude || '' || Longitude || '' || HoraEncontroEstimado::TEXT
    ) STORED,
    FOREIGN KEY (IDCarona) REFERENCES Carona (IDCarona) ON DELETE CASCADE
  );

CREATE TABLE
  Comunica (
    IDRemetente VARCHAR(50) NOT NULL,
    IDDestinatario VARCHAR(50) NOT NULL,
    TimeStampEnvio VARCHAR(24) NOT NULL,
    TextoMensagem VARCHAR(255) NOT NULL,
    IDComunica TEXT GENERATED ALWAYS AS (
      IDRemetente || '' || IDDestinatario || '' || TimeStampEnvio::TEXT
    ) STORED,
    FOREIGN KEY (IDRemetente) REFERENCES Usuario (IDUsuario) ON DELETE CASCADE,
    FOREIGN KEY (IDDestinatario) REFERENCES Usuario (IDUsuario) ON DELETE CASCADE
  );

CREATE TABLE
  Avalia (
    IDCaroneiro VARCHAR(50) NOT NULL,
    IDCaronista VARCHAR(50) NOT NULL,
    IDCarona VARCHAR(255) NOT NULL,
    DataAvalia DATE NOT NULL,
    Hora TIME NOT NULL,
    Descricao VARCHAR(255) NOT NULL,
    Nota INT NOT NULL,
    IDAvalia TEXT GENERATED ALWAYS AS (
      IDCaroneiro || '' || IDCaronista || '' || IDCarona::TEXT
    ) STORED,
    FOREIGN KEY (IDCaroneiro) REFERENCES Usuario (IDUsuario) ON DELETE CASCADE,
    FOREIGN KEY (IDCaronista) REFERENCES Usuario (IDUsuario) ON DELETE CASCADE,
    FOREIGN KEY (IDCarona) REFERENCES Carona (IDCarona) ON DELETE CASCADE
  );

CREATE TABLE
  Solicitacao (
    IDCaronista VARCHAR(50) NOT NULL,
    IDCaroneiro VARCHAR(50) NOT NULL,
    TimeStampSolicitacao VARCHAR(27) NOT NULL,
    IDSolicitacao TEXT GENERATED ALWAYS AS (
      IDCAronista || '' || IDCaroneiro || '' || TimeStampSolicitacao::TEXT
    ) STORED,
    FOREIGN KEY (IDCaronista) REFERENCES Usuario (IDUsuario) ON DELETE CASCADE,
    FOREIGN KEY (IDCaroneiro) REFERENCES Usuario (IDUsuario) ON DELETE CASCADE
  );