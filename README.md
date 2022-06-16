# collectionBuilder-multilingual

[CollectionBuilder-GH](https://github.com/CollectionBuilder/collectionbuilder-gh) template modified to test multilingual capabilities, with options to change the default site language

## Metadata: 

Metadata must have these field names in order for your collection to work:

- objectid
- filename
- title
- format

See <https://collectionbuilder.github.io/cb-docs/docs/metadata/gh_metadata/> for information about required fields.

Create separate columns to hold field values in two languages (each language gets its own column).
Example:

`title`,`title-spa`

`subject-eng`,`subject-spa`

With exception of `title` and the other field names listed above, you can title your fields anything you'd like.

## Configure site language:

In _config.yml, add language ids and display names to `site_languages` section.
Example:

```
# set languages used on site
site_languages: 
- lang_id: eng
  lang_display: English
- lang_id: spa
  lang_display: Español
```

## _data/grand-config-metadata.csv

First field name should be `field-id`, followed by `field-` + the language id you specified in the _config.yml file.
Example:

`field-id,field-eng,field-spa`

Value for `field-id` is a unique identifier that you specify to indicate a single metadata field.

Value for `field-eng` is the field name of the English version of the metadata field (taken from your metadata csv)

Value for `field-spa` is the field name of the Spanish version of the metadata field (taken from your metadata csv)

Currently, every row should have a `field-eng` value.
Values for `field-spa` are optional.

## _data/config-translation.csv

Use this spreadsheet to translate the site's default language and metadata display names.
Column titles:

`data_translate,description,eng,spa`

- `data_translate`: a unique value that identifies a specific text on the site. Elsewhere on the site, this value will be entered into a `data-translate` attribute in a span element placed in the location where that text should appear.
- `description`: a human-readable description of where this text belongs on the site
- `eng`: the English translation of the text
- `spa`: the Spanish translation of the text

Example:

```
data_translate,description,eng,spa
nav-home,Navigation menu Home option,Home,Inicio
nav-browse,Navigation menu Browse option,Browse,Búsqueda
nav-subjects,Navigation menu Subjects option,Subjects,Categorías
nav-locations,Navigation menu Locations option,Locations,Ubicaciones
```

## _data/ config csvs

The display_name value in these csvs must be written as an HTML `<span>` element, like so:

`<span data-translate='subject-display-name' class='translate'></span>`

The value of the `data-translate` attribute must be defined in the _data/config-translation.csv for the display name to render correctly.

For example, if I want to add a new metadata field, "Authors" / "Autores", I would first need to add create a field id for it in _data/grand-config-metadata.csv:

```
field-id,field-eng,field-spa
authors,authors-eng,authors-spa
```

Then, I would add the authors field to _data/config-metadata.csv, creating the new `data-translate` value `author-display-name` in the process:

```
field-id,display_name,browse_link,external_link
authors,<span data-translate='author-display-name' class='translate'></span>,
```

Then, I would add the value `author-display-name` to _data/config-translation, accompanied by a description and the display values in each language:

```
data_translate,description,eng,spa
author-display-name,display name for author metadata field,Authors,Autores
```

This process can be followed using the other config- csvs to edit or add metadata field display names anywhere on the site.

---

## More on CollectionBuilder

`collectionbuilder-gh` is intended as a simple template for hands-on teaching about digital libraries.
It can be used in a workshop setting to take participants through digitization and metadata creation, to having a live collection site hosted on GitHub.

`collectionbuilder-gh` aims to be well documented and easy to configure by following the example, with the potential to scaffold learning of a multitude of transferable digital and data skills.
A project in "minimal computing", it provides a depth of learning opportunities, allowing users to take complete ownership over the project and make their work open to the world.

Learn about:

- Git and GitHub basics
- [Markdown](https://guides.github.com/features/mastering-markdown/), plaintext writing and content creation
- HTML, CSS, and JS literacy
- commandline literacy
- GitHub collaboration and project management
- [Jekyll](https://jekyllrb.com/) basics
- working in the Open, open source and open data
- digital libraries concepts such as "collections as data", minimal computing, data-driven design

> We prefer commonly understood formats (such as CSV spreadsheets over YAML), and convention over configuration (follow the example over learn all the options).

## Features

- [Jekyll](https://jekyllrb.com/) for GitHub Pages 
- Layout using [Bootstrap](https://getbootstrap.com/docs/4.0/getting-started/introduction/).
- [jQuery](https://jquery.com/)
- Mapping using [Leaflet.js](http://leafletjs.com/)
- Tables using [DataTables](https://datatables.net/)
- Galleries using [lightGallery](http://sachinchoolur.github.io/lightGallery/)
- Simple [lunr](https://lunrjs.com/) search 
- Rich markup using [Schema.org](http://schema.org) and [Open Graph protocol](http://ogp.me/) standards.

## Build a Digital Collection! 

Check out the [CollectionBuilder docs](https://collectionbuilder.github.io/cb-docs/) for how to get started, or visit the [CollectionBuilder home](https://collectionbuilder.github.io/) for more information.

If you are interested in using CollectionBuilder, or are already using it, please drop us a line (**libstatic.uidaho@gmail.com**) since we would love to learn more about it's use in the wild. 
There are also currently opportunities to [collaborate on CollectionBuilder](https://collectionbuilder.github.io/about.html#the-grant).

## License

CollectionBuilder documentation and general web content is licensed [Creative Commons Attribution-ShareAlike 4.0 International](http://creativecommons.org/licenses/by-sa/4.0/). 
This license does *NOT* include any objects or images used in digital collections, which may have individually applied licenses described by a "rights" field.
CollectionBuilder code is licensed [MIT](https://github.com/CollectionBuilder/collectionbuilder-gh/blob/main/LICENSE). 
This license does not include external dependencies included in the `assets/lib` directory, which are covered by their individual licenses.
