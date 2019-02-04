-- Activation de la BD créée 
USE ecf;


-- Création de la table article

DROP TABLE IF EXISTS villes;

CREATE TABLE villes (
    id INT UNSIGNED AUTO_INCREMENT,
	ville VARCHAR(50) NOT NULL,
    pays VARCHAR (50) NOT NULL,
	continent VARCHAR (30) NOT NULL,
    population INT NOT NULL,
    PRIMARY KEY(id)
);    

-- Insertion des données
INSERT INTO villes (ville, pays, continent, population)
VALUES 
('Paris', 'France', 'Europe', 45000),
('Tokyo', 'Japon', 'Asie', 150000),
('Melbourne', 'Australie', 'Océanie', 30000),
('Dakar', 'Sénégal', 'Afrique', 25000),
('Chicago', 'Etats_Unis','Amérique_du_Nord', 40000),
('Londres', 'Angleterre', 'Europe', 450000),
('Mexico', 'Mexique', 'Amérique_du_Sud', 60000);
