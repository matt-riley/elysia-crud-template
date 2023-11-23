CREATE TABLE `quotes` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`quote` varchar(2048) NOT NULL,
	`author` varchar(1024) NOT NULL,
	`source` varchar(1024) NOT NULL,
	CONSTRAINT `quotes_id` PRIMARY KEY(`id`)
);
