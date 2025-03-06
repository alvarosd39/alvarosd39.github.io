"use strict";

import { RdfStore } from "rdf-stores";
import { DataFactory } from "rdf-data-factory";

const store = RdfStore.createDefault();
const DF = new DataFactory();

async function main() {
    try {
        // Agregar datos RDF al store
        store.addQuad(DF.quad(DF.namedNode("https://alvarosd39.github.io"), DF.namedNode("http://xmlns.com/foaf/0.1/name"), DF.literal("Alvaro Sanabria Diaz")));
        store.addQuad(DF.quad(DF.namedNode("https://alvarosd39.github.io"), DF.namedNode("http://schema.org/occupation"), DF.literal("Knowledge Graphs Student")));
        store.addQuad(DF.quad(DF.namedNode("https://alvarosd39.github.io"), DF.namedNode("http://schema.org/gender"), DF.literal("Male")));
        store.addQuad(DF.quad(DF.namedNode("https://alvarosd39.github.io"), DF.namedNode("http://schema.org/nationality"), DF.literal("Spanish")));
        store.addQuad(DF.quad(DF.namedNode("https://alvarosd39.github.io"), DF.namedNode("http://schema.org/hobby"), DF.literal("Football")));
        store.addQuad(DF.quad(DF.namedNode("https://alvarosd39.github.io"), DF.namedNode("http://schema.org/email"), DF.literal("Alvaro.SanabriaDiaz@ugent.be")));
        store.addQuad(DF.quad(DF.namedNode("https://alvarosd39.github.io"), DF.namedNode("http://xmlns.com/foaf/0.1/knows"), DF.namedNode("https://ginfinai.be/#me")));
        store.addQuad(DF.quad(DF.namedNode("https://alvarosd39.github.io"), DF.namedNode("http://xmlns.com/foaf/0.1/knows"), DF.namedNode("https://gc-cc.github.io/#me")));

        store.addQuad(DF.quad(DF.namedNode("https://ginfinai.be/#me"), DF.namedNode("http://xmlns.com/foaf/0.1/name"), DF.literal("Gerben Ceuppens")));
        store.addQuad(DF.quad(DF.namedNode("https://gc-cc.github.io/#me"), DF.namedNode("http://xmlns.com/foaf/0.1/name"), DF.literal("Guy Cools")));

        // Agregar datos sobre el curso
        store.addQuad(DF.quad(DF.namedNode("https://alvarosd39.github.io"), DF.namedNode("http://schema.org/course"), DF.namedNode("https://pietercolpaert.be/teaching/kg/#2024-2025")));
        store.addQuad(DF.quad(DF.namedNode("https://pietercolpaert.be/teaching/kg/#2024-2025"), DF.namedNode("http://schema.org/name"), DF.literal("Knowledge Graphs Course 2024-2025")));
        store.addQuad(DF.quad(DF.namedNode("https://pietercolpaert.be/teaching/kg/#2024-2025"), DF.namedNode("http://schema.org/provider"), DF.namedNode("https://pietercolpaert.be")));

        // Imprimir los triples almacenados
        console.log("--- Lista de todas las triples RDF ---");
        store.match().on("data", (quad) => {
            console.log(`Subject: ${quad.subject.value}\nPredicate: ${quad.predicate.value}\nObject: ${quad.object.value}\n`);
        });

        // Contar y mostrar el total de triples
        store.match().on("end", () => {
            console.log(`Total de triples en la tienda: ${store.size}`);
        });
    } catch (error) {
        console.error("Error procesando datos:", error);
    }
}

main();

