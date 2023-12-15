import Wine, { IWine } from '../models/Wine';

export const getAllWines = async (): Promise<IWine[]> => {
    try {
        const wines = await Wine.find();
        return wines;
    } catch (error) {
        throw new Error('Erro ao buscar vinhos no service');
    }
};

export const getWineById = async (id: string): Promise<IWine | null> => {
    try {
        const wine = await Wine.findById(id);
        return wine;
    } catch (error) {
        throw new Error('Erro ao buscar vinho por ID no service');
    }
};

export const getWinesByCountry = async (country: string): Promise<IWine[]> => {
    try {
        const wines = await Wine.find({ country });
        return wines;
    } catch (error) {
        throw new Error('Erro ao buscar vinhos por país no service');
    }
};

export const updateWineById = async (
    id: string,
    updatedWineData: Partial<IWine>
): Promise<IWine | null> => {
    try {
        const updatedWine = await Wine.findByIdAndUpdate(id, updatedWineData, { new: true });
        return updatedWine;
    } catch (error) {
        throw new Error('Erro ao atualizar vinho por ID no service');
    }
};

