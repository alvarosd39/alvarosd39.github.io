/*
/*

The total number of triples expectd is:

- "Alvaro" -> 8 properties:
  - foaf:name
  - schema:occupation
  - schema:gender
  - schema:nationality
  - schema:hbby
  - schema:email
  - foaf:knows (links to 2 students)
  
- "Carlos" -> 1 property:
  - foaf:name

- "Marcos" -> 1 property:
  - foaf:name

Expected: 8 (Alvaro) + 1 (Carlos) + 1 (Marcos) = 9 triples

If the output of the TypeScript script shows 10 triples, then the triple count is correct.

*/

import { RdfStore } from 'rdf-stores';
import { DataFactory } from 'rdf-data-factory';

const store = RdfStore.createDefault();
const DF = new DataFactory();

async function main() {
  try {
    // add manually RDF data to the store (I've not found other option)
    store.addQuad(DF.quad(
      DF.namedNode('https://Myexample.org/Alvaro'),
      DF.namedNode('http://xmlns.com/foaf/0.1/name'),
      DF.literal('Alvaro Sanabria Diaz')
    ));

    store.addQuad(DF.quad(
      DF.namedNode('https://Myexample.org/Alvaro'),
      DF.namedNode('http://schema.org/occupation'),
      DF.literal('Knowledge Graphs Student')
    ));

    store.addQuad(DF.quad(
      DF.namedNode('https://Myexample.org/Alvaro'),
      DF.namedNode('http://schema.org/gender'),
      DF.literal('Male')
    ));

    store.addQuad(DF.quad(
      DF.namedNode('https://Myexample.org/Alvaro'),
      DF.namedNode('http://schema.org/nationality'),
      DF.literal('Spanish')
    ));

    store.addQuad(DF.quad(
      DF.namedNode('https://Myexample.org/Alvaro'),
      DF.namedNode('http://schema.org/hobby'),
      DF.literal('Football')
    ));

    store.addQuad(DF.quad(
      DF.namedNode('https://Myexample.org/Alvaro'),
      DF.namedNode('http://schema.org/email'),
      DF.literal('Alvaro.SanabriaDiaz@ugent.be')
    ));

    store.addQuad(DF.quad(
      DF.namedNode('https://Myexample.org/Alvaro'),
      DF.namedNode('http://xmlns.com/foaf/0.1/knows'),
      DF.namedNode('https://Myexample.org/Carlos')
    ));

    store.addQuad(DF.quad(
      DF.namedNode('https://Myexample.org/Alvaro'),
      DF.namedNode('http://xmlns.com/foaf/0.1/knows'),
      DF.namedNode('https://Myexample.org/Marcos')
    ));

    store.addQuad(DF.quad(
      DF.namedNode('https://Myexample.org/Carlos'),
      DF.namedNode('http://xmlns.com/foaf/0.1/name'),
      DF.literal('Carlos Marquez Lopez')
    ));

    store.addQuad(DF.quad(
      DF.namedNode('https://Myexample.org/Marcos'),
      DF.namedNode('http://xmlns.com/foaf/0.1/name'),
      DF.literal('Marcos Montero Cuevas')
    ));

    //  Print  RDF triples that are stored
    console.log('--- List of all RDF triples ---');
    store.match().on('data', (quad) => {
      console.log(
        `Subject: ${quad.subject.value}\n` +
        `Predicate: ${quad.predicate.value}\n` +
        `Object: ${quad.object.value}\n`
      );
    });

    //Count and display the total number of triples
    store.match().on('end', () => {
      console.log(`Total number of triples in the store: ${store.size}`);
    });

  } catch (error) {
    console.error('Error processing data:', error);
  }
}

main();

*/


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
