const localizations = {
  commandement: {
    en: 'Commandment',
    fr: 'Commandement'
  },
  titulature: {
    en: 'Title',
    fr: 'Titulature'
  },
  city: {
    en: 'City',
    fr: 'Ville'
  },
  place_given: {
    en: 'Place Given',
    fr: 'Date de Lieu'
  },
  search: {
    en: 'Search',
    fr: 'Rechercher'
  },
  number_of_order: {
    en: 'Number of Order',
    fr: 'Numero d\'ordre'
  },
  reset: {
    en: 'Clear filters',
    fr: 'Effacer les filtres'
  },
  searchHere: {
    en: 'Search here...',
    fr: 'Recherchez ici...'
  },
  to: {
    en: 'To',
    fr: 'à'
  },
  summary: {
    en: 'Summary',
    fr: 'Sommaire'
  },
  text: {
    en: 'Text',
    fr: 'Texte'
  },
  year: {
    en: 'Year',
    fr: 'Année'
  },
  date: {
    en: 'Date',
    fr: 'Date'
  },
  month: {
    en: 'Month',
    fr: 'Mois'
  },
  day: {
    en: 'Day',
    fr: 'Jour'
  },
  references: {
    en: 'References',
    fr: 'Références'
  },
  comments: {
    en: 'Comments',
    fr: 'Commentaires'
  },
  emptyField: {
    en: 'This field is empty.',
    fr: 'Ce champ est vide.'
  },
  error: {
    en: 'Error',
    fr: 'Erreur'
  },
  documentNotFound: {
    en: 'Document not found',
    fr: 'Document introuvable'
  },
  sort: {
    en: 'Sort',
    fr: 'Trier'
  },
  chronologicalAsc: {
    en: 'Chronological asc.',
    fr: 'Chronologique asc.'
  },
  chronologicalDesc: {
    en: 'Chronological desc.',
    fr: 'Chronologique desc.'
  },
  numberOrderAsc: {
    en: 'Number order asc.',
    fr: 'Numéro d\'ordre asc.'
  },
  numberOrderDesc: {
    en: 'Number order desc.',
    fr: 'Numéro d\'ordre desc.'
  },
  relevance: {
    en: 'Relevance',
    fr: 'Pertinence'
  },
  showMore: {
    en: 'Show more',
    fr: 'Montre plus'
  },
  loading: {
    en: 'Loading...',
    fr: 'Chargement...'
  },
  noResults: {
    en: 'No results.',
    fr: 'Aucun résultat.'
  },
  keywords: {
    en: 'Keywords',
    fr: 'Mots-clé'
  },
  archive: {
    en: 'Archive',
    fr: 'Archive'
  },
  origDate: {
    en: 'Original Date',
    fr: 'Date Originale'
  },
  origPlace: {
    en: 'Original Place',
    fr: 'Lieu Originale'
  },
  works: {
    en: 'Works',
    fr: 'Oeuvres'
  },
  formerShelfmarks: {
    en: 'Former Shelfmarks',
    fr: 'Ancienne notation d\'étagère'
  },
  formerShelfmark: {
    en: 'Former Shelfmark',
    fr: 'Ancienne notation d\'étagère'
  },
  shelfmarks: {
    en: 'Shelfmarks',
    fr: 'Notation d\'étagère'
  },
  shelfmark: {
    en: 'Shelfmark',
    fr: 'Notation d\'étagère'
  },
  shelfmarkSections: {
    en: 'Shelfmark Sections',
    fr: 'Sections de notation d\'étagère'
  },
  shelfmarkSection: {
    en: 'Shelfmark Section',
    fr: 'Section de notation d\'étagère'
  },
  provenance: {
    en: 'Provenance',
    fr: 'Provenance'
  },
  sections: {
    en: 'Section',
    fr: 'Section'
  },
  title: {
    en: 'Title',
    fr: 'Titre'
  },
  genericTitle: {
    en: 'Generic Title',
    fr: 'Titre Générique'
  },
  publicationDate: {
    en: 'Publication Date',
    fr: 'Date d\'édition'
  },
  publicationLocation: {
    en: 'Publication Location',
    fr: 'Lieu d\'édition'
  },
  parentEdition: {
    en: 'Parent Edition',
    fr: 'Édition parente'
  },
  status: {
    en: 'Status',
    fr: 'Statut'
  },
  line: {
    en: 'Line',
    fr: 'Ligne'
  },
  author: {
    en: 'Author',
    fr: 'Auteur'
  },
  format: {
    en: 'Format',
    fr: 'Format'
  },
  publisher: {
    en: 'Publisher',
    fr: 'Éditeur'
  },
  type: {
    en: 'Type',
    fr: 'Type'
  },
  draft: {
    en: 'Draft',
    fr: 'Brouillon'
  },
  published: {
    en: 'Published',
    fr: 'Publié'
  },
  archived: {
    en: 'Archived',
    fr: 'Archivé'
  },
  print: {
    en: 'Print',
    fr: 'Imprimé'
  },
  manuscript: {
    en: 'Manuscript',
    fr: 'Manuscrit'
  },
  catalogNumber: {
    en: 'Catalog number',
    fr: '???'
  },
  numberOfFolios: {
    en: 'Number of folios',
    fr: '???'
  },
  pageSize: {
    en: 'Page size',
    fr: '???'
  },
  textBlockSize: {
    en: 'Text block size',
    fr: '???'
  },
  numberOfLines: {
    en: 'Number of lines',
    fr: '???'
  },
  places: {
    en: 'Places',
    fr: '???'
  },
  dates: {
    en: 'Dates',
    fr: '???'
  },
  measures: {
    en: 'Measures',
    fr: '???'
  }
}

// Helper function for transformItems prop on RefinementList
export const getLocalizedValues = (items: any[], locale: 'en' | 'fr') => (
  items.map(i => ({
    ...i,
    label: localizations[i.value.toLocaleLowerCase() as keyof typeof localizations]
      ? localizations[i.value.toLocaleLowerCase() as keyof typeof localizations][locale]
      : i.label
  }))
);

export default localizations;
