CREATE TABLE "quotes" (
	"id" serial PRIMARY KEY,
	"quote" varchar(2048) NOT NULL,
	"author" varchar(1024) NOT NULL,
	"source" varchar(1024) NOT NULL
);
