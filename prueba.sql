-- MariaDB dump 10.19  Distrib 10.6.7-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: prueba
-- ------------------------------------------------------
-- Server version	10.6.7-MariaDB-2ubuntu1.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Assasins`
--

DROP TABLE IF EXISTS `Assasins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Assasins` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Enemigos` varchar(255) NOT NULL,
  `Armas` varchar(255) NOT NULL,
  `Armaduras` varchar(255) NOT NULL,
  `Nivel` int(2) NOT NULL,
  `Nivel_Recomendado` int(2) DEFAULT NULL,
  `Activo` char(1) NOT NULL,
  `Creado` timestamp NOT NULL DEFAULT current_timestamp(),
  `Modificado` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Assasins`
--

LOCK TABLES `Assasins` WRITE;
/*!40000 ALTER TABLE `Assasins` DISABLE KEYS */;
INSERT INTO `Assasins` VALUES (1,'Juana de arco','espada','peto',5,4,'N','2022-11-10 16:54:13','2022-11-11 16:23:49'),(2,'Carlo magno','Lanza','Acer0',20,18,'N','2022-11-10 19:53:45','2022-11-16 19:02:42'),(3,'Carlo magno','Lanza','Acer0',20,18,'S','2022-11-10 19:53:47','2022-11-10 19:53:47'),(4,'Carlo magno','Lanza','Acer0',20,18,'S','2022-11-10 19:55:23','2022-11-10 19:55:23'),(5,'Eduardo','arc','Acero',20,8,'S','2022-11-10 20:18:47','2022-11-15 18:56:02'),(6,'Eduardo','asd','asdasd',1,4,'S','2022-11-16 20:56:56','2022-11-16 20:56:56'),(7,'Eduardo','asd','asdasd',1,4,'S','2022-11-16 20:57:09','2022-11-16 20:57:09'),(8,'Eduardo','asd','asdasd',1,4,'N','2022-11-16 20:58:45','2022-11-16 20:58:45'),(9,'Eduard','asd','asdasd',1,4,'N','2022-11-16 20:59:13','2022-11-16 20:59:13');
/*!40000 ALTER TABLE `Assasins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Usuarios`
--

DROP TABLE IF EXISTS `Usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Usuarios` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Usuario` varchar(255) NOT NULL,
  `Nombre` varchar(255) NOT NULL,
  `Apellidos` varchar(255) NOT NULL,
  `Edad` int(3) NOT NULL,
  `Genero` char(1) DEFAULT NULL,
  `Contraseña` varchar(255) NOT NULL,
  `Fecha_nacimiento` date DEFAULT NULL,
  `Activo` char(1) NOT NULL,
  `Creado` timestamp NOT NULL DEFAULT current_timestamp(),
  `Modificado` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Usuarios`
--

LOCK TABLES `Usuarios` WRITE;
/*!40000 ALTER TABLE `Usuarios` DISABLE KEYS */;
INSERT INTO `Usuarios` VALUES (1,'eduardolopezurbano@gmail.com','Eduardo','Lopez Urbano',21,'M','1234','2000-11-10','N','2022-10-11 15:39:39','2022-10-24 15:42:00'),(2,'dani@gmail.com','Daniela','Ramon Feria',21,'F','1234','2001-07-27','N','2022-10-11 15:41:59','2022-10-24 15:47:31'),(3,'jose@gmail','jose','Manuel manrrique',20,'M','1234','2000-05-20','S','2022-10-25 15:49:12','2022-10-25 15:49:12'),(4,'jose@gmail.com','jose','Manuel manrrique',20,'M','1234','2000-05-20','S','2022-10-26 15:25:44','2022-10-26 15:25:44'),(5,'jose@gmail.com','jose','Manuel manrrique',20,'M','1234','2000-05-20','S','2022-10-26 15:27:23','2022-10-26 15:27:23'),(6,'jose@gmail.com','jose','Manuel manrrique',20,'M','1234','2000-05-20','S','2022-10-26 15:32:15','2022-10-26 15:32:15'),(7,'jose10@gmail.com','carlos','Manuel manrrique',30,'','1234','1900-01-01','S','2022-10-26 15:46:19','2022-10-27 10:43:36'),(8,'roberto@gmail.com','manu','javier javier',30,'F','12345','2000-05-20','s','2022-11-03 16:39:56','2022-11-03 16:39:56'),(9,'roberto123@gmail.com','manu','javier javier',30,'F','$2a$10$JbK2JafiNHLN..I/TpLAMObCyYL51DCUvRc.cGnoUT.lpQo6PW/Tm','2000-05-20','s','2022-11-03 16:45:14','2022-11-03 16:45:14'),(10,'juan@gmail.com','manu','javier javier',30,'M','$2a$10$.HFZ/KIzVI3zAGMILKTBU.QeaNHCghUWRDfcjrho2e51ObAy91Ar2','2000-05-20','s','2022-11-03 16:47:24','2022-11-03 16:47:24'),(11,'dani123@gmail.com','manu','javier javier',30,'M','$2a$10$/Nc/mwEcwWunZAmKDbPQTOl4HK2O6RWJ5rIvt1p/vmgHV4hDOizHi','2000-05-20','s','2022-11-03 16:47:33','2022-11-03 16:47:33'),(12,'dani1234@gmail.com','manu','javier javier',30,'M','$2a$10$YGxOdxNosLMSlutQz85WeOd5TPbFaLneFlx7UcJrA5WdISwfTRqbm','2000-05-20','s','2022-11-03 16:48:38','2022-11-03 16:48:38'),(13,'dani1234@gmail.com','manu','javier javier',30,'M','$2a$10$N9zWKSAgmiBMX5VWAGjs3ur3g2BGoBqT6.i0JoXm.mu2r/gQF0zYW','2000-05-20','s','2022-11-03 16:49:04','2022-11-03 16:49:04'),(14,'dani12345@gmail.com','manu','javier javier',30,'M','$2a$10$YBTKjVsN0T5kTQiDamoUK.FtLiVGDb1le0C3qT0qm8iM87ndGTZEm','2000-05-20','s','2022-11-03 16:49:09','2022-11-04 03:21:23'),(15,'dani12345@gmail.com','manu','javier javier',30,'M','$2a$10$YBTKjVsN0T5kTQiDamoUK.FtLiVGDb1le0C3qT0qm8iM87ndGTZEm','2000-05-20','s','2022-11-03 16:49:11','2022-11-04 03:21:23'),(16,'dani12345@gmail.com','manu','javier javier',30,'M','$2a$10$YBTKjVsN0T5kTQiDamoUK.FtLiVGDb1le0C3qT0qm8iM87ndGTZEm','2000-05-20','s','2022-11-03 16:49:12','2022-11-04 03:21:23'),(17,'dani12345@gmail.com','manu','javier javier',30,'M','$2a$10$YBTKjVsN0T5kTQiDamoUK.FtLiVGDb1le0C3qT0qm8iM87ndGTZEm','2000-05-20','s','2022-11-03 16:49:29','2022-11-04 03:21:23'),(18,'danijhv@gmail.com','sluh','sad asd',20,'','$2a$10$n6KedXT10jf/M6q0rPDq0.OYEmD0IWZ/4anS/v1sXaI0LIha5cKPK','1900-01-01','S','2022-11-10 16:04:31','2022-11-10 16:04:31'),(19,'laloa@gmail.com','Jose','javier',12,'M','$2a$10$WVFBTW84UFtIDKcLZu/Bo.o8Ru68ulvc5Sz4wUivMSmNR8sXbM84C','1900-01-01','S','2022-11-15 20:59:04','2022-11-17 18:00:07'),(20,'laloa@gmail.com','Jose','javier',12,'M','$2a$10$WVFBTW84UFtIDKcLZu/Bo.o8Ru68ulvc5Sz4wUivMSmNR8sXbM84C','1900-01-01','S','2022-11-15 21:00:08','2022-11-17 18:00:07'),(21,'laloa@gmail.com','Jose','javier',12,'M','$2a$10$vm37iyAbrM4Y12L7fKeHkOb//OPd.eKcrhbXeZaonrcctP7/elYZO','1900-01-01','S','2022-11-16 20:45:28','2022-11-17 18:00:07'),(22,'laloa@gmail.com','Jose','javier',12,'M','$2a$10$o5rTzoxrBRt5bis.FScBCerdBJV9CfoWcscGJrhETlVreE6bW3nAW','1900-01-01','S','2022-11-16 20:45:31','2022-11-17 18:00:07'),(23,'laloa@gmail.com','Jose','javier',12,'M','$2a$10$vaa9jpByqlc0eG8XUNrr2.4koeCrTmSE8GILIY4Pd71U9CQxhNtXi','1900-01-01','S','2022-11-16 20:46:49','2022-11-17 18:00:07');
/*!40000 ALTER TABLE `Usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-24 10:01:37
