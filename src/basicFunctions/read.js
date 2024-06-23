export default class Read {
	// Classe para leitura de registros no banco de dados, sendo o único caminho para visualizar dados do banco de dados.
	static async getAll(model, select) {
        // Função para buscar todos os registros no banco de dados.
        // Pode filtrar os campos que deseja retornar, utilizando o parâmetro select.
		if(!model) throw new Error("Model is required.");
		if(!(typeof select === 'object' || !select)){
			throw new Error("Select isn't a object");			
		}
		try {
			const data = await model.findMany({
				select: select,
			});
			return data;
		} catch (error) {
			throw new Error(error.message);
		}
	}
	static async getById(id, model, select) {
        // Função para buscar um registro no banco de dados, utilizando o id.
        // Pode filtrar os campos que deseja retornar, utilizando o parâmetro select.
		if(!model ){
			throw new Error(!id?"Id and model is required.":"Model is required.");
		}
		if(!(typeof select === 'object' || !select)){
			throw new Error("Select isn't a object");			
		}
		try {
			const data = await model.findUnique({
				where: {
					id: id,
				},
				select: select,
			});
			return data;
		} catch (error) {
			throw new Error(error.message);
		}
	}
	static async getAllWhere(where, model, select) {
        // Função para buscar registros no banco de dados, utilizando um filtro.
        // Pode filtrar os campos que deseja retornar, utilizando o parâmetro select.
		if(!model ){
			throw new Error((typeof where === 'undefined')?"where and model is required.":typeof where === 'object'?"Where isn't a object and Model is required.": "Model is required.");
		}
		if(!(typeof select === 'object' || !select)){
			throw new Error("Select isn't a object");			
		}
		try {
			const data = await model.findMany({
				where: where,
				select: select,
			});
			return data;
		} catch (error) {
			throw new Error(error.message);
		}
	}
}
