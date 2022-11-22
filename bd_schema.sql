CREATE SCHEMA IF NOT EXISTS `SistemaBancario` DEFAULT CHARACTER SET utf8;

USE `SistemaBancario`;

-- -----------------------------------------------------
-- Table `SistemaBancario`.`Agencia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SistemaBancario`.`Agencia` (
    `agencia` INT NOT NULL,
    `telefone` INT NULL,
    `endereço` VARCHAR(45) NULL,
    `Login_agencia_num` INT NOT NULL,
    `id` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`agencia`)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `SistemaBancario`.`Depósito`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SistemaBancario`.`Depósito` (
    `agencia` INT NOT NULL,
    `num_conta` INT NOT NULL,
    `nome` VARCHAR(45) NOT NULL,
    `CPF` INT NOT NULL,
    PRIMARY KEY (`agencia`)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `SistemaBancario`.`Saque`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SistemaBancario`.`Saque` (
    `num_conta` INT NOT NULL,
    `senha_conta` INT NOT NULL,
    PRIMARY KEY (`num_conta`)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `SistemaBancario`.`Conta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SistemaBancario`.`Conta` (
    `num_conta` INT NOT NULL,
    `senha_conta` INT NOT NULL,
    `saldo` INT NOT NULL,
    `Agencia_agencia` INT NOT NULL,
    `id` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`num_conta`, `id`),
    INDEX `fk_Conta_Agencia1_idx` (`Agencia_agencia` ASC) VISIBLE,
    CONSTRAINT `fk_Conta_Agencia1` FOREIGN KEY (`Agencia_agencia`) REFERENCES `SistemaBancario`.`Agencia` (`agencia`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `SistemaBancario`.`Login`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SistemaBancario`.`Login` (
    `agencia_num` INT NOT NULL,
    `senha_login` INT NOT NULL,
    `Conta_num_conta1` INT NOT NULL,
    PRIMARY KEY (`agencia_num`, `Conta_num_conta1`),
    INDEX `fk_Agencia_Login_idx` (`agencia_num` ASC) VISIBLE,
    INDEX `fk_Login_Conta2_idx` (`Conta_num_conta1` ASC) VISIBLE,
    CONSTRAINT `fk_Login_Conta2` FOREIGN KEY (`Conta_num_conta1`) REFERENCES `SistemaBancario`.`Conta` (`num_conta`) ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT `fk_Agencia_Login` FOREIGN KEY (`agencia_num`) REFERENCES `SistemaBancario`.`Agencia` (`agencia`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `SistemaBancario`.`Titular`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SistemaBancario`.`Titular` (
    `nome` VARCHAR(45) CHARACTER SET 'cp1256' NOT NULL,
    `endereço` VARCHAR(45) NOT NULL,
    `Conta_num_conta` INT NOT NULL,
    `id` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`nome`, `id`),
    INDEX `fk_Titular_Conta1_idx` (`Conta_num_conta` ASC) VISIBLE,
    CONSTRAINT `fk_Titular_Conta1` FOREIGN KEY (`Conta_num_conta`) REFERENCES `SistemaBancario`.`Conta` (`num_conta`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `SistemaBancario`.`Transação`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SistemaBancario`.`Transação` (
    `id_titular` INT NULL,
    `id` VARCHAR(255) NOT NULL,
    `titular_nome` VARCHAR(45) NOT NULL,
    `Depósito_agencia` INT NOT NULL,
    `Saque_num_conta` INT NOT NULL,
    PRIMARY KEY (`id`),
    INDEX `fk_Transação_Titular1_idx` (`titular_nome` ASC) VISIBLE,
    INDEX `fk_Transação_Depósito1_idx` (`Depósito_agencia` ASC) VISIBLE,
    INDEX `fk_Transação_Saque1_idx` (`Saque_num_conta` ASC) VISIBLE,
    CONSTRAINT `fk_Transação_Depósito1` FOREIGN KEY (`Depósito_agencia`) REFERENCES `SistemaBancario`.`Depósito` (`agencia`) ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT `fk_Transação_Saque1` FOREIGN KEY (`Saque_num_conta`) REFERENCES `SistemaBancario`.`Saque` (`num_conta`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB;