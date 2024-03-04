# All projects

* I've changed the functionality for empty fields. In the old version of the site, an empty field would still display the icon, with localized text that says "This field is empty". The new version skips displaying the field entirely if there's no value for it. I did this because the localization logic

# La Supplique

* The ability to sort still isn't available, but Derek recently created a new `typesense:update` Rake task that could be expanded to set `sort: true` on all the fields. In other words, sorting isn't totally impossible anymore, but I'll hold off on the changes unless we're sure we want it.
* The range facets (used for `number_order`, day, month, and year) are broken because the values are being indexed into Typesense as strings. I'm not sure why, but the Typesense index shows them as `"type": "string"` while they're correctly set as Number fields in Core Data. I've commented out some code in the `SuppliquePolitique.tsx` component that will enable the date range components if/when this indexing issue is fixed.

# Bischoff

* Due to the way we've set up item-place relations, we can't facet by a specific type of relation, such as `Original Place` or `Provenance`. The "type", "subtype", and "certainty" fields are user-defined fields on the items-places relation, instead of each type being a separate relation. If it's important for the clients to be able to facet by Original Place, Provenance, etc., we should restructure the project, update the ingestion script, and re-ingest.
* The shelfmarks are affected by the same issue as above, because the `shelfmark` fields are user-defined strings on the items-archives relation. However, I don't think it really makes sense to have facets for shelfmarks anyway. They only make sense in the context of the parent archive, and when we prefix the archive name in the label (as we do in the MeiliSearch version of the site), the actual shelfmark value isn't visible.
* "Original Date" isn't marked as facetable in the Typesense index for some reason. It's probably related to [this line](https://github.com/performant-software/core-data-connector/blob/master/app/services/core_data_connector/search/base.rb#L379) in the search service on Core Data's end. Specifically, it excludes `string` type fields from being facetable. This seems like a straightfoward fix, but there might have been a technical reason for setting it up that way in the first place.
* Archive Location is still missing - the plan is to use a map view to convey the information.

# Rumpf

* The "status" field was omitted during the ingestion process from Directus. Almost all records were "Draft", and I think we decided there would be similar functionality baked into Core Data.
