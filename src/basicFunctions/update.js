export default class Update {
    // Classe para atualização de registros no banco de dados, sendo o único caminho que o dado pode ser atualizado no banco de dados.
	static async updateOneById(id, model,data, select) {
        // Função para atualizar um registro no banco de dados, utilizando o id.
        // Pode filtrar os campos que deseja retornar, utilizando o parâmetro select.
        if(!data ){ 
			throw new Error(!id?"Id, model and data is required.":!model?"Model and data is required.":"Data is required.");
		}
        if(!(typeof select === 'object' || !select)){
			throw new Error("Select isn't a object");			
		}
		try {
			const updatedData = await model.update({
				where: {id:id},
				data: data,
				select: select,
			});
			return updatedData;
		} catch (error) {
			throw new Error(error.message);
		}
	}
    static async updateMany(data, model, where, select) {
        // Função para atualizar vários registros no banco de dados, utilizando um filtro.
        // Pode filtrar os campos que deseja retornar, utilizando o parâmetro select.]
        if(!where ){
            throw new Error((typeof where === 'undefined')?"where and model is required.":typeof where === 'object'?"Where isn't a object and Model is required.": "Model is required.");
        }
        if(!(typeof select === 'object' || !select)){
			throw new Error("Select isn't a object");			
		}
        try {
            const updatedData = await model.updateMany({
                where: where,
                data: data,
                select: select,
            });
            return updatedData;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}
