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
    fr: '???'
  },
  origPlace: {
    en: 'Original Place',
    fr: '???'
  },
  works: {
    en: 'Works',
    fr: '???'
  },
  formerShelfmarks: {
    en: 'Former Shelfmarks',
    fr: '???'
  },
  shelfmarks: {
    en: 'Shelfmarks',
    fr: '???'
  },
  shelfmarkSections: {
    en: 'Shelfmark Sections',
    fr: '???'
  },
  provenance: {
    en: 'Provenance',
    fr: '???'
  },
  sections: {
    en: 'Section',
    fr: '???'
  },
  title: {
    en: 'Title',
    fr: 'Titre'
  },
  genericTitle: {
    en: 'Generic Title',
    fr: '???'
  },
  publicationDate: {
    en: 'Publication Date',
    fr: '???'
  },
  publicationLocation: {
    en: 'Publication Location',
    fr: '???'
  },
  parentEdition: {
    en: 'Parent Edition',
    fr: '???'
  },
  status: {
    en: 'Status',
    fr: '???'
  },
  line: {
    en: 'Line',
    fr: '???'
  },
  author: {
    en: 'Author',
    fr: '???'
  },
  format: {
    en: 'Format',
    fr: '???'
  },
  publisher: {
    en: 'Publisher',
    fr: '???'
  },
  type: {
    en: 'Type',
    fr: '???'
  },
  draft: {
    en: 'Draft',
    fr: '???'
  },
  published: {
    en: 'Published',
    fr: '???'
  },
  archived: {
    en: 'Archived',
    fr: '???'
  },
  print: {
    en: 'Print',
    fr: '???'
  },
  manuscript: {
    en: 'Manuscript',
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
