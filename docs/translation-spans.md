# Translation Spans

CB uses a modular system to provide switching multiple languages for elements through out the site.

The system has three parts:

## site_languages 

First, configure the languages that will be used on the site in "_config.yml".
This will be used by the template to set up the buttons to switch between languages and set up the necessary data.
This is done using a YAML dictionary starting with the key `site_languages`.
Each language entry requires a `lang_id` (the three letter ISO code used as an identifier across the site) and a `lang_display` (the term you want to display on the language switching button).

```
# set languages used on site
site_languages: 
- lang_id: eng
  lang_display: English
- lang_id: spa
  lang_display: Español
```

## config-translation

Second, configure the bits of text that will be translated and switched between on your site using the "_data/config-translation.csv" file.
The file has two required columns, plus an additional column for each language matching the `lang_id` configured above.
Each row will describe one translation span that will be used on your site.
Columns:

- `span_id` is a unique string that will match the id attribute of a span element used somewhere in your site. It must be a valid html id attribute (no spaces, no slashes or quotes, no weird characters, etc)
- `description` is a free text description of the element--this is not used in the template, but is just for information to help keep the translations organized and documented!
- language columns - each additional language is a column named matching the `lang_id`. Each row will have the text for the corresponding language that will be added to the translation span.

Example config:

```
span_id,description,eng,spa
example1,Example heading,About Example,Acerca del ejemplo
example2,example button text,Help,Ayuda 
```

## translation spans

Third, are the span elements placed anywhere in the template where you need translated text. 
Each translation span is an empty span element with an id attribute matching a `span_id` configured in "config-translation" and the class `translate`.
For example:

```
<span id="example1" class="translate"></span>
```

Javascript on every page will scan the content for all spans with the `translate` class.
For each of the spans, it will use the id to look up the configured translations, and fill in the span with the current language on the page.

Translations spans can be used **anywhere** that is treated as html or markdown in the template. 
For example, you can use them in "config-nav" display_name to provide translations for the navbar elements. 
You can add them to the markdown of any page to set translations for the page headers and content. 
