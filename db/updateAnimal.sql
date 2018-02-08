update animals
set type = $1
where type = $2;

select * from animals;