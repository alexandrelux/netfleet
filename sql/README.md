Prérequis :

-   Docker

# PostgreSQL BDD

Démarrer le conteneur PostgreSQL

```console
docker run --name my-postgres -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres
```

Accéder au conteneur PostgreSQL

```console
docker exec -it my-postgres psql -U postgres
```

# pgAdmin

Démarrer le conteneur pgAdmin

```console
docker run -p 80:80 \
    --name pgadmin \
    -e "PGADMIN_DEFAULT_EMAIL=admin@admin.com" \
    -e "PGADMIN_DEFAULT_PASSWORD=admin" \
    -d dpage/pgadmin4
```

Accéder à pgAdmin

```browser
localhost:80
```

Ce connecter avec le login ci-dessus

Ajouter la BDD

```pgAdmin
    Host : host.docker.internal (ou IP conteneur)
    Port : 5432
    Username : postgres
    Password : (cf ci-dessus)
```
