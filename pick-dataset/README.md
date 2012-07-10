# pick dataset WebIntent

This is a proof of concept (POC) for a `pick-dataset` [WebIntent](http://webintents.org/ "Web Intents"), useful for integrating the LATC [DSI](http://dsi.lod-cloud.net/ "Datasets") with the Workbench (via [24/7 Platform](http://linker.demo.sindice.net/main/ "Welcome to Linker.sindice.com")). The goal is to provide a service that provides dataset URIs, for example `http://lod-cloud.net/dataset/dbpedia` for the DBpedia LOD dataset.

The POC consists of:

* a service that implements the `pick-dataset` intent - see `dsi.html`
* a client that implements the invocation of the `pick-dataset` intent - see `workbench.html`

The POC is deployed at [http://lab.linkeddata.deri.ie/pick-dataset](http://lab.linkeddata.deri.ie/pick-dataset) for demonstration purposes.

## License

Public domain.