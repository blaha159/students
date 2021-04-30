# Students client

> Aplikace sloužící jako webový klient pro test rest api

> Dokumentaci jednotlivých modulů a komponent aplikace naleznete v bočním menu

## Rychlá příručka pro vývojáře

### Lokální vývoj

nejdřív nainstaluj dependencies
``` bash
npm i
```

generování api skriptu uvedeného v package.json, např. "generate-api": "node utils/swaggerCodegen.js", pokud jsou v api nejake pagination, tak opravit page?: ref; a size?: ref; ref >> number
``` bash
npm run generate-api
```

Vývojové spuštění s hotreloadem na portu 3000.
``` bash
npm run dev
```

produkční build a spuštění
``` bash
npm run build
npm start
```

produkční deploy
``` bash
npm run build
cp dist/ MÍSTO_ODKUD_SE_APPKA_SERVÍRUJE_PŘÍMO_PŘES_NGINX/APACHE
```
