-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: skiller
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `certs`
--
DROP TABLE IF EXISTS `certs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `certs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cert` text COLLATE utf8mb4_general_ci,
  `create_date` text COLLATE utf8mb4_general_ci,
  `mod_date` text COLLATE utf8mb4_general_ci,
  `delete_date` text COLLATE utf8mb4_general_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `certs`
--

LOCK TABLES `certs` WRITE;
/*!40000 ALTER TABLE `certs` DISABLE KEYS */;
/*!40000 ALTER TABLE `certs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `frameworks`
--

DROP TABLE IF EXISTS `frameworks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `frameworks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `framework` text COLLATE utf8mb4_general_ci,
  `for_lang` int(11) DEFAULT NULL,
  `description` text COLLATE utf8mb4_general_ci,
  `create_date` text COLLATE utf8mb4_general_ci,
  `mod_date` text COLLATE utf8mb4_general_ci,
  `delete_date` text COLLATE utf8mb4_general_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `frameworks`
--

LOCK TABLES `frameworks` WRITE;
/*!40000 ALTER TABLE `frameworks` DISABLE KEYS */;
/*!40000 ALTER TABLE `frameworks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `langs`
--

DROP TABLE IF EXISTS `langs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `langs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `lang` text COLLATE utf8mb4_general_ci,
  `description` text COLLATE utf8mb4_general_ci,
  `create_date` text COLLATE utf8mb4_general_ci,
  `mod_date` text COLLATE utf8mb4_general_ci,
  `delete_date` text COLLATE utf8mb4_general_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `langs`
--

LOCK TABLES `langs` WRITE;
/*!40000 ALTER TABLE `langs` DISABLE KEYS */;
/*!40000 ALTER TABLE `langs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `operatingsystems`
--

DROP TABLE IF EXISTS `operatingsystems`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `operatingsystems` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `operating_system` text COLLATE utf8mb4_general_ci,
  `description` text COLLATE utf8mb4_general_ci,
  `create_date` text COLLATE utf8mb4_general_ci,
  `mod_date` text COLLATE utf8mb4_general_ci,
  `delete_date` text COLLATE utf8mb4_general_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `operatingsystems`
--

LOCK TABLES `operatingsystems` WRITE;
/*!40000 ALTER TABLE `operatingsystems` DISABLE KEYS */;
/*!40000 ALTER TABLE `operatingsystems` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `skills`
--

DROP TABLE IF EXISTS `skills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `skills` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `skill` text COLLATE utf8mb4_general_ci,
  `create_date` text COLLATE utf8mb4_general_ci,
  `mod_date` text COLLATE utf8mb4_general_ci,
  `delete_date` text COLLATE utf8mb4_general_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `skills`
--

LOCK TABLES `skills` WRITE;
/*!40000 ALTER TABLE `skills` DISABLE KEYS */;
/*!40000 ALTER TABLE `skills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tools`
--

DROP TABLE IF EXISTS `tools`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tools` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tool` text COLLATE utf8mb4_general_ci,
  `description` text COLLATE utf8mb4_general_ci,
  `create_date` text COLLATE utf8mb4_general_ci,
  `mod_date` text COLLATE utf8mb4_general_ci,
  `delete_date` text COLLATE utf8mb4_general_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tools`
--

LOCK TABLES `tools` WRITE;
/*!40000 ALTER TABLE `tools` DISABLE KEYS */;
/*!40000 ALTER TABLE `tools` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_account`
--

DROP TABLE IF EXISTS `user_account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_account` (
  `user_id` int(11) NOT NULL,
  `authority` int(11) NOT NULL DEFAULT '0',
  `email` text,
  `name` text,
  `notification` int(11) NOT NULL DEFAULT '1',
  `create_date` text,
  `modified_date` text,
  `delete_date` text,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_account`
--

LOCK TABLES `user_account` WRITE;
/*!40000 ALTER TABLE `user_account` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_certs`
--

DROP TABLE IF EXISTS `user_certs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_certs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `cert_id` int(11) DEFAULT NULL,
  `start_date` text COLLATE utf8mb4_general_ci,
  `earned_date` text COLLATE utf8mb4_general_ci,
  `create_date` text COLLATE utf8mb4_general_ci,
  `mod_date` text COLLATE utf8mb4_general_ci,
  `delete_date` text COLLATE utf8mb4_general_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_certs`
--

LOCK TABLES `user_certs` WRITE;
/*!40000 ALTER TABLE `user_certs` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_certs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_forgot`
--

DROP TABLE IF EXISTS `user_forgot`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_forgot` (
  `user_id` int(11) NOT NULL,
  `token` text,
  `create_date` text,
  `expire_date` text,
  `modified_date` text,
  `delete_date` text,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_forgot`
--

LOCK TABLES `user_forgot` WRITE;
/*!40000 ALTER TABLE `user_forgot` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_forgot` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_frameworks`
--

DROP TABLE IF EXISTS `user_frameworks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_frameworks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `framework_id` int(11) DEFAULT NULL,
  `level` tinyint(4) DEFAULT NULL,
  `start_date` text COLLATE utf8mb4_general_ci,
  `create_date` text COLLATE utf8mb4_general_ci,
  `mod_date` text COLLATE utf8mb4_general_ci,
  `delete_date` text COLLATE utf8mb4_general_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_frameworks`
--

LOCK TABLES `user_frameworks` WRITE;
/*!40000 ALTER TABLE `user_frameworks` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_frameworks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_langs`
--

DROP TABLE IF EXISTS `user_langs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_langs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `lang_id` int(11) DEFAULT NULL,
  `level` tinyint(4) DEFAULT NULL,
  `start_date` text COLLATE utf8mb4_general_ci,
  `create_date` text COLLATE utf8mb4_general_ci,
  `mod_date` text COLLATE utf8mb4_general_ci,
  `delete_date` text COLLATE utf8mb4_general_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_langs`
--

LOCK TABLES `user_langs` WRITE;
/*!40000 ALTER TABLE `user_langs` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_langs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_operating_systems`
--

DROP TABLE IF EXISTS `user_operating_systems`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_operating_systems` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `operating_system_id` int(11) DEFAULT NULL,
  `level` tinyint(4) DEFAULT NULL,
  `start_date` text COLLATE utf8mb4_general_ci,
  `create_date` text COLLATE utf8mb4_general_ci,
  `mod_date` text COLLATE utf8mb4_general_ci,
  `delete_date` text COLLATE utf8mb4_general_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_operating_systems`
--

LOCK TABLES `user_operating_systems` WRITE;
/*!40000 ALTER TABLE `user_operating_systems` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_operating_systems` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_pass`
--

DROP TABLE IF EXISTS `user_pass`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_pass` (
  `user_id` int(11) NOT NULL,
  `password` text,
  `create_date` text,
  `expire_date` text,
  `modified_date` text,
  `delete_date` text,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_pass`
--

LOCK TABLES `user_pass` WRITE;
/*!40000 ALTER TABLE `user_pass` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_pass` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_push`
--

DROP TABLE IF EXISTS `user_push`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_push` (
  `user_id` int(11) NOT NULL,
  `token` text,
  `create_date` text,
  `modified_date` text,
  `delete_date` text,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_push`
--

LOCK TABLES `user_push` WRITE;
/*!40000 ALTER TABLE `user_push` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_push` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_skills`
--

DROP TABLE IF EXISTS `user_skills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_skills` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `skill_id` int(11) DEFAULT NULL,
  `level` tinyint(4) DEFAULT NULL,
  `create_date` text COLLATE utf8mb4_general_ci,
  `mod_date` text COLLATE utf8mb4_general_ci,
  `delete_date` text COLLATE utf8mb4_general_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_skills`
--

LOCK TABLES `user_skills` WRITE;
/*!40000 ALTER TABLE `user_skills` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_skills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_token`
--

DROP TABLE IF EXISTS `user_token`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_token` (
  `user_id` int(11) NOT NULL,
  `token` text,
  `reset_token` text,
  `create_date` text,
  `expire_date` text,
  `modified_date` text,
  `delete_date` text,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_token`
--

LOCK TABLES `user_token` WRITE;
/*!40000 ALTER TABLE `user_token` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_token` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_tools`
--

DROP TABLE IF EXISTS `user_tools`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_tools` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `tool_id` int(11) DEFAULT NULL,
  `level` tinyint(4) DEFAULT NULL,
  `start_date` text COLLATE utf8mb4_general_ci,
  `create_date` text COLLATE utf8mb4_general_ci,
  `mod_date` text COLLATE utf8mb4_general_ci,
  `delete_date` text COLLATE utf8mb4_general_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_tools`
--

LOCK TABLES `user_tools` WRITE;
/*!40000 ALTER TABLE `user_tools` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_tools` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;
ALTER USER 'root'@'%' IDENTIFIED BY 'mysql';
select * from mysql.user;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-18 15:16:03
