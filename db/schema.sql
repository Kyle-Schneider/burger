-- * Create a `burgers` table with these fields:
--      * **id**: an auto incrementing int that serves as the primary key.
--      * **burger_name**: a string.
--      * **devoured**: a boolean.

create table burgers(
    id INT AUTO_INCREMENT NOT NULL,
    burger_name varchar(200) NOT NULL,
    devoured boolean default false,
    primary key (id)
);
