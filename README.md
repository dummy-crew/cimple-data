# cimple-data

Useful information to use in your project

## Installation
```bash
npm i cimple-data
```

## Usage

```javascript
// ES Module
import { currencies } from 'cimple-data';
// CommonJS
const { currencies } = require("cimple-data");
```

## Available data
### Countries
```javascript
import { countries } from 'cimple-data';

/* returns 
{
    name: string;
    officialStateName: string;
    sovereignty: string;
    code: string;
    ccTld: string;
}[]
*/
```	
### Currencies
```javascript
import { currencies } from 'cimple-data';

/* returns 
{
    name: string;
    symbol: string;
}[] 
*/
```	
### Domains
```javascript
import { domains } from 'cimple-data';

/* returns 
{
    name: string;
    type: string;
    tldManager: string;
}[]
*/
```	
### Languages
```javascript
import { languages } from 'cimple-data';

/* returns 
{
    country: string;
    officialLanguage: string;
    regionalLanguage: string;
    minorityLanguage: string;
    nationalLanguage: string;
    widelySpoken: string;
} | {
    country: string;
    officialLanguage: string;
    regionalLanguage: string;
    minorityLanguage: string;
    nationalLanguage: string;
    widelySpoken?: undefined;
})[]
*/
```	
### Locales
```javascript
import { locales } from 'cimple-data';

/* returns
{
    languageString: string;
    equivalentLocaleName: string;
}[]
*/
```	
### Timezones
```javascript
import { timezones } from 'cimple-data';

/* returns
{
    countryCode: string;
    name: string;
    portionOfCountryCovered: string;
    status: string;
    UTCOffset: string;
    UTCDSTOffset: string;
}[]
*/
```	