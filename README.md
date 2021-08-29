# cimple-data

Useful information to use in your project

## Installation
```bash
npm i cimple-data
```

## Usage

```javascript
// ES Module
import currencies from 'cimple-data/currencies';
// CommonJS
const currencies = require("cimple-data/currencies");
```

## Available data
### Countries
```javascript
import countries from 'cimple-data/countries';

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
import currencies from 'cimple-data/currencies';

/* returns 
{
    name: string;
    symbol: string;
}[] 
*/
```	
### Domains
```javascript
import domains from 'cimple-data/domains';

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
import languages from 'cimple-data/languages';

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
import locales from 'cimple-data/locales';

/* returns
{
    languageString: string;
    equivalentLocaleName: string;
}[]
*/
```	
### Timezones
```javascript
import timezones from 'cimple-data/timezones';

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