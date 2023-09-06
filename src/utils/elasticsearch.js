'use strict'
const { Client } = require('@elastic/elasticsearch')
const client = new Client({ node: process.env.ELASTIC_NODE })

client.on('response', (err, result) => {
	if (err) console.log('Elasticsearch Client Error: ', err)
	else console.log('Elasticsearch Operation Successful')
})

exports.indexDocument = async (index, id, body) => {
	return await client.index({
		index: index,
		id: id,
		body: body,
	})
}

exports.getDocumentById = async (index, id) => {
	return await client.get({
		index: index,
		id: id,
	})
}

exports.searchDocuments = async (index, body) => {
	return await client.search({
		index: index,
		body: body,
	})
}

exports.deleteDocument = async (index, type, id) => {
	return await client.delete({
		index: index,
		type: type,
		id: id,
	})
}