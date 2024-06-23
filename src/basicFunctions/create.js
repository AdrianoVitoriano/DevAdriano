export default class Create {
	// Classe para criação de registros no banco de dados, sendo o único caminho que o dado pode ser inserido no banco de dados.
	static async createOne(data, model, select) {
		// Função para criar um registro no banco de dados.
		// Pode filtrar os campos que deseja retornar, utilizando o parâmetro select.
		if(!model ){
			throw new Error(!data?"Data and model is required.":"Model is required.");
		}

		if(!(typeof select === 'object' || !select)){
			throw new Error("Select isn't a object");			
		}
		try {
			const createdData = await model.create({
				data: data,
				select: select,
			});
			return createdData;
		} catch (error) {
			throw new Error(error.message);
		}
	}
	static async createMany(data, model, select) {
		// Função para criar vários registros no banco de dados.
		// Pode filtrar os campos que deseja retornar, utilizando o parâmetro select.
		if(!model ){
			throw new Error(!data?"Data and model is required.":"Model is required.");
		}
		if(!(typeof select === 'object' || !select)){
			throw new Error("Select isn't a object");			
		}
		try {
			const createdData = await model.createMany({
				data: data,
				select: select,
			});
			return createdData;
		} catch (error) {
			throw new Error(error.message);
		}
	}
}
